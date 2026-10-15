# LEIA-ME — Estrutura de Arquivos da Pasta IHC

Guia da pasta da disciplina **Interação Humano-Computador (FGA0173, 2026.2)**, projeto do **Grupo 03** sobre o **Portal do Detran-DF**. Explica como a pasta está organizada, onde achar cada coisa e o que mudou na reorganização de 15/10/2026.

## 1. Estrutura

```
IHC/
├── LEIA-ME - Estrutura de Arquivos.md      ← este guia
├── Tarefas por Integrante.md               ← quem faz o quê em cada entrega
├── Materiais de consulta/                  ← material GERAL (todo o semestre)
│   └── Índice - Materiais de Consulta.md   ← catálogo + "onde está cada tema" + links
├── Entrega 1/ … Entrega 8/                 ← uma pasta por entrega do projeto
│   ├── Entrega N - Índice.md               ← escopo, prazos, arquivos, tarefas, pendências
│   ├── Apresentações/                      ← vídeos e gravações (apresentações, inspeções) e transcrições
│   ├── Entregas individuais/               ← atividades avaliativas individuais (Moodle)
│   ├── Materiais de Consulta/
│   │   ├── Textos/                         ← capítulos, slides, listas de exercícios, guias do tema
│   │   └── Vídeos/                         ← videoaulas do tema
│   ├── Planejamento/                       ← listas de verificação, cronogramas e roteiros de preparação
│   └── Relatórios/                         ← relatórios do grupo e relatórios de inspeção (PDF)
```

| Entrega | Tema | Prazo (Moodle) |
|---|---|---|
| [Entrega 1](<Entrega 1/Entrega 1 - Índice.md>) | Planejamento do Projeto | 06/09 |
| [Entrega 2](<Entrega 2/Entrega 2 - Índice.md>) | Perfil do Usuário, Aspectos Éticos e Análise de Tarefas | 27/09 |
| [Entrega 3](<Entrega 3/Entrega 3 - Índice.md>) | Princípios Gerais, Metas de Usabilidade e Guia de Estilo | 06/10 |
| [Entrega 4](<Entrega 4/Entrega 4 - Índice.md>) | Planejamento da Avaliação do Storyboard e da Análise de Tarefas | 13/10 (apresentação 15/10) |
| [Entrega 5](<Entrega 5/Entrega 5 - Índice.md>) | Relato do Storyboard e Planejamento do Protótipo de Papel | 25/10 |
| [Entrega 6](<Entrega 6/Entrega 6 - Índice.md>) | Relato do Protótipo de Papel e Planejamento da Alta Fidelidade | 03/11 |
| [Entrega 7](<Entrega 7/Entrega 7 - Índice.md>) | Relato do Protótipo de Alta Fidelidade | 15/11 |
| [Entrega 8](<Entrega 8/Entrega 8 - Índice.md>) | Verificação dos Artefatos e Projeto Final | 22/11 (final: 30/11) |

Prazos conforme SALES (2026), Plano de Ensino, pp. 4–6.

## 2. Onde encontro…

| Procuro… | Vá para |
|---|---|
| O plano de ensino, os prazos e as listas de verificação do professor | `Materiais de consulta/Disciplina - Plano de Ensino …pdf` (listas nas pp. 8–13) |
| O livro de Barbosa e Silva completo | `Materiais de consulta/Livro - Barbosa e Silva (2010) …pdf` |
| Um capítulo ou slide de um tema (DECIDE, storyboard, personas…) | Tabela “Onde está cada tema” em [Índice - Materiais de Consulta.md](<Materiais de consulta/Índice - Materiais de Consulta.md>) |
| Os relatórios entregues pelo grupo | `Entrega N/Relatórios/Relatório Entrega N - …pdf` |
| As inspeções que fizemos em outros grupos | `Entrega N/Relatórios/Relatório de Inspeção Entrega N - …pdf` e a gravação/transcrição em `Entrega N/Apresentações/` |
| A lista de verificação usada numa inspeção | `Entrega N/Planejamento/` |
| As tarefas de cada integrante | [Tarefas por Integrante.md](<Tarefas por Integrante.md>), ou a seção 5 do índice de cada entrega |
| O que falta numa entrega | Seção “Pendências e observações” do índice da entrega |
| Modelos (ata, cronograma, heatmap, checklist) | `Materiais de consulta/Modelo - …` (o heatmap está em `Entrega 1/…/Textos/`) |
| Links (GitHub Pages, vídeos de apoio, projetos anteriores) | Seção 3 de [Índice - Materiais de Consulta.md](<Materiais de consulta/Índice - Materiais de Consulta.md>) |

