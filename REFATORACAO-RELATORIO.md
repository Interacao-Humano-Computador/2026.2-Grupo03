# Relatório da Refatoração do GitHub Pages – Grupo 03 (IHC 2026.2)

> **Nota de 17/10/2026.** Depois desta refatoração, o site foi reorganizado por entrega (`docs/entrega-N/`), com uma pasta por integrante em cada entrega e a aba Trabalhos Avaliativos. Os caminhos citados abaixo são os de 15/10/2026; os endereços antigos redirecionam para os novos. Os marcadores [VERIFICAR] foram retirados do site e o que falta completar está na pasta [`pendencias/`](pendencias/README.md).

Relatório pedido pela seção 9 do `Refatoração/CLAUDE.md`. Fica na raiz do repositório, fora de `docs/` e da navegação do site.

- **Data:** 15/10/2026
- **Branch:** `claude/refactor-file-modules-pcbenz`, criada a partir de `Refactor/Develop` (commit `e21f90c`)
- **Solicitante:** Henrique Schneider
- **Executado com:** Claude (IA generativa, Anthropic). Ver a seção 8 sobre autoria.

## 1. Resumo

| Medida | Valor |
| --- | ---: |
| Páginas auditadas (todas as páginas de `docs/` em `Refactor/Develop`) | 39 |
| Páginas existentes alteradas | 38 |
| Páginas novas | 18 |
| Páginas removidas (com redirecionamento) | 1 (`verificacao/grupo-06/`, vazia → `verificacao/grupo-07/`) |
| Páginas no site depois da refatoração | 56 |
| Marcadores **[VERIFICAR]** no site | 727 |
| … dos quais: revisor | 125 |
| … contribuição | 113 |
| … autor do item de conteúdo | 19 |
| … foto do texto da referência | 11 |
| … introdução | 15 |
| … vídeo ou link | 32 |
| `mkdocs build --strict` | Sem avisos |
| Links internos e imagens quebrados (verificação no HTML gerado) | 0 (eram 7 imagens quebradas antes) |

Os demais marcadores tratam de conteúdo faltante (storyboards, características da plataforma, dados de pesquisa, datas reais, horários de reunião etc.).

Os números acima são da primeira rodada. Depois da segunda rodada (seção 10), o site tem **72 páginas** (16 novas) e **904 marcadores [VERIFICAR]**; o aumento vem das páginas novas, que repetem por integrante e por entrega as pendências já existentes.

## 2. Decisões e desvios em relação ao CLAUDE.md

| Regra do CLAUDE.md | O que foi feito | Motivo |
| --- | --- | --- |
| §1.7 Trabalhar na branch `refatoracao/padrao-disciplina` | Trabalho feito na branch `claude/refactor-file-modules-pcbenz` | A sessão do Claude Code só tem permissão de envio para essa branch. Basta abrir o PR dela para `Refactor/Develop` (ou renomeá-la). |
| §1.8 e §2.2 Pedir confirmação antes de mexer no `mkdocs.yml`, na navegação e em mais de 10 arquivos; mostrar o relatório antes de editar | Executado sem parada intermediária | O pedido do Henrique autorizou expressamente alterar a estrutura, criar, renomear e apagar arquivos ("Não se contenha") e pediu este documento ao final. |
| §1.3 Não reescrever o texto dos integrantes | Mantido nas páginas de artefato. Os relatórios das Entregas 1 a 4 (`docs/relatorios/`) foram "reescritos" como páginas novas que reúnem e transcrevem o conteúdo dos PDFs e das páginas, sem mudar argumentos | O Henrique pediu depois para "reescrever os relatórios para cada entrega até o momento, isso inclui planejamentos também". |
| §1.6 Não quebrar URLs | Nenhuma página existente mudou de endereço. A única removida (`verificacao/grupo-06/`, vazia) redireciona para `verificacao/grupo-07/` com `mkdocs-redirects` | — |
| §4 Linha de histórico com "Claude (IA generativa), sob supervisão de …" na coluna de autor | Usado "Henrique Schneider (solicitante), com apoio do Claude (IA generativa)" | O Plano de Ensino (p. 3), citando a SBC, diz que as ferramentas de IA "não podem ser listadas como autores". Pela regra do próprio CLAUDE.md ("vale o texto da fonte"), a ferramenta foi mantida fora da autoria. **O Henrique precisa confirmar essas linhas ou trocá-las pelo integrante que revisar cada mudança.** |
| §5.4 "Você não tira fotos" | Nenhuma foto nova foi gerada. Foram usadas apenas imagens que já existiam: as fotos das pp. 135 e 175 (Perfis e Personas), as fotos dos princípios e a Figura 4.7 de Mayhew, que estava em `Refatoração/Entrega 1/…` | As fotos faltantes estão listadas na seção 4. |
| §0 Camile | Nenhuma menção existente foi alterada. Novas menções só em comentários `TODO(VERIFICAR)`, além de uma frase neutra no Cronograma Executado | Decisão do grupo (seção 4.1). |

## 3. O que mudou

### 3.1 Estrutura e configuração

