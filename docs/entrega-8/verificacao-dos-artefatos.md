# Verificação dos Artefatos – Entrega 8

## Tabela de contribuição

**Tabela 1 – Contribuição no artefato Verificação dos Artefatos**

| Integrante | Contribuição | Atividade (link) | Gravação (link) |
| --- | --- | --- | --- |
| Alexandre Vilar Valadares Fonsêca | **[VERIFICAR: contribuição]** | — | — |
| Gabriel Robson Nunes Neiva da Silva | **[VERIFICAR: contribuição]** | — | — |
| Henrique Schneider Fernandes da Rosa | Verificação automática das páginas do site e organização desta página | [Verificação dos artefatos](verificacao-dos-artefatos.md) | — |
| João Vitor Tavares de Sá Lima | **[VERIFICAR: contribuição]** | — | — |

Fonte: elaborado pelos autores (2026).

## Histórico de versões

**Tabela 2 – Histórico de versões do artefato Verificação dos Artefatos**

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| --- | --- | --- | --- | --- |
| 10/11/2026 | 0.1 | Criação da página com os prazos, o método e a matriz de conformidade das páginas do site, gerada por verificação automática de presença de seções, legendas e marcadores | Henrique Schneider (solicitante), com apoio do Claude (IA generativa) | **[VERIFICAR: revisor]** |

Fonte: elaborado pelos autores (2026).

## 1. Introdução

A Entrega 8 é a “Verificação dos artefatos” (Sales, 2026, Cronograma das Aulas, p. 4): a inspeção de todos os artefatos do projeto do grupo. Esta página antecipa a parte que pode ser feita por leitura automática das páginas do site, a matriz de conformidade com os itens do desenvolvimento do projeto (D1 a D11), e deixa claro o que ainda exige verificação humana. Ela não substitui a inspeção do grupo nem a do Grupo +1.

## 2. Prazos

**Tabela 3 – Prazos da Entrega 8 e do Projeto Final**

| Marco | Data | Fonte |
| --- | --- | --- |
| Entrega da Verificação dos Artefatos | 22/11/2026, 23:59 (`VerificaçãodosArtefatosNomedoSite.pdf`) | Sales (2026, p. 4); transcrição das atividades do Moodle |
| Inspeção do Grupo +1 | 23/11/2026 (`VerificaçãodosArtefatosNomedoSiteGrupo+1.pdf`) | Sales (2026, p. 4); transcrição das atividades do Moodle |
| Apresentação da etapa 8 | 24/11/2026 | Sales (2026, p. 5) |
| Entrega do Projeto Final | 30/11/2026, 23:58 (`ProjetoFinalNomedoSite.pdf`) | Sales (2026, p. 6); transcrição das atividades do Moodle |
| Avaliação do Projeto Final | 01/12, 03/12 e 08/12/2026 | Sales (2026, p. 6) |

Fonte: elaborado pelos autores (2026).

## 3. Método

