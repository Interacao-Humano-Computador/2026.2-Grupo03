# Inspeção do Grupo 02

## Tabela de contribuição

**Tabela 1 – Contribuição no artefato Inspeção do Grupo 02**

| Integrante | Contribuição | Atividade (link) | Gravação (link) |
| --- | --- | --- | --- |
| Alexandre Vilar Valadares Fonsêca | — | — | — |
| Gabriel Robson Nunes Neiva da Silva (ex-integrante) | — | — | — |
| Henrique Schneider Fernandes da Rosa | Verificação das páginas do site do Grupo 02 e organização desta página | [Inspeção do Grupo 02](inspecao-grupo-02.md) | — |
| João Vitor Tavares de Sá Lima | — | — | — |

Fonte: elaborado pelos autores (2026).

## Histórico de versões

**Tabela 2 – Histórico de versões do artefato Inspeção do Grupo 02**

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| --- | --- | --- | --- | --- |
| 23/11/2026 | 0.1 | Criação da página com a preparação da inspeção do site do Grupo 02 (itens G1 a G8 em 16 páginas e cobertura das entregas) | Henrique Schneider (solicitante), com apoio do Claude (IA generativa) | João Vitor |

Fonte: elaborado pelos autores (2026).

## 1. Introdução

Esta página registra a inspeção do site do Grupo 02 (<https://interacao-humano-computador.github.io/2026.2-Grupo02/index.html>) pelo Grupo 03, na Entrega 8. A inspeção segue o método de Fagan e a lista de inspeção descrita na [página do material conceitual](inspecao-fagan/index.md). O planejamento era fazer a inspeção dos grupos +1 e −1 na mesma reunião da inspeção do [próprio grupo](inspecao-grupo-03.md), mas o tamanho da lista de verificação não permitiu, e cada grupo ficou com a sua página. A inspeção do [Grupo 05](inspecao-grupo-05.md) está em página própria.

O site do Grupo 02 é diferente do nosso: é um conjunto de páginas HTML com um menu de entregas, e os artefatos de cada entrega são, em grande parte, arquivos PDF e vídeos. Por isso a inspeção tem duas partes: os itens gerais, aplicados às 16 páginas HTML, e a cobertura de documentos e vídeos que o menu de entregas aponta.

## 2. Itens gerais nas páginas do site

Foram verificadas as 16 páginas HTML do site em 23/11/2026, com os itens G1 a G8 da lista do Grupo 03 (histórico de versões, autor e revisor, referências, tabelas e imagens, introdução, contribuição, uso de IA e ausência de pendências). A verificação foi automática, com o apoio de IA generativa: ela confere se o elemento existe, mas não se o conteúdo está certo. O resultado é o da **preparação** (passo 3) e fica sujeito à reunião de inspeção (passo 4). O sitemap do site não existe, então a lista de páginas vem dos links do menu e das páginas internas.

**Tabela 3 – Resultado dos itens gerais por página do site do Grupo 02 (C = conforme, NC = não conforme)**

| Página | G1 | G2 | G3 | G4 | G5 | G6 | G7 | G8 |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| index.html | C | C | C | C | NC | NC | NC | C |
| equipe.html | C | C | C | NC | NC | NC | NC | C |
| entregas.html | C | NC | C | C | NC | NC | NC | NC |
| atas.html | C | NC | C | C | NC | NC | NC | NC |
| ata_20261103.html | NC | NC | NC | C | NC | NC | NC | C |
| ata_20261104.html | NC | NC | NC | C | NC | NC | NC | NC |
| ata_20261116.html | NC | NC | NC | C | NC | NC | C | C |
| dashboard.html | C | C | NC | C | NC | NC | NC | C |
| entrega1.html | C | C | C | C | C | C | NC | C |
| planejamento.html | C | C | C | C | C | NC | NC | NC |
| plan_equipe.html | C | C | C | C | C | NC | NC | C |
| plan_heatmap.html | C | C | C | C | C | NC | NC | C |
| plan_ferramentas.html | C | C | C | C | C | NC | C | C |
| plan_design.html | C | C | C | C | C | NC | NC | C |
| plan_sites.html | C | C | C | C | C | NC | NC | C |
| plan_cronograma.html | C | C | C | C | C | NC | C | C |

Fonte: elaborado pelos autores (2026).

**Tabela 4 – Resumo por item (16 páginas)**

| Item | Conformes | Não conformes | Observação |
| --- | :---: | :---: | --- |
| G1 | 13 | 3 | As três atas individuais não têm histórico de versões |
| G2 | 11 | 5 | Revisor “A definir (validação pendente)” em versões de `entregas.html`, `atas.html` e `ata_20261104.html`; atas sem autor e revisor; autores e revisores como “Todos os integrantes” ou só pelo primeiro nome |
| G3 | 12 | 4 | As três atas individuais e o painel não têm referências |
| G4 | 15 | 1 | A página da equipe tem 5 imagens sem fonte |
| G5 | 8 | 8 | Faltam introduções na página inicial, equipe, entregas, atas, painel e atas individuais |
| G6 | 1 | 15 | Só `entrega1.html` tem tabela de contribuição |
| G7 | 3 | 13 | Declaração de uso de IA em `ata_20261116.html`, `plan_ferramentas.html` e `plan_cronograma.html` |
| G8 | 12 | 4 | Marcador “[cite: 3]” esquecido no texto de `planejamento.html` e campos “A definir” em `entregas.html`, `atas.html` e `ata_20261104.html` |

Fonte: elaborado pelos autores (2026).

Os defeitos mais claros são o marcador “[cite: 3]” deixado no texto de `planejamento.html` (tipo: forma), o revisor “A definir (validação pendente)” registrado em várias versões (ausência) e o uso de “Todos os integrantes” como autor ou revisor, que não identifica quem fez a revisão (inconsistência). O painel (`dashboard.html`) carrega os dados por script, e o que ele mostra não foi verificado.

## 3. Cobertura das entregas

O menu de entregas do Grupo 02 aponta documentos, vídeos e as inspeções feitas por eles. A Tabela 5 mostra o que está linkado em cada entrega. Os documentos em PDF e os vídeos não foram abertos nesta preparação: a tabela confere só se o link existe, e não o conteúdo.

**Tabela 5 – Documentos e vídeos linkados no menu de entregas do Grupo 02**

| Entrega | Documento | Vídeo de apresentação | Inspeção do Grupo 03 feita por eles |
| --- | --- | --- | --- |
| 1 | Sim | Sim | Documento e vídeo |
| 2 | Sim, com gravações das sessões com usuários | Sim | Documento e PDF, sem vídeo |
| 3 | Sim | Sim | Documento, vídeo e PDF |
| 4 | Sim, com lista de verificação do storyboard | Sim, com vídeo da lista | Documento, vídeo e PDF (o título cita o NoFluxoUnB) |
| 5 | Sim, com PDF de Felipe, Matheus e Victor | Não há | Documento, vídeo e PDF |
| 6 | Sim, com entrega geral e lista de verificação | Sim, com vídeo da lista | Documento, vídeo e PDF |
| 7 | Sim, com partes de Felipe, Matheus e Victor | Vídeos de Felipe e de Victor; Matheus tem vídeos de teste-piloto e de sessões | Documento, vídeo, ata e PDF |
| 8 | Documento de inspeção do próprio grupo, com gráficos | 4 vídeos de inspeção | Não se aplica |

Fonte: elaborado pelos autores (2026), a partir do menu de entregas do site do Grupo 02.

Pontos para a reunião de inspeção:

- **Entrega 5:** o menu não aponta vídeo da apresentação.
- **Equipe:** a página da equipe lista cinco integrantes (Felipe Lopes Pedroza, Victor Andreozzi de La Rocque Couto, Rafael Barbosa de Melo, Matheus Do Vale Lameira e Tiago Sousa Nepomuceno), mas as partes individuais das Entregas 5 e 7 e as inspeções da Entrega 8 trazem só Felipe, Matheus e Victor. A reunião deve confirmar a situação de Rafael e de Tiago, para que a participação de todos seja avaliada.
- **Atas:** o site tem três atas, de 03/11, 04/11 e 16/11/2026. As atas dos encontros anteriores, se existirem, não estão no site.
- **Vídeos:** não foi conferido se os vídeos estão como “não listados” no YouTube.
- **Entrega 8:** a inspeção do próprio grupo é feita por cada integrante sobre os artefatos de outro (Felipe sobre Victor, Matheus sobre Felipe e Victor sobre Matheus), com três PDFs e quatro vídeos.

## 4. Encaminhamentos

Esta inspeção registra os defeitos; a correção cabe ao Grupo 02 (passo 5 de Fagan) e a conferência é o passo 6. As prioridades sugeridas são: retirar o marcador “[cite: 3]” (G8); indicar nome completo de autor e revisor em todas as versões e preencher o revisor pendente (G2); incluir histórico de versões e referências nas atas individuais (G1 e G3); declarar o uso de IA onde houve (G7); e incluir a tabela de contribuição nas páginas dos artefatos (G6). A reunião de inspeção do Grupo 02, com gravação, ainda será registrada nesta página.

## Referências

SALES, André Barros de. *Plano de Ensino: Interação Humano Computador (FGA0173), 02/2026, Turma 01, v1*. Brasília: Universidade de Brasília, 2026.

SERRANO, Milene; SERRANO, Maurício. *Requisitos*: aula 23: análise, verificação e validação. Brasília: Universidade de Brasília, [20--]. 52 slides.

## Agradecimentos e uso de IA generativa

**Uso de IA generativa nesta página.** Em 23/11/2026, a pedido de Henrique Schneider, o Claude (Anthropic) foi utilizado para baixar as páginas do site do Grupo 02, aplicar a verificação automática dos itens G1 a G8, ler o menu de entregas e redigir esta página. A ferramenta não é autora do artefato e seu uso não exime os autores da responsabilidade sobre o conteúdo (SALES, 2026, p. 3).