## 3. Padrão de nomes

Os arquivos foram renomeados para ficarem legíveis e ordenados por tipo. Os nomes originais estão nos índices de cada pasta e na seção 6.

| Prefixo | Uso | Exemplo |
|---|---|---|
| `Relatório Entrega N - <tema> - Grupo 03` | Relatório entregue pelo grupo | `Relatório Entrega 2 - Perfil do Usuário, … - Grupo 03.pdf` |
| `Relatório de Inspeção Entrega N - Grupo ±1 (Grupo XX)` | Inspeção feita pelo Grupo 03 | `Relatório de Inspeção Entrega 3 - Grupo +1 (Grupo 07).pdf` |
| `Gravação -` / `Transcrição -` + `(AAAA-MM-DD)` | Vídeo do Teams e a transcrição dele | `Gravação - Inspeção Entrega 4 - Grupo 01 (2026-10-14).mp4` |
| `Autor (ano) - Cap NN <título>` | Capítulo ou excerto de livro | `Barbosa e Silva (2010) - Cap 09 Teste Piloto (p. 307).pdf` |
| `Barbosa et al. (2021) IHC-UX - …` | Edição 2021 do livro de Barbosa e Silva (*IHC e Experiência do Usuário*) | `… - Cap 11 Planejamento da Avaliação de IHC.pdf` |
| `Slides - <autor> - Cap NN …` | Slides de aula | `Slides - Barbosa e Silva - Cap 06 …pdf` |
| `Lista de Exercícios - <tema>` | Enunciado de lista (em branco) | `Lista de Exercícios - Protótipo de Papel.pdf` |
| `<Nome do integrante> - <atividade>` | Atividade individual respondida | `Henrique Schneider - Lista de Exercícios Respondida - …pdf` |
| `Livro -`, `Guia -`, `Modelo -`, `Artigo -`, `Vídeo -`, `Disciplina -` | Demais tipos | `Modelo - Ata de Reunião (MCTIC) - …pdf` |

Regra para arquivos novos: coloque o arquivo na entrega em que o tema é **cobrado** (seguindo o cronograma do Plano de Ensino) e use o prefixo do tipo. Material usado no semestre inteiro vai para `Materiais de consulta/`. Na hora de enviar ao Moodle, use o nome exigido pelo professor, que aparece no índice de cada entrega.

## 4. Mudanças na estrutura de pastas

- `Entrega8` foi renomeada para **`Entrega 8`**, com espaço, como as demais.
- As Entregas 1, 2 e 3 ganharam as subpastas `Materiais de Consulta/Textos` e `Materiais de Consulta/Vídeos`, que já existiam nas Entregas 4 a 8.
- Gravações e transcrições de reuniões/inspeções foram para `Apresentações/`. A transcrição da Entrega 4, antes em `Planejamento/`, também foi movida para lá, ficando ao lado da gravação. A lista de verificação da inspeção continuou em `Planejamento/`.
- Os arquivos soltos na raiz de cada entrega (vídeos, docx e o PDF da Atividade Avaliativa 2) foram para a subpasta correspondente.

## 5. Arquivos excluídos (duplicados)

| Arquivo excluído | Motivo | Versão mantida |
|---|---|---|
| `Materiais de consulta/INTERACAO_HUMANO_COMPUTADOR_260820_131123-compressed.pdf` | Mesmo conteúdo do outro PDF do livro (texto idêntico, 388 p.) | `Materiais de consulta/Livro - Barbosa e Silva (2010) - Interação Humano-Computador (completo).pdf` |
| `Materiais de consulta/Atividade Avaliativa Verificação 2-compressed.pdf` | Versão comprimida do mesmo enunciado (texto idêntico) | `Entrega 2/Materiais de Consulta/Textos/Atividade Avaliativa - Verificação 2 - … (enunciado).pdf` (original sem compressão) |
| `Materiais de consulta/Design de interação cap 8-compressed.pdf` | As 45 páginas são idênticas às pp. 8–52 de outro PDF, que tem o mesmo Cap. 8 mais capa, sumário e índice | `Entrega 4/Materiais de Consulta/Textos/Preece, Rogers e Sharp (2005) - Design de Interação - Cap 08 …pdf` |