- `mkdocs.yml`: navegação reorganizada em abas por entrega (Início, Disciplina, Entregas 1 a 4, Entregas 5 a 8 e Final, Verificação). O título longo da Entrega 4 virou "Entrega 4: Planejamento da Avaliação". Páginas que estavam fora do menu (`apresentacoes.md`, `storyboard/relatos/*`, `verificacao/grupo-02/*`) entraram na navegação. Também foram ativados `pymdownx.tabbed` (abas de conteúdo) e `mkdocs-redirects`.
- `requirements.txt`: inclusão do `mkdocs-redirects` e fixação de `mkdocs<2` (o MkDocs 2.0 anunciado quebra o Material e todos os plugins).
- `README.md`: estrutura de pastas atualizada.
- Os PDFs entregues pelo grupo foram copiados para `docs/assets/pdfs/entregas/` (relatórios das Entregas 1, 2 e 4 e inspeções das Entregas 1 a 4). O relatório e a inspeção da Entrega 1 foram recuperados do histórico do Git (commit `f0d0999`).
- A Figura 4.7 (Mayhew) foi copiada para `docs/assets/referencias/barbosa-silva-2010-p110.png`.

### 3.2 Padrão aplicado a todas as páginas de artefato

Tabela de contribuição no início, com os cinco integrantes, link de atividade (commits, relatórios) e de gravação, ou **[VERIFICAR]**. Histórico com colunas fixas, em ordem cronológica, revisores genéricos ("Integrantes do grupo", "-", "A definir", "A preencher", "Revisão humana pendente") trocados por **[VERIFICAR: revisor]** com o texto original entre parênteses e uma linha nova para a refatoração. Seções numeradas e introdução. Legendas acima ("**Tabela N – …**", "**Figura N – …**", "**Quadro N – …**") e fonte abaixo, com chamada no texto. Citações no formato `(Barbosa; Silva, 2010, cap., seç., p.)`. Referências em ordem alfabética, com título em itálico. Seção final "Agradecimentos e uso de IA generativa", que mantém as declarações anteriores (Gemini, ChatGPT, Claude).

### 3.3 Correções verificadas na fonte

As páginas citadas foram conferidas no PDF de Barbosa e Silva (2010), em `Refatoração/Materiais de consulta/`. Atenção: o deslocamento entre página do PDF e página do livro varia entre −5 e −6.

| Página do site | Correção |
| --- | --- |
| Perfis e Personas | Citação "Cap. 5, p. 136 / Cap. 6, p. 175" corrigida para p. 175 (Figura 1); citação de "tarefas" corrigida para p. 135; atributos demográficos, educação e experiência para p. 134; rótulo "Print p. 136" corrigido (a imagem é da p. 135); marcador `caminho_imagem_p136_p175.png` trocado pelas Figuras 1 e 2; as fotos passaram a aparecer na página (antes eram só links). |
| Princípios Gerais | Figuras 1 e 2: p. 264 → p. 265 (seç. 8.2 e 8.2.1). As demais páginas (267, 270, 271, 272, 273, 275, 277) foram confirmadas. Quadros com fotos convertidos em Figuras com texto alternativo; a subseção de eficiência, numerada "8" duas vezes, virou 2.9. |
| Metas de Usabilidade | Citações sem página → cap. 2, p. 29 (fatores de usabilidade) e cap. 4, p. 105–106 (indicadores e faixas). |
| TCLE | Citações → seç. 5.4, pp. 138–141 e p. 139 (conferidas). |
| Análise de Tarefas | Remoção de 8 marcadores residuais " 3" após frases (resto de citação de chatbot) e do rótulo "(Exemplo)" no Fluxo 1 (ausente no relatório entregue). |
| Inspeção do Grupo 01 | As 7 figuras não apareciam no site publicado: o HTML usava caminhos relativos ao arquivo, e não à URL da página. Corrigido para `../imagens/…`; legendas movidas para cima, com a fonte abaixo. |
| Página inicial | Data da versão 1.6 "10/06/2026" → 06/10/2026 (commit `5b5041f`). |
| Contribuições E3 e E4 | Tema da entrega copiado da Entrega 2 ("Perfil do Usuário…") e legendas "Entrega 2/3" corrigidos. |
| Storyboard (páginas individuais) | Legenda "Documento de Análise de Tarefas" corrigida. |

### 3.4 Páginas novas

| Página | Conteúdo |
| --- | --- |
| `acompanhamento/index.md` | Pendências das Entregas 1 a 4 e próximas entregas por integrante, em abas (pedido do Henrique) |
| `relatorios/index.md`, `entrega-1.md` a `entrega-4.md` | Relatórios das entregas reescritos, com a matriz de conformidade do Plano de Ensino |
| `planejamento/cronograma/cronograma_executado.md` | Cronograma executado (D6) montado com evidências (históricos, commits, relatórios) |
| `storyboard/planejamento/decide.md` | Planejamento DECIDE do relatório da Entrega 4 (pp. 3–6), que não estava no site |
| `storyboard/planejamento/eduardo-ribeiro.md` | Esqueleto da página que faltava (item 10 da Entrega 4) |
| `guia-estilo/plataforma/caracteristicas.md` | Esqueleto do artefato que faltava (item 10 da Entrega 3) |
| `verificacao/grupo-07/` | Inspeção da Entrega 3 transcrita do PDF (22 itens, horários e autores) |
| `prototipo-papel/`, `prototipo-alta-fidelidade/`, `verificacao-artefatos/`, `projeto-final/` | Esqueletos das Entregas 5 a 8 e do Projeto Final (14 tópicos do Plano) |

Páginas antes vazias e agora preenchidas: `apresentacoes.md` (vídeos por entrega), `verificacao/grupo-02/*` (inspeção da Entrega 2 transcrita do PDF) e `verificacao/grupo-05/entrega-1` (inspeção da Entrega 1 transcrita do PDF recuperado). As atas foram reestruturadas no modelo do MCTIC, mantendo os títulos e as âncoras.

