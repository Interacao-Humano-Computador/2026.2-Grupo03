#!/usr/bin/env python3
"""Resume as medidas das sessões do teste de usabilidade e gera a Tabela 4 do relatório da Entrega 7.

Uso:
    python ferramentas/sessoes/consolidar.py medidas.csv

O CSV tem uma linha por participante e tarefa, com as colunas:
    participante,tarefa,resultado,tempo,erros,ajuda,nota
- resultado: "sem ajuda", "com ajuda" ou "nao concluiu"
- tempo: min:s (ex.: 2:35); deixe vazio se não houve
- nota: 1 a 5 (nota de facilidade); deixe vazio se não houve
Linhas de teste-piloto NÃO entram: não coloque o piloto no CSV.

Os valores-alvo são os propostos no roteiro do teste (Tabela 3) e podem ser ajustados abaixo,
depois que o autor os confirmar no piloto.
"""
import csv
import statistics
import sys

ALVO_SEGUNDOS = {'T1': 180, 'T2': 90, 'T3': 60}  # T4 não tem alvo de tempo
ALVO_NOTA = 4.0


def segundos(t):
    t = (t or '').strip()
    if not t:
        return None
    m, s = t.split(':')
    return int(m) * 60 + int(s)


def mmss(x):
    return f'{int(x // 60)}:{int(round(x % 60)):02d}'


def main(caminho):
    linhas = list(csv.DictReader(open(caminho, encoding='utf-8-sig')))
    por_tarefa = {}
    for l in linhas:
        por_tarefa.setdefault(l['tarefa'].strip().upper(), []).append(l)
    sys.stdout.reconfigure(encoding='utf-8')
    print('| Tarefa | Concluíram sem ajuda (n/N) | Tempo médio (desvio) | Erros (total) | Ajuda (total) | Nota média | Valor-alvo atingido? |')
    print('| --- | --- | --- | --- | --- | --- | --- |')
    notas_todas = []
    for t in sorted(por_tarefa):
        ls = por_tarefa[t]
        n = len(ls)
        sem = sum(1 for l in ls if l['resultado'].strip().lower() == 'sem ajuda')
        tempos = [x for x in (segundos(l['tempo']) for l in ls) if x is not None]
        erros = sum(int(l['erros'] or 0) for l in ls)
        ajuda = sum(int(l['ajuda'] or 0) for l in ls)
        notas = [float(l['nota']) for l in ls if l['nota'].strip()]
        notas_todas += notas
        if tempos:
            media = statistics.mean(tempos)
            dp = f' ({mmss(statistics.stdev(tempos))})' if len(tempos) > 1 else ' (não se aplica: N = 1)'
            tempo_txt = mmss(media) + dp
        else:
            media, tempo_txt = None, '—'
        ok_ajuda = sem == n
        ok_tempo = True if t not in ALVO_SEGUNDOS or media is None else media <= ALVO_SEGUNDOS[t]
        atingido = 'Sim' if ok_ajuda and ok_tempo else 'Não'
        if t not in ALVO_SEGUNDOS:
            atingido += ' (T4: só recuperação sem ajuda; conferir erros sem recuperação à mão)'
        nota_txt = f'{statistics.mean(notas):.1f}' if notas else '—'
        print(f'| {t} | {sem}/{n} | {tempo_txt} | {erros} | {ajuda} | {nota_txt} | {atingido} |')
    if notas_todas:
        m = statistics.mean(notas_todas)
        print(f'| Todas | — | — | — | — | {m:.1f} | {"Sim" if m >= ALVO_NOTA else "Não"} |')
    print('\nConfira os valores-alvo no roteiro (Tabela 3): os de tempo ainda dependem da confirmação depois do piloto.', file=sys.stderr)


if __name__ == '__main__':
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