Foram **mantidos** de propósito:
- Os excertos de Barbosa e Silva (Cap. 2, Cap. 10, DECIDE, Teste Piloto), mesmo que o livro completo esteja na raiz, porque servem como atalho por tema.
- As duas versões do Cap. 1 de Preece (1ª ed. digitalizada e 3ª ed. em texto), que são edições diferentes.
- Os capítulos da edição 2010 e da IHC-UX 2021, que têm texto e paginação diferentes.

## 6. Mapa de renomeação (nome antigo → local novo)

`MC/` = `Materiais de consulta/`

| Nome antigo | Local e nome novos |
|---|---|
| MC/Plano_de_Ensino FIHC 022026 Turma 01 v1-compressed.pdf | Materiais de consulta/Disciplina - Plano de Ensino FIHC 2026.2 - Turma 01 v1.pdf |
| MC/INTERACAO_HUMANO_COMPUTADOR-compressed.pdf | Materiais de consulta/Livro - Barbosa e Silva (2010) - Interação Humano-Computador (completo).pdf |
| MC/swebok-v4-compressed.pdf | Materiais de consulta/Livro - SWEBOK v4 - Guide to the Software Engineering Body of Knowledge.pdf |
| MC/About_Face_3__The_Essentials_of_Interaction_Design-compressed.pdf | Materiais de consulta/Livro - Cooper, Reimann e Cronin (2007) - About Face 3 (excerto).pdf |
| MC/Livro_Design_Thinking_-_Inovao_Negcios-compressed.pdf | Materiais de consulta/Livro - Vianna et al. - Design Thinking - Inovação em Negócios.pdf |
| MC/ABNT-GUIA-COMPLETO-Elaborar-formatar-trabalho-cientifico-compressed.pdf | Materiais de consulta/Guia - ABNT - Elaborar e Formatar Trabalho Científico.pdf |
| MC/SiglaProjeto_AtaReuniao_AAAAMMDD_XX-compressed.pdf | Materiais de consulta/Modelo - Ata de Reunião (MCTIC) - SiglaProjeto_AtaReuniao_AAAAMMDD_XX.pdf |
| MC/Exemplo de Cronograma-compressed.pdf | Materiais de consulta/Modelo - Exemplo de Cronograma das Entregas.pdf |
| MC/lista-de-verificacao-da-qualidade-de-artefatos.xls [Modo de Compatibilidade]-2-compressed.pdf | Materiais de consulta/Modelo - Lista de Verificação da Qualidade de Artefatos.pdf |
| MC/Requisitos - Aula 023-compressed.pdf | Materiais de consulta/Slides - Serrano - Requisitos Aula 23 - Análise, Verificação e Validação.pdf |
| MC/00 Cap_01-2-compressed.pdf | Entrega 1/Materiais de Consulta/Textos/Preece, Rogers e Sharp - Design de Interação - Cap 01 O que é Design de Interação (3ª ed.).pdf |
| MC/Cap_01_Design_de_inter-compressed.pdf | Entrega 1/Materiais de Consulta/Textos/Preece, Rogers e Sharp (2005) - Design de Interação - Cap 01 O que é Design de Interação (1ª ed., digitalizado).pdf |
| MC/Apresentação 03 Aula Cap 1 DI-compressed.pdf | Entrega 1/Materiais de Consulta/Textos/Slides - Aula 03 - Cap 01 Design de Interação.pdf |
| MC/Lista de exercícios-compressed.pdf | Entrega 1/Materiais de Consulta/Textos/Lista de Exercícios - O que é Design de Interação.pdf |
| MC/Apresentação cap02 Livro Simone-compressed.pdf | Entrega 1/Materiais de Consulta/Textos/Slides - Barbosa e Silva - Cap 02 Conceitos Básicos.pdf |
| MC/Cap 2 Simone_Barbosa_Bruno-Interacao_humano_computador-compressed.pdf | Entrega 1/Materiais de Consulta/Textos/Barbosa e Silva (2010) - Cap 02 Conceitos Básicos.pdf |
| MC/Lista de exercícios.123pdf-compressed.pdf | Entrega 1/Materiais de Consulta/Textos/Lista de Exercícios - Cap 04 Processos de Design de IHC.pdf |
| MC/Artigo Av Heurística ac1_55-compressed.pdf | Entrega 1/Materiais de Consulta/Textos/Artigo - Maciel et al. - Avaliação Heurística de Sítios na Web.pdf |
| MC/Heatmap do Projeto 2 - Grade Geral-compressed.pdf | Entrega 1/Materiais de Consulta/Textos/Modelo - Heatmap de Disponibilidade (Grade Geral).pdf |
| MC/ProjetoPlanejamentoDetran-DF-compressed.pdf | Entrega 1/Relatórios/Relatório Entrega 1 - Planejamento do Projeto - Detran-DF - Grupo 03.pdf |
| MC/ProjetoParteIndividualPlanejAvalição-compressed.pdf | Entrega 1/Entregas individuais/Henrique Schneider - Lista de Exercícios Respondida - Planejamento da Avaliação de IHC.pdf |
| MC/Apresentacao Cap05-compressed.pdf | Entrega 2/Materiais de Consulta/Textos/Slides - Barbosa e Silva - Cap 05 Necessidades dos Usuários e Requisitos de IHC.pdf |
| MC/Lista de exercícios1234-compressed.pdf | Entrega 2/Materiais de Consulta/Textos/Lista de Exercícios - Cap 05 Necessidades dos Usuários e Requisitos de IHC.pdf |
| MC/Apresentacao cap06-compressed.pdf | Entrega 2/Materiais de Consulta/Textos/Slides - Barbosa e Silva - Cap 06 Organização do Espaço de Problema.pdf |
| MC/Lista de exercícios Organização do Espaço de Problema-compressed.pdf | Entrega 2/Materiais de Consulta/Textos/Lista de Exercícios - Cap 06 Organização do Espaço de Problema.pdf |
| MC/Seção 7.4 - Aspectos Eticos - IHC-compressed.pdf | Entrega 2/Materiais de Consulta/Textos/Barbosa et al. (2021) IHC-UX - Seção 7.4 Aspectos Éticos.pdf |
| MC/Elicitacao de Req-compressed.pdf | Entrega 2/Materiais de Consulta/Textos/Leitura por Grupos - Elicitação de Requisitos (Parte 1).pdf |
| MC/Elicitacao de Req 2-compressed.pdf | Entrega 2/Materiais de Consulta/Textos/Leitura por Grupos - Elicitação de Requisitos (Parte 2).pdf |
| Entrega 2/Atividade Avaliativa Verificação 2.pdf | Entrega 2/Materiais de Consulta/Textos/Atividade Avaliativa - Verificação 2 - Elaborar Listas de Verificação (enunciado).pdf |
| MC/PerfilPersonasHenriqueSchneiderPlanejamentoDetranDF-1-compressed.pdf | Entrega 2/Relatórios/Relatório Entrega 2 - Perfil do Usuário, Aspectos Éticos e Análise de Tarefas - Grupo 03.pdf |
| MC/ProjetoPerfilPersonasGrupo02TarefasPlanejamentoNoFluxoUnb-2-compressed.pdf | Entrega 2/Relatórios/Relatório de Inspeção Entrega 2 - Grupo -1 (Grupo 02).pdf |
| MC/Apresentação cap08 Livro Simone-compressed.pdf | Entrega 3/Materiais de Consulta/Textos/Slides - Barbosa e Silva - Cap 08 Princípios e Diretrizes para o Design de IHC.pdf |
| MC/ihc-ux Cap. 10-compressed.pdf | Entrega 3/Materiais de Consulta/Textos/Barbosa et al. (2021) IHC-UX - Cap 10 Princípios e Diretrizes para o Design de IHC.pdf |
| MC/Lista de exercícioe2123s-compressed.pdf | Entrega 3/Materiais de Consulta/Textos/Lista de Exercícios - Cap 08 Princípios e Diretrizes para o Design de IHC.pdf |
| MC/Diretrizes_Interface_Humana_v1.0 Final-compressed.pdf | Entrega 3/Materiais de Consulta/Textos/Guia - Diretrizes de Interface Humana v1.0 (2016).pdf |
| MC/Gui_Estilos_BI Final-compressed.pdf | Entrega 3/Materiais de Consulta/Textos/Guia - Dataprev - Guia de Estilos BI v1.1 (2016).pdf |
| MC/InspecçãoGrupomais1Projeto PrincGeraisMetasUsabGuiaEstiloSite-2-compressed.pdf | Entrega 3/Relatórios/Relatório de Inspeção Entrega 3 - Grupo +1 (Grupo 07).pdf |
| Entrega 3/Inspeção Grupo 07-20261010_204818-Gravação de Reunião.mp4 | Entrega 3/Apresentações/Gravação - Inspeção Entrega 3 - Grupo 07 (2026-10-10).mp4 |
| Entrega 3/Inspeção Grupo 07 .docx | Entrega 3/Apresentações/Transcrição - Inspeção Entrega 3 - Grupo 07 (2026-10-10).docx |
| MC/Apresentação cap09 Livro Simone-compressed.pdf | Entrega 4/Materiais de Consulta/Textos/Slides - Barbosa e Silva - Cap 09 Planejamento da Avaliação de IHC.pdf |
| MC/Cap. Planejamento ihc-ux-compressed.pdf | Entrega 4/Materiais de Consulta/Textos/Barbosa et al. (2021) IHC-UX - Cap 11 Planejamento da Avaliação de IHC.pdf |
| MC/Lista de exercícios - Planej Avaliação-compressed.pdf | Entrega 4/Materiais de Consulta/Textos/Lista de Exercícios - Planejamento da Avaliação de IHC.pdf |
| MC/DECIDE Simone_Barbosa_Bruno-Interacao_humano_computador-compressed.pdf | Entrega 4/Materiais de Consulta/Textos/Barbosa e Silva (2010) - Cap 09 Framework DECIDE (pp. 312-313).pdf |
| MC/DECIDE Design de Interação - Jennifer Preece-compressed.pdf | Entrega 4/Materiais de Consulta/Textos/Preece, Rogers e Sharp (2005) - Design de Interação - Framework DECIDE (pp. 368 ss.).pdf |
| MC/Teste Piloto Simone_Barbosa_Bruno-Interacao_humano_computador-compressed.pdf | Entrega 4/Materiais de Consulta/Textos/Barbosa e Silva (2010) - Cap 09 Teste Piloto (p. 307).pdf |
| MC/Lista de exercícios StoryBoard-compressed.pdf | Entrega 4/Materiais de Consulta/Textos/Lista de Exercícios - Storyboard (Cap 08 DI Design, Prototipação e Construção).pdf |
| MC/579489-guide-to-storyboards-compressed.pdf | Entrega 4/Materiais de Consulta/Textos/Guia - OCR - The OCR Guide to Storyboards v2.pdf |
| MC/Design de interação - StoryBoard-compressed.pdf | Entrega 4/Materiais de Consulta/Textos/Preece, Rogers e Sharp (2005) - Design de Interação - Cap 08 Design, Prototipação e Construção.pdf |
| Entrega 4/Materiais de Consulta/storyboards.mp4 | Entrega 4/Materiais de Consulta/Vídeos/Vídeo - Klemmer - Storyboards.mp4 |
| Entrega 4/Materiais de Consulta/prototipaçao.mp4 | Entrega 4/Materiais de Consulta/Vídeos/Vídeo - Prototipação.mp4 |
| MC/PlajRelatoStoryBoardDetran-DF-compressed.pdf | Entrega 4/Relatórios/Relatório Entrega 4 - Planejamento da Avaliação do Storyboard e Análise de Tarefas - Grupo 03.pdf |
| MC/PlajRelatoStoryBoardMicrosoftTeamsInspecaoGrupo01-1-compressed.pdf | Entrega 4/Relatórios/Relatório de Inspeção Entrega 4 - Grupo -1 (Grupo 01).pdf |
| Entrega 4/Planejamento/Lista de Verificação — Inspeção do Grupo -1 (Entrega 4).docx | Entrega 4/Planejamento/Lista de Verificação - Inspeção Entrega 4 - Grupo -1 (Grupo 01).docx |
| Entrega 4/Inspeção Grupo -1 (Grupo 1)-20261014_223851-Gravação de Reunião.mp4 | Entrega 4/Apresentações/Gravação - Inspeção Entrega 4 - Grupo 01 (2026-10-14).mp4 |
| Entrega 4/Planejamento/Transcrição Entrega 4 Inspeção.docx | Entrega 4/Apresentações/Transcrição - Inspeção Entrega 4 - Grupo 01 (2026-10-14).docx |
| MC/01 Lista de exercícios Prototipo de Papel-compressed.pdf | Entrega 5/Materiais de Consulta/Textos/Lista de Exercícios - Protótipo de Papel.pdf |
| MC/Apresentação cap10 Livro Simone-compressed.pdf | Entrega 5/Materiais de Consulta/Textos/Slides - Barbosa e Silva - Cap 10 Métodos de Avaliação de IHC.pdf |
| MC/Cap. 10 Simone_Barbosa_Bruno-Interacao_humano_computador-compressed.pdf | Entrega 5/Materiais de Consulta/Textos/Barbosa e Silva (2010) - Cap 10 Métodos de Avaliação de IHC.pdf |
| MC/Cap Metodos de avaliacao de IHC-compressed.pdf | Entrega 5/Materiais de Consulta/Textos/Barbosa et al. (2021) IHC-UX - Cap 12 Métodos de Avaliação de IHC.pdf |
| MC/Lista de exercícios-copia-compressed.pdf | Entrega 5/Materiais de Consulta/Textos/Lista de Exercícios - Cap 10 Métodos de Avaliação de IHC.pdf |