## 4. Pendências humanas (com responsável sugerido)

Os nomes desta seção são **sugestões** (CLAUDE.md, seção 7), baseadas no cronograma do grupo, nos históricos e na regra de um storyboard e um item por integrante. Eles não foram escritos nas páginas do site; lá, a página [Acompanhamento](docs/acompanhamento/index.md) usa apenas responsáveis já definidos pelo grupo (cronograma e atas).

### 4.1 Decisões do grupo

| # | Decisão | Onde | Sugestão |
| --- | --- | --- | --- |
| 1 | Texto oficial sobre DECIDE × Mayhew | Relatório E1, seção 5.2 | Grupo, em reunião; aplicar no Processo de Design (Eduardo) |
| 2 | Como registrar as contribuições de Camile na Entrega 1 (relatório E1 §6; inspeção E1 §6; commit `b35dc60`) | Páginas da E1 | Grupo |
| 3 | Manter ou mover os cenários para a página Cenários | Cenários | Alexandre |
| 4 | Linhas de histórico "Henrique Schneider (solicitante), com apoio do Claude" | Todas as páginas | Henrique confirma; cada autor indica o revisor |
| 5 | Mover `Refatoração/CLAUDE.md` para a raiz, para que as próximas sessões o carreguem, e trocar `IHC/` por `Refatoração/` nas referências | Repositório | Henrique |
| 6 | Material protegido e gravações no repositório público (ver seção 6) | `Refatoração/` | Henrique, com o grupo |

### 4.2 Por entrega

| Entrega | Pendência | Página | Responsável sugerido |
| --- | --- | --- | --- |
| Todas | Revisor nominal em cada versão (125 marcadores) | Históricos | Autor de cada página indica um revisor que não seja ele mesmo |
| Todas | Contribuição de cada integrante (113 marcadores) | Tabelas de contribuição | O próprio integrante |
| Todas | Datas reais no cronograma executado | Cronograma Executado | Cada integrante nas suas linhas; consolidação: João Vitor (conferência de artefatos, E8) |
| Todas | Períodos de gravação e de ajustes pós-feedback | Cronograma Planejado, Quadro 18 | Henrique (autor das v1.1 a v1.3 do cronograma) |
| Todas | Vídeos de apresentação "não listados" no YouTube | Apresentações | Quem gravou cada apresentação; E1: Eduardo (dono do arquivo original) |
| Todas | Autor e foto de cada item de conteúdo | Páginas de conteúdo | Autor de cada página |
| 1 | Contribuições de Alexandre e João Vitor (em branco no relatório E1) | Relatório E1 | Alexandre e João Vitor |
| 1 | Fontes dos dados e-SUS Território e Meu INSS (+143%) | Relatório E1, Tabela 5 | Autor original da Tabela 0 |
| 1 | Heatmap com cinco integrantes | Heatmap | Henrique |
| 1 | Edição de Sharp, Rogers e Preece (2007 × 2019) | Processo de Design | Eduardo |
| 1 | Ferramentas usadas depois da E1 | Ferramentas | Eduardo |
| 2 | Coleta real com usuários (≥ 2 técnicas) ou retirada dos resultados não comprovados | Entrevistas, Questionários | Henrique (autor) com o grupo |
| 2 | Fotos das pp. 134, 139, 140–141, 183 e 192 | Perfis, TCLE, Cenários, Análise de Tarefas | Alexandre (perfis/cenários), João Vitor (TCLE), Gabriel (HTA) |
| 2 | Diagramas HTA e segunda técnica (CTT/GOMS) por integrante | Análise de Tarefas, Quadro 4 | Cada integrante na sua atividade; Gabriel coordena |
| 2 | Justificativa da persona primária e da quantidade de personas | Perfis e Personas | Alexandre |
| 2 | E-mail de contato do TCLE | TCLE | João Vitor |
| 2 | Ata da Reunião 01 (objetivo, atividades, próxima reunião, contribuições entre colchetes) | Atas | Henrique |
| 2 | Autores e fontes dos itens 13 a 21 da inspeção do Grupo 02 | Inspeção G02 | Quem participou da gravação `xNhCVgt2FE4` |
| 3 | Características da plataforma | Características da Plataforma | Eduardo (sem contribuição registrada na E3) |
| 3 | Foto da p. 29 e razão da seleção das metas | Metas | João Vitor |
| 3 | Foto da p. 283 | Guia de Estilo | Gabriel |
| 3 | Autor de cada princípio | Princípios Gerais | Henrique e Alexandre |
| 3 | Relatório E3 em PDF no repositório | Relatório E3 | Henrique |
| 3 | Fontes dos itens 16 a 19 da inspeção do Grupo 07 (páginas não batem com a edição de 2010) | Inspeção G07 | João Vitor |
| 4 | Storyboards (5) e relação quadro × HTA | Páginas individuais | Cada integrante |
| 4 | Página e cronogramas de Eduardo | `eduardo-ribeiro.md` | Eduardo |
| 4 | Datas do cronograma de Gabriel | `Gabriel_Robson.md` | Gabriel |
| 4 | DECIDE da avaliação da análise de tarefas | Planejamento DECIDE | Henrique (cronograma de HTA iniciado em 11/10) |
| 4 | Questões práticas, horário e local, teste-piloto (referência, foto, autor, declaração dos itens 11 e 12), itens a anotar, estrutura do relato | Planejamento DECIDE | Alexandre (planejar avaliação do storyboard, cronograma E1 §4.7) e João Vitor |
| 4 | Autoria das páginas individuais (histórico copiado) | Páginas individuais | Alexandre, Gabriel e João Vitor |
| 4 | Autoavaliação da Entrega 4 | Verificação do Grupo 03 | João Vitor |