O script [`ferramentas/auditoria-site/auditoria.py`](https://github.com/Interacao-Humano-Computador/2026.2-Grupo03/blob/main/ferramentas/auditoria-site/auditoria.py) lê cada página de `docs/` e confere, para os itens abaixo, se o elemento está presente. Os resultados usam as respostas da disciplina: **Conforme** (C), **Não conforme** (NC) e **Não se aplica** (NA).

**Quadro 1 – Itens verificados por leitura automática**

| Código | Item (Sales, 2026, pp. 8–9) | Como o script verifica | O que ainda exige conferência humana |
| :---: | --- | --- | --- |
| D1 | Histórico de versão padronizado | Existe a seção “Histórico de versões” | Se a versão mais recente corresponde ao estado da página |
| D2 | Autor(es) e revisor(es) para cada artefato | O revisor da última linha do histórico é nominal, diferente do autor e sem “[VERIFICAR]”, “-”, “—” ou “A definir” | Se o revisor revisou de fato |
| D3 | Referências em todos os artefatos | Existe a seção “Referências” | Formato NBR 6023 e se todas as obras citadas constam |
| D4 | Tabelas e imagens com legenda e fonte | O número de legendas e de fontes cobre o de tabelas e imagens (heurística) | Se cada ilustração é chamada no texto |
| D5 | Introdução dos artefatos | Existe a seção “Introdução” | Qualidade do texto |
| D10 | Tabela de contribuição no início | Existe a seção “Tabela de contribuição” | Se todos os integrantes constam, com links |
| D11 | Uso de IA generativa declarado | Existe a seção “Agradecimentos e uso de IA generativa” | Se a declaração diz o que foi feito |

Fonte: elaborado pelos autores (2026), com os itens de Sales (2026, pp. 8–9).

Os itens D6 a D9 (cronograma executado, atas, gravação da reunião e vídeos “não listados”) e os itens de conteúdo de cada entrega não podem ser verificados por leitura automática e dependem da inspeção humana. **[VERIFICAR: responsáveis pela conferência humana de cada entrega]**

## 4. Resultado da verificação automática

**Tabela 4 – Páginas conformes por item, em 10/11/2026**

| Item | Conforme | Total avaliado |
| --- | ---: | ---: |
| D1 Histórico de versão | 148 | 148 |
| D2 Autor e revisor nominal | 7 | 148 |
| D3 Referências | 136 | 148 |
| D4 Legenda e fonte das tabelas e imagens | 91 | 148 |
| D5 Introdução | 111 | 148 |
| D10 Tabela de contribuição | 148 | 148 |
| D11 Uso de IA generativa | 146 | 148 |

Fonte: elaborado pelos autores (2026), com `ferramentas/auditoria-site/auditoria.py`.

As páginas “Não se aplica” são a página inicial e o modelo de ata. O D2 é o item com mais páginas não conformes: em 10/11/2026, os revisores genéricos ou vazios (“—”, “-”, “A definir”) do histórico foram trocados por **[VERIFICAR: revisor]**, e a página só passa a Conforme quando houver um revisor nominal diferente do autor.

## 5. Matriz por página

Um quadro por entrega, numerados a partir do Quadro 2. As siglas são C (Conforme), NC (Não conforme) e NA (Não se aplica).
### Entrega 1

**Quadro 2 – Matriz de conformidade das páginas (Entrega 1; C = Conforme, NC = Não conforme, NA = Não se aplica)**

| Página | D1 Histórico | D2 Revisor nominal | D3 Referências | D4 Legendas e fonte | D5 Introdução | D10 Contribuição | D11 IA | [VERIFICAR] abertos |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | ---: |
| [entrega-1/integrantes/alexandre-vilar/exercicio-swebok.md](../entrega-1/integrantes/alexandre-vilar/exercicio-swebok.md) | C | NC | C | NC | C | C | C | 4 |
| [entrega-1/integrantes/alexandre-vilar/exercicio-verificacao-validacao.md](../entrega-1/integrantes/alexandre-vilar/exercicio-verificacao-validacao.md) | C | NC | C | NC | C | C | C | 4 |
| [entrega-1/integrantes/alexandre-vilar/index.md](../entrega-1/integrantes/alexandre-vilar/index.md) | C | NC | C | C | C | C | C | 4 |
| [entrega-1/integrantes/alexandre-vilar/lista-decide.md](../entrega-1/integrantes/alexandre-vilar/lista-decide.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-1/integrantes/gabriel-robson/index.md](../entrega-1/integrantes/gabriel-robson/index.md) | C | NC | C | C | C | C | C | 4 |
| [entrega-1/integrantes/henrique-schneider/exercicio-planejamento-avaliacao.md](../entrega-1/integrantes/henrique-schneider/exercicio-planejamento-avaliacao.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-1/integrantes/henrique-schneider/index.md](../entrega-1/integrantes/henrique-schneider/index.md) | C | NC | C | C | C | C | C | 4 |
| [entrega-1/integrantes/joao-vitor/exercicio-verificacao-validacao.md](../entrega-1/integrantes/joao-vitor/exercicio-verificacao-validacao.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-1/integrantes/joao-vitor/index.md](../entrega-1/integrantes/joao-vitor/index.md) | C | NC | C | C | C | C | C | 4 |
| [entrega-1/integrantes/joao-vitor/lista-decide.md](../entrega-1/integrantes/joao-vitor/lista-decide.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-1/integrantes/joao-vitor/lista-metodos-avaliacao.md](../entrega-1/integrantes/joao-vitor/lista-metodos-avaliacao.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-1/planejamento/cronograma-executado.md](../entrega-1/planejamento/cronograma-executado.md) | C | NC | C | C | C | C | C | 5 |
| [entrega-1/planejamento/cronograma-planejado.md](../entrega-1/planejamento/cronograma-planejado.md) | C | NC | C | C | C | C | C | 8 |
| [entrega-1/planejamento/ferramentas.md](../entrega-1/planejamento/ferramentas.md) | C | NC | C | NC | C | C | C | 7 |
| [entrega-1/planejamento/heatmap.md](../entrega-1/planejamento/heatmap.md) | C | NC | C | C | C | C | C | 7 |
| [entrega-1/planejamento/processo-de-design.md](../entrega-1/planejamento/processo-de-design.md) | C | NC | C | C | C | C | C | 7 |
| [entrega-1/planejamento/site-escolhido.md](../entrega-1/planejamento/site-escolhido.md) | C | NC | C | C | C | C | C | 6 |
| [entrega-1/planejamento/sites-avaliados.md](../entrega-1/planejamento/sites-avaliados.md) | C | NC | C | C | C | C | C | 7 |
| [entrega-1/relatorio.md](../entrega-1/relatorio.md) | C | NC | C | C | NC | C | C | 6 |
| [entrega-1/verificacao/avaliacao-monitoria.md](../entrega-1/verificacao/avaliacao-monitoria.md) | C | NC | C | C | C | C | C | 4 |
| [entrega-1/verificacao/inspecao-grupo-05.md](../entrega-1/verificacao/inspecao-grupo-05.md) | C | NC | C | C | C | C | C | 6 |
| [entrega-1/verificacao/listas.md](../entrega-1/verificacao/listas.md) | C | NC | C | C | C | C | C | 6 |

Fonte: elaborado pelos autores (2026), com ferramentas/auditoria-site/auditoria.py.

### Entrega 2

**Quadro 3 – Matriz de conformidade das páginas (Entrega 2; C = Conforme, NC = Não conforme, NA = Não se aplica)**

| Página | D1 Histórico | D2 Revisor nominal | D3 Referências | D4 Legendas e fonte | D5 Introdução | D10 Contribuição | D11 IA | [VERIFICAR] abertos |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | ---: |
| [entrega-2/contribuicoes.md](../entrega-2/contribuicoes.md) | C | NC | C | C | C | C | C | 5 |
| [entrega-2/integrantes/alexandre-vilar/index.md](../entrega-2/integrantes/alexandre-vilar/index.md) | C | NC | C | C | C | C | C | 4 |
| [entrega-2/integrantes/alexandre-vilar/lista-ctt.md](../entrega-2/integrantes/alexandre-vilar/lista-ctt.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-2/integrantes/alexandre-vilar/lista-elenco-personas.md](../entrega-2/integrantes/alexandre-vilar/lista-elenco-personas.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-2/integrantes/alexandre-vilar/lista-hta.md](../entrega-2/integrantes/alexandre-vilar/lista-hta.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-2/integrantes/alexandre-vilar/lista-perfil-usuario.md](../entrega-2/integrantes/alexandre-vilar/lista-perfil-usuario.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-2/integrantes/alexandre-vilar/lista-personas.md](../entrega-2/integrantes/alexandre-vilar/lista-personas.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-2/integrantes/gabriel-robson/index.md](../entrega-2/integrantes/gabriel-robson/index.md) | C | NC | C | C | C | C | C | 5 |
| [entrega-2/integrantes/gabriel-robson/lista-elenco-personas.md](../entrega-2/integrantes/gabriel-robson/lista-elenco-personas.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-2/integrantes/gabriel-robson/lista-hta.md](../entrega-2/integrantes/gabriel-robson/lista-hta.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-2/integrantes/gabriel-robson/lista-personas.md](../entrega-2/integrantes/gabriel-robson/lista-personas.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-2/integrantes/henrique-schneider/index.md](../entrega-2/integrantes/henrique-schneider/index.md) | C | NC | C | C | C | C | C | 4 |
| [entrega-2/integrantes/joao-vitor/index.md](../entrega-2/integrantes/joao-vitor/index.md) | C | NC | C | C | C | C | C | 4 |
| [entrega-2/integrantes/joao-vitor/lista-ctt.md](../entrega-2/integrantes/joao-vitor/lista-ctt.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-2/integrantes/joao-vitor/lista-elenco-personas.md](../entrega-2/integrantes/joao-vitor/lista-elenco-personas.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-2/integrantes/joao-vitor/lista-hta.md](../entrega-2/integrantes/joao-vitor/lista-hta.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-2/integrantes/joao-vitor/lista-perfil-usuario.md](../entrega-2/integrantes/joao-vitor/lista-perfil-usuario.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-2/integrantes/joao-vitor/lista-personas.md](../entrega-2/integrantes/joao-vitor/lista-personas.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-2/perfil-e-tarefas/analise-de-tarefas.md](../entrega-2/perfil-e-tarefas/analise-de-tarefas.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-2/perfil-e-tarefas/aspectos-eticos-tcle.md](../entrega-2/perfil-e-tarefas/aspectos-eticos-tcle.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-2/perfil-e-tarefas/cenarios.md](../entrega-2/perfil-e-tarefas/cenarios.md) | C | NC | C | C | C | C | C | 6 |
| [entrega-2/perfil-e-tarefas/perfis-e-personas.md](../entrega-2/perfil-e-tarefas/perfis-e-personas.md) | C | NC | C | C | C | C | C | 6 |
| [entrega-2/perfil-e-tarefas/questionarios.md](../entrega-2/perfil-e-tarefas/questionarios.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-2/relatorio.md](../entrega-2/relatorio.md) | C | NC | C | C | NC | C | C | 8 |
| [entrega-2/verificacao/avaliacao-monitoria.md](../entrega-2/verificacao/avaliacao-monitoria.md) | C | NC | C | C | C | C | C | 4 |
| [entrega-2/verificacao/inspecao-grupo-02.md](../entrega-2/verificacao/inspecao-grupo-02.md) | C | NC | C | NC | C | C | C | 6 |
| [entrega-2/verificacao/listas.md](../entrega-2/verificacao/listas.md) | C | NC | C | C | C | C | C | 6 |

Fonte: elaborado pelos autores (2026), com ferramentas/auditoria-site/auditoria.py.

### Entrega 3

**Quadro 4 – Matriz de conformidade das páginas (Entrega 3; C = Conforme, NC = Não conforme, NA = Não se aplica)**

| Página | D1 Histórico | D2 Revisor nominal | D3 Referências | D4 Legendas e fonte | D5 Introdução | D10 Contribuição | D11 IA | [VERIFICAR] abertos |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | ---: |
| [entrega-3/contribuicoes.md](../entrega-3/contribuicoes.md) | C | NC | C | C | C | C | C | 6 |
| [entrega-3/integrantes/alexandre-vilar/index.md](../entrega-3/integrantes/alexandre-vilar/index.md) | C | NC | C | C | C | C | C | 4 |
| [entrega-3/integrantes/gabriel-robson/index.md](../entrega-3/integrantes/gabriel-robson/index.md) | C | NC | C | C | C | C | C | 4 |
| [entrega-3/integrantes/henrique-schneider/index.md](../entrega-3/integrantes/henrique-schneider/index.md) | C | NC | C | C | C | C | C | 4 |
| [entrega-3/integrantes/joao-vitor/index.md](../entrega-3/integrantes/joao-vitor/index.md) | C | NC | C | C | C | C | C | 4 |
| [entrega-3/principios-metas-e-guia/guia-de-estilo.md](../entrega-3/principios-metas-e-guia/guia-de-estilo.md) | C | NC | C | NC | C | C | C | 7 |
| [entrega-3/principios-metas-e-guia/metas-de-usabilidade.md](../entrega-3/principios-metas-e-guia/metas-de-usabilidade.md) | C | NC | C | NC | NC | C | C | 5 |
| [entrega-3/principios-metas-e-guia/principios-gerais.md](../entrega-3/principios-metas-e-guia/principios-gerais.md) | C | NC | C | C | C | C | C | 6 |
| [entrega-3/relatorio.md](../entrega-3/relatorio.md) | C | NC | C | C | NC | C | C | 6 |
| [entrega-3/verificacao/avaliacao-monitoria.md](../entrega-3/verificacao/avaliacao-monitoria.md) | C | NC | C | C | C | C | C | 4 |
| [entrega-3/verificacao/inspecao-grupo-07.md](../entrega-3/verificacao/inspecao-grupo-07.md) | C | NC | C | NC | C | C | C | 6 |
| [entrega-3/verificacao/listas.md](../entrega-3/verificacao/listas.md) | C | NC | C | C | C | C | C | 5 |

Fonte: elaborado pelos autores (2026), com ferramentas/auditoria-site/auditoria.py.

### Entrega 4

**Quadro 5 – Matriz de conformidade das páginas (Entrega 4; C = Conforme, NC = Não conforme, NA = Não se aplica)**

| Página | D1 Histórico | D2 Revisor nominal | D3 Referências | D4 Legendas e fonte | D5 Introdução | D10 Contribuição | D11 IA | [VERIFICAR] abertos |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | ---: |
| [entrega-4/contribuicoes.md](../entrega-4/contribuicoes.md) | C | NC | C | C | C | C | C | 8 |
| [entrega-4/integrantes/alexandre-vilar/index.md](../entrega-4/integrantes/alexandre-vilar/index.md) | C | NC | C | C | C | C | C | 4 |
| [entrega-4/integrantes/alexandre-vilar/lista-storyboard.md](../entrega-4/integrantes/alexandre-vilar/lista-storyboard.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-4/integrantes/alexandre-vilar/planejamento-individual.md](../entrega-4/integrantes/alexandre-vilar/planejamento-individual.md) | C | NC | C | NC | C | C | C | 7 |
| [entrega-4/integrantes/gabriel-robson/index.md](../entrega-4/integrantes/gabriel-robson/index.md) | C | NC | C | C | C | C | C | 4 |
| [entrega-4/integrantes/gabriel-robson/planejamento-individual.md](../entrega-4/integrantes/gabriel-robson/planejamento-individual.md) | C | NC | C | NC | C | C | C | 7 |
| [entrega-4/integrantes/henrique-schneider/index.md](../entrega-4/integrantes/henrique-schneider/index.md) | C | NC | C | C | C | C | C | 4 |
| [entrega-4/integrantes/henrique-schneider/planejamento-individual.md](../entrega-4/integrantes/henrique-schneider/planejamento-individual.md) | C | NC | C | NC | C | C | C | 7 |
| [entrega-4/integrantes/joao-vitor/index.md](../entrega-4/integrantes/joao-vitor/index.md) | C | NC | C | C | C | C | C | 4 |
| [entrega-4/integrantes/joao-vitor/lista-storyboard.md](../entrega-4/integrantes/joao-vitor/lista-storyboard.md) | C | NC | C | NC | C | C | C | 5 |
| [entrega-4/integrantes/joao-vitor/planejamento-individual.md](../entrega-4/integrantes/joao-vitor/planejamento-individual.md) | C | NC | C | NC | C | C | C | 7 |
| [entrega-4/planejamento-da-avaliacao/decide.md](../entrega-4/planejamento-da-avaliacao/decide.md) | C | NC | C | NC | C | C | C | 6 |
| [entrega-4/relatorio.md](../entrega-4/relatorio.md) | C | NC | C | C | NC | C | C | 6 |
| [entrega-4/verificacao/inspecao-grupo-01.md](../entrega-4/verificacao/inspecao-grupo-01.md) | C | NC | C | NC | C | C | C | 8 |
| [entrega-4/verificacao/listas.md](../entrega-4/verificacao/listas.md) | C | NC | C | C | C | C | C | 5 |

Fonte: elaborado pelos autores (2026), com ferramentas/auditoria-site/auditoria.py.

### Entrega 5

**Quadro 6 – Matriz de conformidade das páginas (Entrega 5; C = Conforme, NC = Não conforme, NA = Não se aplica)**

| Página | D1 Histórico | D2 Revisor nominal | D3 Referências | D4 Legendas e fonte | D5 Introdução | D10 Contribuição | D11 IA | [VERIFICAR] abertos |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | ---: |
| [entrega-5/contribuicoes.md](../entrega-5/contribuicoes.md) | C | NC | NC | NC | C | C | C | 9 |
| [entrega-5/integrantes/alexandre-vilar/avaliacao.md](../entrega-5/integrantes/alexandre-vilar/avaliacao.md) | C | NC | C | NC | NC | C | C | 7 |
| [entrega-5/integrantes/alexandre-vilar/hta-atual.md](../entrega-5/integrantes/alexandre-vilar/hta-atual.md) | C | NC | C | C | NC | C | C | 6 |
| [entrega-5/integrantes/alexandre-vilar/hta-redesign.md](../entrega-5/integrantes/alexandre-vilar/hta-redesign.md) | C | NC | C | C | NC | C | C | 5 |
| [entrega-5/integrantes/alexandre-vilar/index.md](../entrega-5/integrantes/alexandre-vilar/index.md) | C | NC | C | C | C | C | C | 7 |
| [entrega-5/integrantes/alexandre-vilar/prototipo-papel.md](../entrega-5/integrantes/alexandre-vilar/prototipo-papel.md) | C | NC | C | NC | NC | C | C | 4 |
| [entrega-5/integrantes/alexandre-vilar/relatorio-pos-entrevista.md](../entrega-5/integrantes/alexandre-vilar/relatorio-pos-entrevista.md) | C | NC | C | NC | NC | C | C | 7 |
| [entrega-5/integrantes/alexandre-vilar/roteiro-entrevista.md](../entrega-5/integrantes/alexandre-vilar/roteiro-entrevista.md) | C | NC | C | NC | NC | C | C | 5 |
| [entrega-5/integrantes/alexandre-vilar/storyboard.md](../entrega-5/integrantes/alexandre-vilar/storyboard.md) | C | NC | C | C | NC | C | C | 5 |
| [entrega-5/integrantes/alexandre-vilar/video-entrevista.md](../entrega-5/integrantes/alexandre-vilar/video-entrevista.md) | C | NC | NC | NC | NC | C | C | 6 |
| [entrega-5/integrantes/gabriel-robson/avaliacao.md](../entrega-5/integrantes/gabriel-robson/avaliacao.md) | C | NC | C | NC | NC | C | C | 3 |
| [entrega-5/integrantes/gabriel-robson/hta-atual.md](../entrega-5/integrantes/gabriel-robson/hta-atual.md) | C | NC | C | NC | NC | C | C | 3 |
| [entrega-5/integrantes/gabriel-robson/hta-redesign.md](../entrega-5/integrantes/gabriel-robson/hta-redesign.md) | C | NC | C | NC | NC | C | C | 3 |
| [entrega-5/integrantes/gabriel-robson/index.md](../entrega-5/integrantes/gabriel-robson/index.md) | C | NC | C | NC | NC | C | C | 3 |
| [entrega-5/integrantes/gabriel-robson/roteiro-entrevista.md](../entrega-5/integrantes/gabriel-robson/roteiro-entrevista.md) | C | NC | C | NC | NC | C | C | 3 |
| [entrega-5/integrantes/gabriel-robson/storyboard.md](../entrega-5/integrantes/gabriel-robson/storyboard.md) | C | NC | C | NC | NC | C | C | 3 |
| [entrega-5/integrantes/henrique-schneider/hta.md](../entrega-5/integrantes/henrique-schneider/hta.md) | C | C | C | C | C | C | NC | 0 |
| [entrega-5/integrantes/henrique-schneider/index.md](../entrega-5/integrantes/henrique-schneider/index.md) | C | C | C | C | C | C | C | 0 |
| [entrega-5/integrantes/henrique-schneider/prototipo-papel.md](../entrega-5/integrantes/henrique-schneider/prototipo-papel.md) | C | NC | C | C | NC | C | C | 1 |
| [entrega-5/integrantes/henrique-schneider/relatorio-pos-entrevista.md](../entrega-5/integrantes/henrique-schneider/relatorio-pos-entrevista.md) | C | C | C | C | NC | C | C | 0 |
| [entrega-5/integrantes/henrique-schneider/roteiro-entrevista.md](../entrega-5/integrantes/henrique-schneider/roteiro-entrevista.md) | C | C | C | C | C | C | NC | 0 |
| [entrega-5/integrantes/henrique-schneider/storyboard.md](../entrega-5/integrantes/henrique-schneider/storyboard.md) | C | C | C | C | NC | C | C | 0 |
| [entrega-5/integrantes/henrique-schneider/video-entrevista.md](../entrega-5/integrantes/henrique-schneider/video-entrevista.md) | C | C | C | C | NC | C | C | 0 |
| [entrega-5/integrantes/joao-vitor/avaliacao.md](../entrega-5/integrantes/joao-vitor/avaliacao.md) | C | NC | C | NC | NC | C | C | 8 |
| [entrega-5/integrantes/joao-vitor/hta-atual.md](../entrega-5/integrantes/joao-vitor/hta-atual.md) | C | NC | C | C | NC | C | C | 5 |
| [entrega-5/integrantes/joao-vitor/hta-redesign.md](../entrega-5/integrantes/joao-vitor/hta-redesign.md) | C | NC | C | C | NC | C | C | 5 |
| [entrega-5/integrantes/joao-vitor/index.md](../entrega-5/integrantes/joao-vitor/index.md) | C | NC | C | C | C | C | C | 5 |
| [entrega-5/integrantes/joao-vitor/relatorio-pos-entrevista.md](../entrega-5/integrantes/joao-vitor/relatorio-pos-entrevista.md) | C | NC | C | C | NC | C | C | 7 |
| [entrega-5/integrantes/joao-vitor/roteiro-entrevista.md](../entrega-5/integrantes/joao-vitor/roteiro-entrevista.md) | C | NC | C | NC | NC | C | C | 6 |
| [entrega-5/integrantes/joao-vitor/storyboard.md](../entrega-5/integrantes/joao-vitor/storyboard.md) | C | NC | C | C | NC | C | C | 5 |
| [entrega-5/integrantes/joao-vitor/video-entrevista.md](../entrega-5/integrantes/joao-vitor/video-entrevista.md) | C | NC | NC | C | NC | C | C | 6 |
| [entrega-5/relatorio-do-grupo.md](../entrega-5/relatorio-do-grupo.md) | C | NC | NC | NC | C | C | C | 11 |
| [entrega-5/relatorio.md](../entrega-5/relatorio.md) | C | NC | C | C | NC | C | C | 8 |
| [entrega-5/verificacao/inspecao-grupo-08.md](../entrega-5/verificacao/inspecao-grupo-08.md) | C | C | C | NC | C | C | C | 4 |
| [entrega-5/verificacao/lista-de-verificacao.md](../entrega-5/verificacao/lista-de-verificacao.md) | C | NC | C | C | C | C | C | 4 |

Fonte: elaborado pelos autores (2026), com ferramentas/auditoria-site/auditoria.py.

### Entrega 6

**Quadro 7 – Matriz de conformidade das páginas (Entrega 6; C = Conforme, NC = Não conforme, NA = Não se aplica)**

| Página | D1 Histórico | D2 Revisor nominal | D3 Referências | D4 Legendas e fonte | D5 Introdução | D10 Contribuição | D11 IA | [VERIFICAR] abertos |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | ---: |
| [entrega-6/contribuicoes.md](../entrega-6/contribuicoes.md) | C | NC | C | C | C | C | C | 3 |
| [entrega-6/integrantes/alexandre-vilar/index.md](../entrega-6/integrantes/alexandre-vilar/index.md) | C | NC | NC | NC | C | C | C | 4 |
| [entrega-6/integrantes/alexandre-vilar/planejamento-alta-fidelidade.md](../entrega-6/integrantes/alexandre-vilar/planejamento-alta-fidelidade.md) | C | NC | NC | NC | NC | C | C | 5 |
| [entrega-6/integrantes/alexandre-vilar/prototipo-papel.md](../entrega-6/integrantes/alexandre-vilar/prototipo-papel.md) | C | NC | NC | NC | NC | C | C | 5 |
| [entrega-6/integrantes/alexandre-vilar/video-avaliacao.md](../entrega-6/integrantes/alexandre-vilar/video-avaliacao.md) | C | NC | NC | C | NC | C | C | 5 |
| [entrega-6/integrantes/henrique-schneider/especificacao-alta-fidelidade.md](../entrega-6/integrantes/henrique-schneider/especificacao-alta-fidelidade.md) | C | NC | C | C | C | C | C | 11 |
| [entrega-6/integrantes/henrique-schneider/index.md](../entrega-6/integrantes/henrique-schneider/index.md) | C | NC | C | C | C | C | C | 2 |
| [entrega-6/integrantes/henrique-schneider/planejamento-alta-fidelidade.md](../entrega-6/integrantes/henrique-schneider/planejamento-alta-fidelidade.md) | C | NC | C | NC | C | C | C | 6 |
| [entrega-6/integrantes/henrique-schneider/prototipo-papel.md](../entrega-6/integrantes/henrique-schneider/prototipo-papel.md) | C | NC | C | NC | C | C | C | 2 |
| [entrega-6/integrantes/joao-vitor/index.md](../entrega-6/integrantes/joao-vitor/index.md) | C | NC | NC | C | C | C | C | 4 |
| [entrega-6/integrantes/joao-vitor/planejamento-alta-fidelidade.md](../entrega-6/integrantes/joao-vitor/planejamento-alta-fidelidade.md) | C | NC | NC | C | NC | C | C | 5 |
| [entrega-6/integrantes/joao-vitor/prototipo-papel.md](../entrega-6/integrantes/joao-vitor/prototipo-papel.md) | C | NC | NC | C | NC | C | C | 5 |
| [entrega-6/integrantes/joao-vitor/video-avaliacao.md](../entrega-6/integrantes/joao-vitor/video-avaliacao.md) | C | NC | NC | C | NC | C | C | 6 |
| [entrega-6/relatorio.md](../entrega-6/relatorio.md) | C | NC | C | C | C | C | C | 7 |
| [entrega-6/verificacao/lista-de-verificacao.md](../entrega-6/verificacao/lista-de-verificacao.md) | C | NC | C | C | C | C | C | 20 |

Fonte: elaborado pelos autores (2026), com ferramentas/auditoria-site/auditoria.py.

### Entrega 7

**Quadro 8 – Matriz de conformidade das páginas (Entrega 7; C = Conforme, NC = Não conforme, NA = Não se aplica)**

| Página | D1 Histórico | D2 Revisor nominal | D3 Referências | D4 Legendas e fonte | D5 Introdução | D10 Contribuição | D11 IA | [VERIFICAR] abertos |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | ---: |
| [entrega-7/relatorio.md](../entrega-7/relatorio.md) | C | NC | C | C | C | C | C | 16 |

Fonte: elaborado pelos autores (2026), com ferramentas/auditoria-site/auditoria.py.

### Entrega 8

**Quadro 9 – Matriz de conformidade das páginas (Entrega 8; C = Conforme, NC = Não conforme, NA = Não se aplica)**

| Página | D1 Histórico | D2 Revisor nominal | D3 Referências | D4 Legendas e fonte | D5 Introdução | D10 Contribuição | D11 IA | [VERIFICAR] abertos |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | ---: |
| [entrega-8/verificacao-dos-artefatos.md](../entrega-8/verificacao-dos-artefatos.md) | C | NC | C | C | C | C | C | 18 |

Fonte: elaborado pelos autores (2026), com ferramentas/auditoria-site/auditoria.py.

### Páginas gerais

**Quadro 10 – Matriz de conformidade das páginas (Páginas gerais; C = Conforme, NC = Não conforme, NA = Não se aplica)**

| Página | D1 Histórico | D2 Revisor nominal | D3 Referências | D4 Legendas e fonte | D5 Introdução | D10 Contribuição | D11 IA | [VERIFICAR] abertos |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | ---: |
| [apresentacoes.md](../apresentacoes.md) | C | NC | C | C | C | C | C | 8 |
| [atas/ata-reuniao-20260927-01.md](../atas/ata-reuniao-20260927-01.md) | C | NC | C | C | C | C | C | 7 |
| [atas/ata-reuniao-20261014-02.md](../atas/ata-reuniao-20261014-02.md) | C | NC | C | C | C | C | C | 7 |
| [atas/index.md](../atas/index.md) | C | NC | C | C | C | C | C | 9 |
| [atas/modelo.md](../atas/modelo.md) | NA | NA | NA | NA | NA | NA | NA | 5 |
| [disciplina/plano-de-ensino.md](../disciplina/plano-de-ensino.md) | C | NC | C | C | C | C | C | 7 |
| [index.md](../index.md) | NA | NA | NA | NA | NA | NA | NA | 12 |
| [integrantes/alexandre-vilar.md](../integrantes/alexandre-vilar.md) | C | NC | C | C | C | C | C | 5 |
| [integrantes/eduardo-ribeiro.md](../integrantes/eduardo-ribeiro.md) | C | NC | C | C | C | C | C | 5 |
| [integrantes/gabriel-robson.md](../integrantes/gabriel-robson.md) | C | NC | C | C | C | C | C | 5 |
| [integrantes/henrique-schneider.md](../integrantes/henrique-schneider.md) | C | NC | C | C | C | C | C | 5 |
| [integrantes/index.md](../integrantes/index.md) | C | NC | C | C | C | C | C | 5 |
| [integrantes/joao-vitor.md](../integrantes/joao-vitor.md) | C | NC | C | C | C | C | C | 5 |
| [listas-verificacao/autoavaliacao.md](../listas-verificacao/autoavaliacao.md) | C | NC | C | C | C | C | C | 8 |
| [listas-verificacao/index.md](../listas-verificacao/index.md) | C | NC | C | C | C | C | C | 6 |
| [listas-verificacao/projeto-final.md](../listas-verificacao/projeto-final.md) | C | NC | C | C | C | C | C | 5 |
| [relatorios/index.md](../relatorios/index.md) | C | NC | C | C | C | C | C | 6 |
| [trabalhos-avaliativos/alexandre-vilar.md](../trabalhos-avaliativos/alexandre-vilar.md) | C | NC | C | C | C | C | C | 4 |
| [trabalhos-avaliativos/gabriel-robson.md](../trabalhos-avaliativos/gabriel-robson.md) | C | NC | C | C | C | C | C | 5 |
| [trabalhos-avaliativos/henrique-schneider.md](../trabalhos-avaliativos/henrique-schneider.md) | C | NC | C | C | C | C | C | 4 |
| [trabalhos-avaliativos/index.md](../trabalhos-avaliativos/index.md) | C | NC | C | C | C | C | C | 5 |
| [trabalhos-avaliativos/joao-vitor.md](../trabalhos-avaliativos/joao-vitor.md) | C | NC | C | C | C | C | C | 4 |

Fonte: elaborado pelos autores (2026), com ferramentas/auditoria-site/auditoria.py.

## 6. Pendências humanas

As pendências que não podem ser resolvidas por leitura automática (revisores, vídeos, atas, dados das avaliações, itens [VERIFICAR] abertos e decisões do grupo) estão registradas na pasta `pendencias/` do repositório e no [relatório da refatoração](https://github.com/Interacao-Humano-Computador/2026.2-Grupo03/blob/main/REFATORACAO-RELATORIO.md). A coluna “[VERIFICAR] abertos” dos quadros da Seção 5 mostra quantos marcadores cada página ainda tem.

## Referências

SALES, André Barros de. *Plano de Ensino: Interação Humano Computador (FGA0173), 02/2026, Turma 01, v1*. Brasília: Universidade de Brasília, 2026.

## Agradecimentos e uso de IA generativa

**Uso de IA generativa nesta página.** Em 10/11/2026, o Claude (Anthropic) foi utilizado, a pedido de Henrique Schneider, para escrever o script de verificação automática, executá-lo sobre as páginas do site e organizar esta página com o resultado. A matriz mostra apenas a presença de seções, legendas e marcadores e não avalia a qualidade do conteúdo. A ferramenta não é autora do artefato e seu uso não exime os autores da responsabilidade sobre o conteúdo (Sales, 2026, p. 3).