## 7. Pendências gerais

- **Não estão na pasta:** o relatório da própria Entrega 3 do Grupo 03, os vídeos das apresentações das Entregas 1–4, as atas de reunião e as atividades individuais dos demais integrantes. As listas completas estão nos índices de cada entrega.
- **Vieram do Projeto do Claude (v1.1):**
  - `cap04.pdf` → `Entrega 1/Materiais de Consulta/Textos/Slides - Barbosa e Silva - Cap 04 Processos de Design de IHC.pdf`
  - `diagrama_mayhew.png` → `Entrega 1/Materiais de Consulta/Textos/Barbosa e Silva (2010) - Fig 4.7 Ciclo de Vida da Engenharia de Usabilidade (Mayhew, p. 110).png`
  - `diretriz-de-usabilidade-de-sistemas.pdf` → `Entrega 3/Materiais de Consulta/Textos/Guia - MAPA - Diretriz de Usabilidade de Sistemas v2.3.pdf` (a versão `.doc` tem o mesmo conteúdo e não foi copiada)
  - `lista-de-verificacao-da-qualidade-de-artefatos.xls` → `Materiais de consulta/Modelo - Lista de Verificação da Qualidade de Artefatos.xls`
  - O conteúdo de `Links.md` e `Entregas ffuturas.md` foi incorporado aos índices.