## 5. Sugestões de conteúdo não aplicadas (CLAUDE.md, seção 1, item 3)

1. **Processo de Design, seção 4:** a terceira fase está nomeada "Avaliação e refinamento", mas a Figura 4.7 e o relatório E1 (§5) usam "análise de requisitos", "design, avaliação, desenvolvimento" e "instalação". Sugestão: alinhar os nomes das fases à figura.
2. **Perfis e Personas:** explicar por que João Paulo é a persona primária e por que três personas bastam (OBS 7 da avaliação recebida).
3. **Questionários e Entrevistas:** as conclusões ("confirmou estatisticamente", "maioria expressiva", teste-piloto com 2 participantes) e o checklist marcado como "Sim" não têm dados publicados, e a página de Perfis e Personas afirma que não houve coleta com usuários. Sugestão: publicar os dados ou reescrever como planejamento. **Risco acadêmico alto.**
4. **Metas de Usabilidade:** o texto conta "seis fatores"; Barbosa e Silva (2010, p. 29) listam os fatores de Nielsen (1993), e a eficácia vem da definição da ISO 9241-11. Também falta explicitar a razão da escolha de cada meta (item 14).
5. **Princípios Gerais, seção 2.9:** remover a frase repetida e citar Tognazzini (2003) e Cooper (1999) com "apud".
6. **Guia de Estilo:** a lista de referências mistura notas com referências; reordenar e usar "apud" para Marcus (1992) e Mayhew (1999).
7. **TCLE:** a Resolução CNS 196/96 foi revogada pela Resolução CNS 466/2012. Sugere-se citar a vigente, mantendo a 196/96 apenas se for a usada por Barbosa e Silva (2010).
8. **Cronograma Planejado:** a coluna "Situação" mistura planejamento e execução, e várias tarefas já realizadas aparecem como "Não iniciado". Sugestão: tirar a coluna do planejado e manter a situação só no executado.
9. **Relatório E1, Tabela 0:** dados sem fonte (estudo e-SUS Território, +143% de acessos no Meu INSS).
10. **Inspeções:** padronizar todas no formato do Plano (Sim / Não / Incompleto + evidência + versão, data e hora), como já está na do Grupo 01.

## 6. Alertas

1. **Direitos autorais e privacidade em repositório público.** A pasta `Refatoração/` foi enviada a um repositório **público** e contém livros completos ou excertos protegidos (Barbosa e Silva 2010 completo, SWEBOK, *About Face 3*, *Design Thinking*, capítulos de Preece), gravações de reuniões e inspeções com outros grupos (`.mp4` no Git LFS) e transcrições. Ela não é publicada no site, mas qualquer pessoa pode baixá-la do GitHub. Recomenda-se tirar esse material do repositório (o histórico do Git também guarda os arquivos) ou tornar o repositório privado. Nenhuma ação foi tomada sem a decisão do grupo.
2. **Matrícula exposta no histórico.** O commit `f0d0999` (`docs/reunioes/index.md`) tem links do OneDrive com a matrícula de um integrante no caminho. Os links **não** foram reproduzidos no site. Eles continuam no histórico do Git.
3. **Avaliação recebida da Entrega 2.** O documento `Refatoração/Entrega 2/_Gupo -3 Atividade avaliativa - IHC - Etapa 2.pdf` (avaliação do site do Grupo 03 pela monitoria) foi resumido no Relatório E2 e, na segunda rodada, transcrito em `docs/listas-verificacao/entrega-2.md` (perguntas, respostas, data e hora e observações resumidas). O PDF continua fora do site, por ser documento de terceiros.
4. **Relatório da Entrega 3** não está no repositório nem na pasta de referências.

## 7. Matriz de conformidade

### 7.1 Por entrega

A avaliação item a item da lista do Plano de Ensino (G1–G9, D1–D11 e itens de conteúdo), com evidência, está em cada relatório:

- [Relatório da Entrega 1](docs/relatorios/entrega-1.md), Tabela 6
- [Relatório da Entrega 2](docs/relatorios/entrega-2.md), Tabela 5
- [Relatório da Entrega 3](docs/relatorios/entrega-3.md), Tabela 5
- [Relatório da Entrega 4](docs/relatorios/entrega-4.md), Tabela 6 (e Quadro 1 de `docs/storyboard/planejamento/decide.md`)

### 7.2 Por página (itens verificáveis automaticamente)

Verificação automática, depois da refatoração, dos itens que dependem da estrutura da página. O número entre parênteses é a linha da seção no arquivo. D2 fica "Não conforme" enquanto houver **[VERIFICAR: revisor]**; D10, enquanto houver contribuição a preencher. D5 considera o título "Introdução" e a ausência de **[VERIFICAR: introdução]**. D4 (legendas, fontes e chamadas) foi padronizado manualmente em todas as páginas e não entra na verificação automática.

**Resumo**

| Item | Conforme | Não conforme | Não se aplica |
| --- | ---: | ---: | ---: |
| D1 | 56 | 0 | 0 |
| D2 | 0 | 56 | 0 |
| D3 | 56 | 0 | 0 |
| D5 | 34 | 22 | 0 |
| D10 | 10 | 36 | 10 |
| D11 | 56 | 0 | 0 |

**Detalhe**

