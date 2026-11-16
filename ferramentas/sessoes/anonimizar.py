#!/usr/bin/env python3
"""Anonimiza a transcrição de uma sessão (Teams .vtt, .txt ou .docx) e gera uma tabela em Markdown.

Uso:
    python ferramentas/sessoes/anonimizar.py transcricao.vtt --codigo P8 --nome "Ruan" --nome "Ruan Silva" > saida.md

- Cada --nome é trocado pelo código do participante (ex.: P8), sem diferenciar maiúsculas e minúsculas.
- E-mails e telefones são trocados por [e-mail] e [telefone].
- O script NÃO garante o anonimato: leia a saída inteira antes de publicar. Nomes de terceiros,
  escolas, bairros e outros dados que identifiquem a pessoa precisam ser conferidos à mão.
"""
import argparse
import re
import sys
import zipfile
from xml.etree import ElementTree as ET

EMAIL = re.compile(r'[\w.+-]+@[\w-]+(\.[\w-]+)+')
TELEFONE = re.compile(r'(\+?\d{2}\s?)?\(?\d{2}\)?\s?9?\d{4}[-\s]?\d{4}')


def ler(caminho):
    if caminho.lower().endswith('.docx'):
        with zipfile.ZipFile(caminho) as z:
            raiz = ET.fromstring(z.read('word/document.xml'))
        ns = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
        return [''.join(t.text or '' for t in p.iter(ns + 't')) for p in raiz.iter(ns + 'p')]
    with open(caminho, encoding='utf-8-sig') as f:
        return f.read().splitlines()


def blocos(linhas):
    """Devolve (tempo, falante, texto). Entende o VTT do Teams; no resto, devolve linha a linha."""
    saida, tempo, i = [], None, 0
    while i < len(linhas):
        l = linhas[i].strip()
        m = re.match(r'^(\d{1,2}:)?(\d{2}:\d{2})(\.\d+)?\s*-->', l)
        if m:
            tempo = (m.group(1) or '') + m.group(2)
            i += 1
            texto = []
            while i < len(linhas) and linhas[i].strip():
                texto.append(linhas[i].strip())
                i += 1
            junto = ' '.join(texto)
            v = re.match(r'^<v ([^>]+)>(.*?)(</v>)?$', junto)
            saida.append((tempo, v.group(1) if v else '', (v.group(2) if v else junto)))
        elif l and l != 'WEBVTT' and not re.match(r'^[0-9a-f-]{8,}(/\d+-\d+)?$', l) and '-->' not in l:
            saida.append((tempo or '', '', l))
        i += 1
    return saida


def mascarar(texto, nomes, codigo):
    n = 0
    for nome in sorted(nomes, key=len, reverse=True):
        texto, k = re.subn(r'(?<!\w)' + re.escape(nome) + r'(?!\w)', codigo, texto, flags=re.I)
        n += k
    texto, k1 = EMAIL.subn('[e-mail]', texto)
    texto, k2 = TELEFONE.subn('[telefone]', texto)
    return texto, n + k1 + k2


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('arquivo')
    ap.add_argument('--codigo', required=True, help='código do participante, ex.: P8')
    ap.add_argument('--nome', action='append', default=[], help='nome a ocultar (repita para variações)')
    a = ap.parse_args()
    sys.stdout.reconfigure(encoding='utf-8')
    total = 0
    print(f'| Tempo | Falante | Fala |\n| --- | --- | --- |')
    for tempo, falante, texto in blocos(ler(a.arquivo)):
        falante, k1 = mascarar(falante, a.nome, a.codigo)
        texto, k2 = mascarar(texto, a.nome, a.codigo)
        total += k1 + k2
        print(f"| {tempo} | {falante.replace('|', '/')} | {texto.replace('|', '/')} |")
    print(f'\n<!-- {total} substituições feitas. Conferir o texto inteiro antes de publicar. -->', file=sys.stderr)


if __name__ == '__main__':
    main()
