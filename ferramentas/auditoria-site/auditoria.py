#!/usr/bin/env python3
"""Auditoria mecânica das páginas de docs/ (itens D1 a D11 do Plano de Ensino que podem ser
verificados por leitura do texto) e geração da matriz da Entrega 8.

Uso (na raiz do repositório):
    python ferramentas/auditoria-site/auditoria.py json  saida.json
    python ferramentas/auditoria-site/auditoria.py matriz            # imprime a matriz em Markdown

O script só confere a PRESENÇA de seções, legendas e marcadores. Ele não avalia o conteúdo:
a verificação humana continua necessária (Entrega 8).
"""
import json
import re
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
DOCS = RAIZ / 'docs'

GENERICOS = {'', '-', '—', 'pendente', 'a definir', 'a preencher', 'integrantes do grupo',
             'todos os integrantes do grupo', 'grupo 03', 'revisão humana pendente'}
NAO_SE_APLICA = {'index.md', 'atas/modelo.md'}


def paginas():
    return sorted(p.relative_to(DOCS).as_posix() for p in DOCS.rglob('*.md'))


def revisor_nominal(texto):
    """Último revisor do histórico é nominal (nome próprio) e não é o autor da mesma linha?"""
    ultimo = None
    for linha in texto.splitlines():
        if re.match(r'^\|\s*\d\d/\d\d/\d{4}\s*\|\s*\d+\.\d+\s*\|', linha):
            celulas = [c.strip() for c in linha.strip().strip('|').split('|')]
            if len(celulas) >= 5:
                ultimo = (celulas[-2], celulas[-1])
    if ultimo is None:
        return None
    autor, revisor = ultimo
    r = re.sub(r'[*_]', '', revisor).strip().lower()
    if r in GENERICOS or 'verificar' in r:
        return False
    return r not in autor.lower()


def auditar(p):
    t = (DOCS / p).read_text(encoding='utf-8')
    tabelas = len(re.findall(r'^\|[\s:|-]*-{3,}[\s:|-]*\|\s*$', t, re.M))
    legendas = len(re.findall(r'^\*\*(Tabela|Quadro) \d+ – ', t, re.M))
    figuras = len(re.findall(r'^\*\*Figura \d+ – ', t, re.M))
    imagens = len(re.findall(r'!\[[^\]]*\]\([^)]+\)', t))
    fontes = len(re.findall(r'^Fonte[s]?: ', t, re.M))
    return dict(
        pagina=p,
        palavras=len(t.split()),
        historico=bool(re.search(r'^##\s+Hist[óo]rico de vers', t, re.M | re.I)),
        revisor_nominal=revisor_nominal(t),
        referencias=bool(re.search(r'^##\s+Refer[êe]ncias', t, re.M | re.I)),
        legendas_ok=(legendas >= tabelas and figuras >= imagens and fontes >= max(legendas + figuras, 0) - 0),
        tabelas=tabelas, legendas=legendas, figuras=figuras, imagens=imagens, fontes=fontes,
        introducao=bool(re.search(r'^##\s+(\d+\.\s*)?Introdu[çc][ãa]o', t, re.M | re.I)),
        contribuicao=bool(re.search(r'^##\s+(Tabela|Quadro) de contribui', t, re.M | re.I)),
        ia=bool(re.search(r'^##\s+Agradecimentos e uso de IA', t, re.M | re.I)),
        verificar=len(re.findall(r'\[VERIFICAR', t)),
        figma=len(re.findall(r'figma\.com', t)),
    )


def marca(valor, aplica=True):
    if not aplica:
        return 'Não se aplica'
    if valor is None:
        return 'Não conforme'
    return 'Conforme' if valor else 'Não conforme'


def matriz(inicio=2):
    n_quadro = inicio
    linhas = []
    grupos = {}
    for p in paginas():
        grupo = p.split('/')[0] if p.split('/')[0].startswith('entrega-') else 'Geral'
        grupos.setdefault(grupo, []).append(p)
    ordem = sorted(g for g in grupos if g != 'Geral') + ['Geral']
    total = {k: [0, 0] for k in ('D1', 'D2', 'D3', 'D4', 'D5', 'D10', 'D11')}
    for g in ordem:
        titulo = 'Páginas gerais' if g == 'Geral' else 'Entrega ' + g.split('-')[1]
        linhas += ['', f'### {titulo}', '',
                   f'**Quadro {n_quadro} – Matriz de conformidade das páginas ({titulo}; C = Conforme, NC = Não conforme, NA = Não se aplica)**', '',
                   '| Página | D1 Histórico | D2 Revisor nominal | D3 Referências | D4 Legendas e fonte | D5 Introdução | D10 Contribuição | D11 IA | [VERIFICAR] abertos |',
                   '| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | ---: |']
        for p in grupos[g]:
            a = auditar(p)
            na = p in NAO_SE_APLICA
            cel = {
                'D1': marca(a['historico'], not na), 'D2': marca(a['revisor_nominal'], not na),
                'D3': marca(a['referencias'], not na), 'D4': marca(a['legendas_ok'], not na),
                'D5': marca(a['introducao'], not na), 'D10': marca(a['contribuicao'], not na),
                'D11': marca(a['ia'], not na),
            }
            for k, v in cel.items():
                if v != 'Não se aplica':
                    total[k][1] += 1
                    total[k][0] += v == 'Conforme'
            curto = {'Conforme': 'C', 'Não conforme': 'NC', 'Não se aplica': 'NA'}
            linhas.append(f"| [{p}](../{p}) | " + ' | '.join(curto[cel[k]] for k in ('D1', 'D2', 'D3', 'D4', 'D5', 'D10', 'D11')) + f" | {a['verificar']} |")
        linhas += ['', 'Fonte: elaborado pelos autores (2026), com ferramentas/auditoria-site/auditoria.py.']
        n_quadro += 1
    resumo = ['| Item | Conforme | Total avaliado |', '| --- | ---: | ---: |']
    nomes = {'D1': 'D1 Histórico de versão', 'D2': 'D2 Autor e revisor nominal', 'D3': 'D3 Referências', 'D4': 'D4 Legenda e fonte das tabelas e imagens',
             'D5': 'D5 Introdução', 'D10': 'D10 Tabela de contribuição', 'D11': 'D11 Uso de IA generativa'}
    for k in total:
        resumo.append(f'| {nomes[k]} | {total[k][0]} | {total[k][1]} |')
    return '\n'.join(resumo) + '\n' + '\n'.join(linhas)


if __name__ == '__main__':
    modo = sys.argv[1] if len(sys.argv) > 1 else 'matriz'
    if modo == 'json':
        Path(sys.argv[2]).write_text(json.dumps([auditar(p) for p in paginas()], ensure_ascii=False, indent=1), encoding='utf-8')
    else:
        sys.stdout.reconfigure(encoding='utf-8')
        print(matriz())