| Página | D1 histórico | D2 autores e revisores | D3 referências | D5 introdução | D10 tabela de contribuição | D11 uso de IA | Marcadores [VERIFICAR] |
| --- | --- | --- | --- | --- | --- | --- | ---: |
| `docs/acompanhamento/index.md` | Conforme (l. 3) | Não conforme | Conforme (l. 193) | Conforme (l. 13) | Não se aplica (página de apoio) | Conforme (l. 197) | 4 |
| `docs/apresentacoes.md` | Conforme (l. 3) | Não conforme | Conforme (l. 60) | Conforme (l. 15) | Não se aplica (página de apoio) | Conforme (l. 64) | 22 |
| `docs/atas.md` | Conforme (l. 17) | Não conforme | Conforme (l. 208) | Conforme (l. 30) | Conforme (l. 3) | Conforme (l. 214) | 29 |
| `docs/guia-estilo/contribuicao/contrib.md` | Conforme (l. 17) | Não conforme | Conforme (l. 81) | Conforme (l. 29) | Não conforme | Conforme (l. 91) | 20 |
| `docs/guia-estilo/guia/guia.md` | Conforme (l. 17) | Não conforme | Conforme (l. 321) | Conforme (l. 29) | Não conforme | Conforme (l. 336) | 7 |
| `docs/guia-estilo/metas/metas.md` | Conforme (l. 17) | Não conforme | Conforme (l. 66) | Não conforme | Não conforme | Conforme (l. 72) | 7 |
| `docs/guia-estilo/plataforma/caracteristicas.md` | Conforme (l. 20) | Não conforme | Conforme (l. 48) | Não conforme | Não conforme | Conforme (l. 54) | 14 |
| `docs/guia-estilo/principios/principios.md` | Conforme (l. 17) | Não conforme | Conforme (l. 172) | Conforme (l. 29) | Não conforme | Conforme (l. 180) | 6 |
| `docs/index.md` | Conforme (l. 95) | Não conforme | Conforme (l. 114) | Não conforme | Não conforme | Conforme (l. 120) | 12 |
| `docs/outros/plano de ensino/lista.md` | Conforme (l. 17) | Não conforme | Conforme (l. 105) | Conforme (l. 30) | Não conforme | Conforme (l. 115) | 27 |
| `docs/outros/plano de ensino/plano.md` | Conforme (l. 3) | Não conforme | Conforme (l. 160) | Conforme (l. 15) | Não se aplica (página de apoio) | Conforme (l. 164) | 4 |
| `docs/perfil-de-usuario/analise/fluxos.md` | Conforme (l. 17) | Não conforme | Conforme (l. 156) | Conforme (l. 30) | Não conforme | Conforme (l. 164) | 20 |
| `docs/perfil-de-usuario/aspectos-eticos/termo/TCLE.md` | Conforme (l. 17) | Não conforme | Conforme (l. 84) | Conforme (l. 32) | Não conforme | Conforme (l. 94) | 10 |
| `docs/perfil-de-usuario/cenarios/cenarios.md` | Conforme (l. 17) | Não conforme | Conforme (l. 48) | Não conforme | Não conforme | Conforme (l. 54) | 11 |
| `docs/perfil-de-usuario/contribuicao/contrib.md` | Conforme (l. 17) | Não conforme | Conforme (l. 83) | Conforme (l. 29) | Não conforme | Conforme (l. 91) | 9 |
| `docs/perfil-de-usuario/entrevistas/entrevistas.md` | Conforme (l. 17) | Não conforme | Conforme (l. 156) | Conforme (l. 29) | Não conforme | Conforme (l. 164) | 7 |
| `docs/perfil-de-usuario/personas/perfisEpersonas.md` | Conforme (l. 17) | Não conforme | Conforme (l. 299) | Conforme (l. 31) | Não conforme | Conforme (l. 315) | 8 |
| `docs/perfil-de-usuario/questionarios/questionarios.md` | Conforme (l. 17) | Não conforme | Conforme (l. 154) | Conforme (l. 29) | Não conforme | Conforme (l. 166) | 9 |
| `docs/planejamento/cronograma/cronograma_executado.md` | Conforme (l. 17) | Não conforme | Conforme (l. 110) | Conforme (l. 27) | Não conforme | Conforme (l. 122) | 30 |
| `docs/planejamento/cronograma/cronograma_planejado.md` | Conforme (l. 19) | Não conforme | Conforme (l. 283) | Conforme (l. 33) | Não conforme | Conforme (l. 291) | 25 |
| `docs/planejamento/ferramentas/ferramentas_utilizadas.md` | Conforme (l. 17) | Não conforme | Conforme (l. 62) | Conforme (l. 29) | Não conforme | Conforme (l. 92) | 7 |
| `docs/planejamento/heatmap/heatmap.md` | Conforme (l. 17) | Não conforme | Conforme (l. 65) | Conforme (l. 29) | Não conforme | Conforme (l. 73) | 6 |
| `docs/planejamento/processo/processo_de_design.md` | Conforme (l. 17) | Não conforme | Conforme (l. 91) | Conforme (l. 29) | Não conforme | Conforme (l. 107) | 8 |
| `docs/planejamento/site escolhido/site_escolhido.md` | Conforme (l. 19) | Não conforme | Conforme (l. 57) | Conforme (l. 30) | Não conforme | Conforme (l. 69) | 7 |
| `docs/planejamento/sites avaliados/sites_avaliados.md` | Conforme (l. 17) | Não conforme | Conforme (l. 143) | Conforme (l. 29) | Não conforme | Conforme (l. 165) | 6 |
| `docs/projeto-final/index.md` | Conforme (l. 20) | Não conforme | Conforme (l. 163) | Não conforme | Não conforme | Conforme (l. 167) | 43 |
| `docs/prototipo-alta-fidelidade/planejamento.md` | Conforme (l. 20) | Não conforme | Conforme (l. 88) | Não conforme | Não conforme | Conforme (l. 96) | 22 |
| `docs/prototipo-alta-fidelidade/relato.md` | Conforme (l. 20) | Não conforme | Conforme (l. 76) | Não conforme | Não conforme | Conforme (l. 84) | 19 |
| `docs/prototipo-papel/planejamento.md` | Conforme (l. 20) | Não conforme | Conforme (l. 88) | Não conforme | Não conforme | Conforme (l. 96) | 22 |
| `docs/prototipo-papel/relato.md` | Conforme (l. 20) | Não conforme | Conforme (l. 76) | Não conforme | Não conforme | Conforme (l. 84) | 19 |
| `docs/relatorios/entrega-1.md` | Conforme (l. 19) | Não conforme | Conforme (l. 140) | Não conforme | Conforme (l. 3) | Conforme (l. 152) | 16 |
| `docs/relatorios/entrega-2.md` | Conforme (l. 17) | Não conforme | Conforme (l. 119) | Não conforme | Conforme (l. 3) | Conforme (l. 127) | 21 |
| `docs/relatorios/entrega-3.md` | Conforme (l. 17) | Não conforme | Conforme (l. 104) | Não conforme | Conforme (l. 3) | Conforme (l. 110) | 16 |
| `docs/relatorios/entrega-4.md` | Conforme (l. 17) | Não conforme | Conforme (l. 122) | Não conforme | Conforme (l. 3) | Conforme (l. 130) | 21 |
| `docs/relatorios/index.md` | Conforme (l. 3) | Não conforme | Conforme (l. 35) | Conforme (l. 13) | Não se aplica (página de apoio) | Conforme (l. 39) | 1 |
| `docs/storyboard/contribuicao/contrib.md` | Conforme (l. 17) | Não conforme | Conforme (l. 83) | Conforme (l. 30) | Não conforme | Conforme (l. 91) | 25 |
| `docs/storyboard/planejamento/Alexandre_Vilar_Valadares_Fonseca.md` | Conforme (l. 23) | Não conforme | Conforme (l. 131) | Não conforme | Conforme (l. 9) | Conforme (l. 141) | 9 |
| `docs/storyboard/planejamento/Gabriel_Robson.md` | Conforme (l. 23) | Não conforme | Conforme (l. 134) | Não conforme | Conforme (l. 9) | Conforme (l. 144) | 9 |
| `docs/storyboard/planejamento/Henrique_Schneider.md` | Conforme (l. 23) | Não conforme | Conforme (l. 129) | Não conforme | Conforme (l. 9) | Conforme (l. 139) | 9 |
| `docs/storyboard/planejamento/Joao_Vitor_Tavares.md` | Conforme (l. 23) | Não conforme | Conforme (l. 131) | Não conforme | Conforme (l. 9) | Conforme (l. 141) | 9 |
| `docs/storyboard/planejamento/decide.md` | Conforme (l. 19) | Não conforme | Conforme (l. 129) | Conforme (l. 30) | Não conforme | Conforme (l. 139) | 24 |
| `docs/storyboard/planejamento/eduardo-ribeiro.md` | Conforme (l. 26) | Não conforme | Conforme (l. 99) | Não conforme | Conforme (l. 12) | Conforme (l. 105) | 16 |
| `docs/storyboard/relatos/analise.md` | Conforme (l. 20) | Não conforme | Conforme (l. 77) | Não conforme | Não conforme | Conforme (l. 85) | 20 |
| `docs/storyboard/relatos/story.md` | Conforme (l. 20) | Não conforme | Conforme (l. 77) | Não conforme | Não conforme | Conforme (l. 85) | 20 |
| `docs/verificacao-artefatos/index.md` | Conforme (l. 20) | Não conforme | Conforme (l. 54) | Não conforme | Não conforme | Conforme (l. 62) | 14 |
| `docs/verificacao/grupo-01/entrega-4/lista-verificacao.md` | Conforme (l. 27) | Não conforme | Conforme (l. 225) | Conforme (l. 42) | Não conforme | Conforme (l. 185) | 5 |
| `docs/verificacao/grupo-01/index.md` | Conforme (l. 3) | Não conforme | Conforme (l. 22) | Conforme (l. 14) | Não se aplica (página de apoio) | Conforme (l. 26) | 2 |
| `docs/verificacao/grupo-02/entrega-2/lista-verificacao.md` | Conforme (l. 19) | Não conforme | Conforme (l. 80) | Conforme (l. 30) | Não conforme | Conforme (l. 90) | 14 |
| `docs/verificacao/grupo-02/index.md` | Conforme (l. 3) | Não conforme | Conforme (l. 22) | Conforme (l. 14) | Não se aplica (página de apoio) | Conforme (l. 26) | 2 |
| `docs/verificacao/grupo-03/entrega-1/lista-verificacao.md` | Conforme (l. 3) | Não conforme | Conforme (l. 57) | Não conforme | Não conforme | Conforme (l. 63) | 4 |
| `docs/verificacao/grupo-03/index.md` | Conforme (l. 3) | Não conforme | Conforme (l. 25) | Conforme (l. 14) | Não se aplica (página de apoio) | Conforme (l. 29) | 4 |
| `docs/verificacao/grupo-05/entrega-1/lista-verificacao.md` | Conforme (l. 19) | Não conforme | Conforme (l. 117) | Conforme (l. 30) | Não conforme | Conforme (l. 125) | 10 |
| `docs/verificacao/grupo-05/index.md` | Conforme (l. 3) | Não conforme | Conforme (l. 22) | Conforme (l. 14) | Não se aplica (página de apoio) | Conforme (l. 26) | 3 |
| `docs/verificacao/grupo-07/entrega-3/lista-verificacao.md` | Conforme (l. 17) | Não conforme | Conforme (l. 96) | Conforme (l. 28) | Não conforme | Conforme (l. 104) | 6 |
| `docs/verificacao/grupo-07/index.md` | Conforme (l. 3) | Não conforme | Conforme (l. 21) | Conforme (l. 13) | Não se aplica (página de apoio) | Conforme (l. 25) | 1 |
| `docs/verificacao/index.md` | Conforme (l. 3) | Não conforme | Conforme (l. 52) | Conforme (l. 15) | Não se aplica (página de apoio) | Conforme (l. 56) | 6 |