- **Equipe:** Camile aparece só na Entrega 1, e Gabriel Robson entra a partir da Entrega 2. As tarefas futuras de Camile precisam ser redistribuídas. Ver [Tarefas por Integrante.md](<Tarefas por Integrante.md>).

## Referências

- SALES, André Barros de. *Plano de Ensino — Interação Humano Computador (FGA0173), 02/2026, Turma 01, v1*. Faculdade UnB Gama, 2026.
- GRUPO 03. Relatórios das Entregas 1, 2 e 4 e relatórios de inspeção das Entregas 2, 3 e 4. IHC 2026.2, UnB, 2026.
- *Entregas futuras.md* e *Links.md*. Projeto “Interação Humano Computador” no Claude, 2026.

## Histórico de versões

| Versão | Data | Autor | Revisor | Descrição |
|---|---|---|---|---|
| 1.0 | 15/10/2026 | Claude (IA generativa, Anthropic), a pedido de Henrique Schneider | A definir | Reorganização da pasta: 60 arquivos movidos/renomeados, 3 duplicados excluídos, criação dos índices e deste guia |
| 1.1 | 15/10/2026 | Claude (IA generativa, Anthropic), a pedido de Henrique Schneider | A definir | Inclusão de 4 arquivos vindos do Projeto do Claude (slides do Cap. 4, diagrama de Mayhew, Diretriz de Usabilidade do MAPA e planilha .xls) |