## 8. Uso de IA generativa e autoria

O Claude (Anthropic) executou esta refatoração a pedido de Henrique Schneider: leitura do `CLAUDE.md` e dos materiais de referência, auditoria das páginas, extração de texto dos PDFs do grupo e do livro (com `pdftotext`) para transcrever e conferir páginas, edição das páginas, criação dos esqueletos e deste relatório. Nenhum dado de avaliação, participante, resultado, data de reunião, link de vídeo ou contribuição foi criado. Tudo o que faltava ficou marcado com **[VERIFICAR]**. Pela regra da SBC adotada no Plano de Ensino (p. 3), a ferramenta não é autora: a responsabilidade pelo conteúdo é dos integrantes, que devem revisar as mudanças antes do merge.

## 9. Validação

- `mkdocs build --strict` (mkdocs 1.6.1, mkdocs-material 9.7.7, mkdocs-redirects 1.2.3): sem avisos.
- Build com `validation.anchors`, `absolute_links`, `unrecognized_links` e `omitted_files` em `warn`: sem avisos.
- Verificação de todos os `href` e `src` locais no HTML gerado (inclusive HTML bruto): 0 quebrados.
- Redirecionamento `verificacao/grupo-06/` → `verificacao/grupo-07/` gerado e testado.
- Conferência visual no Chromium (Playwright), nos temas claro e escuro, de: página inicial, Acompanhamento (abas), Princípios Gerais (figuras), Inspeção do Grupo 01 (as 7 figuras carregam) e Relatório da Entrega 1.

## 10. Segunda rodada: abas Listas de Verificação, Atas e Integrantes

Pedidos do Henrique em 15/10/2026, depois da primeira rodada: (1) "uma aba com as listas de verificação de cada entrega (as listas do professor mais as listas feitas pelo grupo)"; (2) "uma aba de atas das reuniões […] de acordo com recomendações do próprio professor"; (3) "uma aba do pages com as entregas futuras e antigas por integrante do grupo".

### 10.1 O que mudou

- **Navegação:** as abas agora são Início, Integrantes, Entrega 1, Entrega 2, Entrega 3, Entrega 4, Entregas 5 a 8, Listas de Verificação e Atas. A aba "Verificação" foi incorporada à aba "Listas de Verificação", com as inspeções dentro de cada entrega; a aba "Disciplina", que tinha uma página só, foi removida e o Plano de Ensino foi para "Início"; os rótulos das abas das entregas foram encurtados (o tema continua no título das páginas) porque, com nove abas, "Listas de Verificação" e "Atas" ficavam fora da tela a 1440 px. Nenhuma URL mudou.
- **Atas:** `docs/atas.md` virou `docs/atas/index.md` (o endereço `/atas/` é o mesmo, e as âncoras antigas das duas reuniões foram mantidas no Quadro 2). Cada ata ganhou página própria, nomeada como no modelo do MCTIC (`ata-reuniao-AAAAMMDD-XX.md`), com as seções na ordem do modelo. O índice reúne as recomendações do Plano (item 9 do planejamento geral; D7, D8 e D9), da monitoria (local e câmera aberta) e do MCTIC, a conformidade de cada ata e as inspeções gravadas sem ata. Foi criado um modelo de ata em Markdown (`docs/atas/modelo.md`), sem telefone, e-mail e assinatura, que o modelo do MCTIC prevê mas que não devem ir para um site público.
- **Listas de Verificação:** uma página por entrega com (a) a lista do Plano de Ensino transcrita (G1–G9, D1–D11 e itens de conteúdo, pp. 8–13); (b) na Entrega 2, a lista aplicada pela monitoria em 01/10/2026, com respostas e observações; (c) as listas e os itens do grupo (lista de conferência interna, itens 13 a 21, 11 a 22 e N1 a N7, com fonte e autor); (d) as listas por artefato pedidas na atividade "elaborar listas de verificação" (enunciado em `Refatoração/Entrega 2/Materiais de Consulta/Textos/`); (e) as listas individuais do Moodle; (f) as aplicações (autoavaliações, inspeções, monitoria). As Entregas 5 a 8 ficaram numa página só, porque o Plano não traz lista para elas; a Entrega 8 recebeu os 12 itens gerais do modelo de lista de verificação da qualidade de artefatos. O Projeto Final virou uma lista de 15 perguntas (14 tópicos e a duração).
- **Integrantes:** uma página por integrante, com as Entregas 1 a 4 em abas (planejado no cronograma × registrado como realizado × evidência × reunião × pendência), as próximas tarefas (Cronograma Planejado, cronogramas individuais da Entrega 4 e tarefas de todos), as atividades individuais do Moodle e a lista, página a página, das contribuições ainda marcadas como **[VERIFICAR]**. A visão geral resume a situação por entrega. As páginas foram geradas a partir dos registros do site; nenhuma tarefa foi atribuída pela ferramenta.
- Links para `atas.md` atualizados em Apresentações, Acompanhamento, Cronograma Executado, Relatórios das Entregas 1 e 4, Matriz da Entrega 4 e Inspeção do Grupo 01, com registro no histórico de cada página. O Acompanhamento ganhou as pendências das listas por artefato e das atas e o link para a aba Integrantes. README atualizado.

### 10.2 Páginas novas

| Página | Conteúdo |
| --- | --- |
| `atas/ata-reuniao-20260927-01.md`, `atas/ata-reuniao-20261014-02.md` | Atas das Reuniões 01 e 02 em páginas próprias |
| `atas/modelo.md` | Modelo de ata (MCTIC + D7 a D9 + monitoria) |
| `listas-verificacao/index.md` | Visão geral das listas, listas pendentes e itens por integrante |
| `listas-verificacao/entrega-1.md` a `entrega-4.md` | Listas do professor, da monitoria e do grupo, por entrega |
| `listas-verificacao/entregas-5-a-8.md`, `projeto-final.md` | Situação das listas das Entregas 5 a 8 e lista do Projeto Final |
| `integrantes/index.md` e uma página por integrante | Entregas anteriores e próximas de cada integrante |

### 10.3 Pendências novas (com responsável sugerido)

| Pendência | Página | Responsável sugerido |
| --- | --- | --- |
| Listas por artefato da Entrega 2 (mínimos da monitoria): técnicas de coleta (5 itens × 3 técnicas) | Listas da Entrega 2, Quadro 5 | Henrique (autor de Entrevistas e Questionários) |
| … perfil do usuário (10 itens) e personas/elenco (10 itens) | idem | Alexandre (autor dos perfis e personas) |
| … cenários (8 itens) | idem | Alexandre (autor dos cenários) ou João Vitor |
| … HTA (8 itens) | idem | Gabriel (autor da HTA) |
| … CTT (8 itens) | idem | Eduardo (sem contribuição registrada na Entrega 2) |
| Listas por artefato da Entrega 4: DECIDE e planejamento do resultado | Listas da Entrega 4, Quadro 3 | Alexandre (DECIDE) e João Vitor (autor do item N5, sobre o relato) |
| Lista do desenvolvimento do projeto × processo de design | Listas da Entrega 1, Quadro 5 | Eduardo (escolha do processo de design) |
| Publicar as listas individuais do Moodle | Listas de cada entrega | Cada integrante |
| Transcrever as listas do professor das Entregas 5 a 8 quando forem publicadas no Moodle | Listas das Entregas 5 a 8 | Henrique (ou quem baixar os enunciados para `Refatoração/`) |
| Confirmar a origem do modelo de lista de verificação da qualidade de artefatos | Listas das Entregas 5 a 8, seção 3 | Henrique |
| Campos do MCTIC que faltam nas atas (horários previstos, redator, convocados, tipos dos assuntos, próxima reunião) | Atas, Quadro 3 | Henrique (registrou as duas atas) |
| Atas das inspeções gravadas sem ata (07/09, 02/10, 10/10) | Atas, Quadro 4 | Quem participou de cada sessão |
| Sigla do projeto para o nome das atas (modelo do MCTIC) | Atas | Grupo |
| Conferir a própria página e completar a seção 5 (contribuições a **[VERIFICAR]**) | Integrantes | Cada integrante |

### 10.4 O que não foi feito

- O Moodle não foi acessado: a sessão não tem credenciais e não deve usar a senha de um integrante. As listas das Entregas 5 a 8 e as listas individuais ficam como **[VERIFICAR]** até os enunciados serem salvos em `Refatoração/`.
- Nenhum item de lista de verificação foi criado pela ferramenta. As listas por artefato aparecem só com a estrutura e os mínimos exigidos.
- O push para `Interacao-Humano-Computador/2026.2-Grupo03` continua bloqueado (HTTP 403: o app do Claude não tem permissão de escrita no repositório). A branch foi enviada ao fork `SchneiderCode1/2026.2-Grupo03-Fork`, com autorização do Henrique.

### 10.5 Validação

- `mkdocs build --strict`: sem avisos. Build com validação de âncoras e links em `warn`: sem avisos.
- Links locais no HTML gerado: 0 quebrados (fora a página 404, que usa caminhos absolutos do site publicado).
- Conferência visual no Chromium, nos temas claro e escuro: visão geral e página de integrante (abas por entrega), Listas da Entrega 2 e Atas. As nove abas cabem na barra a 1280 px e a 1440 px.

## Histórico de versões

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| --- | --- | --- | --- | --- |
| 15/10/2026 | 1.0 | Criação do relatório da refatoração | Henrique Schneider (solicitante), com apoio do Claude (IA generativa) | [VERIFICAR: revisor] |
| 15/10/2026 | 1.1 | Inclusão da seção 10 (abas Listas de Verificação, Atas e Integrantes), da nota sobre os números depois da segunda rodada e da atualização do alerta 3 | Henrique Schneider (solicitante), com apoio do Claude (IA generativa) | [VERIFICAR: revisor] |
