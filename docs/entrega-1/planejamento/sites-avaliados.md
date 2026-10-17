# Sites Avaliados

## Tabela de contribuição

**Tabela 1 – Contribuições no artefato Sites Avaliados**

| Integrante | Contribuição | Atividade (link) | Gravação (link) |
| --- | --- | --- | --- |
| Alexandre Vilar Valadares Fonsêca | Avaliação individual do SouGov.br (FONSECA, 2026) | [PDF da avaliação](../../assets/pdfs/SouGovMetodoeAvali%C3%A7%C3%A3o.pdf) | — |
| Eduardo Ribeiro Gomes da Silva | Avaliação individual do Meu SUS Digital (SILVA, 2026); estruturação dos critérios e do quadro comparativo (versão 1.0) e consolidação das avaliações (versão 2.0) | [PDF da avaliação](../../assets/pdfs/avaliaoMeuSUSDigital.pdf); [commit 4d40b86](https://github.com/Interacao-Humano-Computador/2026.2-Grupo03/commit/4d40b86); [commit f88c791](https://github.com/Interacao-Humano-Computador/2026.2-Grupo03/commit/f88c791) | — |
| Gabriel Robson | **[VERIFICAR: contribuição]** (integrante a partir da Entrega 2) | — | — |
| Henrique Schneider Fernandes da Rosa | Avaliação individual da Época Cosméticos (ROSA, 2026) | [PDF da avaliação](../../assets/pdfs/ProjetoParteIndividualMetodoEAvali%C3%A7%C3%A3o.pdf) | — |
| João Vitor Tavares de Sá Lima | Avaliação individual do Portal de Serviços do Detran-DF (LIMA, 2026); inclusão na tabela de sites avaliados | [PDF da avaliação](../../assets/pdfs/PlojetoParteIndividualMetodoeAvali%C3%A7%C3%A3o.pdf); [commit 968f18d](https://github.com/Interacao-Humano-Computador/2026.2-Grupo03/commit/968f18d) | — |

Fonte: elaborado pelos autores (2026).

## Histórico de versões

**Tabela 2 – Histórico de versões do artefato Sites Avaliados**

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| --- | --- | --- | --- | --- |
| 10/09/2026 | 1.0 | Estruturação inicial dos critérios e do quadro comparativo. | Eduardo Ribeiro | **[VERIFICAR: revisor]** (registrado como "A definir") |
| 10/09/2026 | 2.0 | Consolidação das avaliações individuais de SouGov.br, Meu SUS Digital, Época Cosméticos e Portal de Serviços do Detran-DF. | Eduardo Ribeiro | **[VERIFICAR: revisor]** (registrado como "A definir") |
| 15/10/2026 | 2.1 | Padronização da estrutura (tabela de contribuição, numeração e legendas das tabelas, chamadas no texto), das referências (ABNT) e inclusão da seção de uso de IA | Henrique Schneider (solicitante), com apoio do Claude (IA generativa) | **[VERIFICAR: revisor]** |

Fonte: elaborado pelos autores (2026).

## 1. Introdução

Esta página consolida as avaliações individuais realizadas pelos integrantes do Grupo 3 durante a seleção do objeto de estudo da disciplina de Interação Humano-Computador. Foram analisados quatro sistemas: SouGov.br, Meu SUS Digital, Época Cosméticos e Portal de Serviços do Detran-DF.

As avaliações não constituem uma única pesquisa com o mesmo sistema. Cada integrante delimitou um escopo próprio, executou uma inspeção heurística individual e registrou problemas de interação, interface, usabilidade e acessibilidade. A consolidação permite comparar os achados e identificar quais problemas são mais relevantes para o projeto.

A análise considera a IHC como o estudo da interação entre pessoas, sistemas e tarefas, levando em conta as características e necessidades dos usuários no contexto de uso (Barbosa; Silva, 2010).

!!! note "Outra lista de sites candidatos"
    O relatório entregue na Entrega 1 (Grupo 03, 2026, seção 2, pp. 3–5) compara outros cinco sites preliminares (Portal do Detran-DF, Portal do GDF, Meu SUS Digital, Meu Gov e Meu INSS). A comparação está transcrita no [Relatório da Entrega 1](../relatorio.md). **[VERIFICAR: o grupo deve indicar como as duas listas se relacionam.]**

## 2. Integrantes e sites avaliados

A Tabela 3 relaciona cada integrante ao site que avaliou individualmente.

**Tabela 3 – Site avaliado por integrante**

| Integrante | Site avaliado |
| --- | --- |
| Alexandre Vilar | SouGov.br |
| Eduardo Ribeiro | Meu SUS Digital |
| Henrique Schneider | Época Cosméticos |
| João Vitor | Portal de Serviços do Detran-DF |

Fonte: elaborado pelos autores (2026).

## 3. Método comum de avaliação

Os quatro relatórios utilizaram avaliação heurística como método de inspeção. O procedimento consistiu em navegar pelas telas e tarefas definidas, comparar a interface com as heurísticas de Nielsen e registrar cada problema com contexto, causa, efeito sobre o usuário, impacto na tarefa, severidade e sugestão de correção (Nielsen, 1994; Maciel *et al.*, 2004).

Esse método foi escolhido por permitir uma análise sistemática sem recrutamento de usuários reais. Consequentemente, os resultados indicam problemas potenciais de interação e não representam, sozinhos, uma prova estatística da experiência de todos os usuários.

## 4. Quadro comparativo

A Tabela 4 compara o escopo e o número de problemas encontrados em cada avaliação.

**Tabela 4 – Quadro comparativo das avaliações individuais**

| Sistema avaliado | Avaliador | Escopo principal | Problemas encontrados | Principais temas |
| --- | --- | --- | ---: | --- |
| SouGov.br | Alexandre Vilar | Login, serviços, recesso e assistente virtual | 5 | Layout responsivo, status, linguagem, ajuda e prevenção de erros |
| Meu SUS Digital | Eduardo Ribeiro | Edição e persistência dos dados do perfil | 2 | Feedback falso, persistência de dados, ajuda e mensagens técnicas |
| Época Cosméticos | Henrique Schneider | Fluxo de compra e navegação do e-commerce | 3 | Feedback, filtros, eficiência, consistência e liberdade de navegação |
| Portal de Serviços do Detran-DF | João Vitor | Multas, credenciadas, agendamento, chatbot e login | 5 | Reconhecimento, ícones, progresso, prevenção de erros e ajuda |

Fonte: elaborado pelos autores (2026).

## 5. Avaliações individuais

### 5.1 SouGov.br

O escopo incluiu a versão web para desktop, a autenticação via Conta gov.br, a página inicial, a lista de serviços, o fluxo de consulta e programação de recesso e o assistente virtual. Os dados desta síntese foram extraídos do relatório individual de avaliação (Fonseca, 2026).

[Abrir PDF da avaliação](../../assets/pdfs/SouGovMetodoeAvali%C3%A7%C3%A3o.pdf){ target="_blank" rel="noopener" } · [Abrir SouGov.br](https://sougov.sigepe.gov.br/){ target="_blank" rel="noopener" }

Foram identificados cinco problemas:

- **Layout pouco responsivo:** o conteúdo permanece em uma coluna estreita, desperdiçando espaço em telas grandes e aumentando a necessidade de rolagem.
- **Status parcialmente oculto:** etiquetas e justificativas de recesso podem ficar cortadas, dificultando a compreensão de uma aprovação ou rejeição.
- **Terminologia administrativa sem explicação:** expressões como “Saldo Para Efeito de Indenização” não possuem ajuda contextual suficiente.
- **Assistente virtual sem orientação inicial:** a tela não apresenta exemplos de perguntas nem informa claramente os limites da ferramenta.
- **Ausência de prevenção de prazos:** o sistema informa a rejeição automática do recesso somente depois do vencimento, sem alertas proativos.

O relatório classificou três problemas como graves e dois como simples. Os achados indicam que a interface precisa comunicar melhor estados, prazos e possibilidades de ação para evitar insegurança e abandono.

### 5.2 Meu SUS Digital

O escopo ficou concentrado na edição dos dados cadastrais do perfil, verificando se o usuário consegue alterar, salvar e confirmar a persistência das informações (Silva, 2026).

[Abrir PDF da avaliação](../../assets/pdfs/avaliaoMeuSUSDigital.pdf){ target="_blank" rel="noopener" } · [Abrir Meu SUS Digital](https://meususdigital.saude.gov.br/){ target="_blank" rel="noopener" }

Foram identificados dois problemas:

- **Falso feedback de sucesso:** o sistema aparenta confirmar a alteração, mas os dados retornam ao estado anterior após recarregar a página ou acessar outra área.
- **Mensagem técnica no recurso de ajuda:** o botão exibe “undefined” em vez de uma orientação compreensível.

O primeiro problema foi classificado como grave e o segundo como simples. Em conjunto, os achados revelam uma falha crítica de confiança: o usuário pode acreditar que seus dados de saúde foram atualizados quando a operação não foi concluída.

### 5.3 Época Cosméticos

O escopo contemplou o fluxo de compra, a navegação por categorias, os filtros, as ofertas, os favoritos e o checkout do comércio eletrônico (Rosa, 2026).

[Abrir PDF da avaliação](../../assets/pdfs/ProjetoParteIndividualMetodoEAvali%C3%A7%C3%A3o.pdf){ target="_blank" rel="noopener" } · [Abrir Época Cosméticos](https://www.epocacosmeticos.com.br/){ target="_blank" rel="noopener" }

Foram identificados três grupos de problemas:

- **Controles sem feedback ou com travamentos:** estrelas de avaliação, o botão “ver tudo” e a cópia de cupons não executam claramente a ação esperada ou não confirmam o resultado.
- **Informações ocultas e baixa eficiência:** filtros importantes exigem rolagem excessiva, ofertas demandam cliques adicionais e não há ordenação adequada dos produtos.
- **Inconsistência e restrição de navegação:** a categoria “Elétricos” possui comportamento diferente, a troca de subcategorias exige retorno à página inicial e os favoritos exigem login imediato.

O relatório conclui que essas falhas impactam a eficiência, a satisfação e a liberdade de navegação durante a jornada de compra.

### 5.4 Portal de Serviços do Detran-DF

O escopo incluiu a página inicial, a consulta de credenciadas, o agendamento de atendimento presencial, o assistente virtual DET e a tela de login. Os aplicativos Detran Digital e CDT ficaram fora da avaliação (Lima, 2026).

[Abrir PDF da avaliação](../../assets/pdfs/PlojetoParteIndividualMetodoeAvali%C3%A7%C3%A3o.pdf){ target="_blank" rel="noopener" } · [Abrir Portal de Serviços do Detran-DF](https://portal.detran.df.gov.br/){ target="_blank" rel="noopener" }

Foram identificados cinco problemas:

- **Baixo reconhecimento de serviços frequentes:** a consulta e o pagamento de multas não aparecem entre os atalhos principais nem com um rótulo direto no assistente virtual.
- **Ícones genéricos nas categorias de credenciadas:** diferentes serviços utilizam a mesma metáfora visual, dificultando a varredura e a identificação rápida.
- **Ausência de indicador de progresso:** o agendamento não informa em qual etapa o usuário está nem quantas etapas faltam.
- **Campos obrigatórios sem orientação:** o botão “Concluir” aparece desabilitado sem explicar por que a ação não pode ser realizada.
- **Ajuda insuficiente no login:** não há links visíveis para “Esqueci minha senha”, “Primeiro acesso” ou recuperação de falhas de autenticação.

O relatório registrou problemas graves, simples, barreiras, obstáculos e ruídos. Os achados atingem tarefas de alta relevância pública, como multas, agendamento e acesso à conta, o que aumenta o impacto potencial sobre o cidadão.

## 6. Justificativa da seleção

O Portal de Serviços do Detran-DF foi adotado como objeto de estudo do projeto por reunir problemas de interação diretamente relacionados à interface e tarefas de grande relevância para o cidadão. A avaliação individual identificou falhas em serviços de multas, agendamento, credenciadas, login e assistência, oferecendo um escopo diversificado para a aplicação das heurísticas de usabilidade.

Além da variedade de fluxos, o portal permite investigar como arquitetura da informação, linguagem, feedback, prevenção de erros e acessibilidade afetam a autonomia do usuário em serviços públicos. A seleção não significa que os outros sistemas não apresentem problemas; ela indica que o Detran-DF oferece a combinação mais adequada entre relevância social, diversidade de tarefas e possibilidade de reprojeto para os objetivos desta disciplina.

## Referências

BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. Rio de Janeiro: Elsevier, 2010.

DEPARTAMENTO DE TRÂNSITO DO DISTRITO FEDERAL. *Portal de Serviços do Detran-DF*. Brasília, DF, 2026. Disponível em: https://portal.detran.df.gov.br/. Acesso em: 10 set. 2026.

FONSECA, Alexandre Vilar Valadares. *Avaliação heurística do SouGov.br: portal do servidor público federal*. Brasília, 2026. Documento interno.

GRUPO 03. *Relatório da Etapa 1: Planejamento do Projeto – Portal do Detran-DF*. Brasília: Universidade de Brasília, 2026. Disponível em: [PDF](../../assets/pdfs/entregas/relatorio-entrega-1-grupo-03.pdf).

LIMA, João Vitor Tavares de Sá. *Avaliação heurística do Portal de Serviços do Detran-DF*. Brasília, 2026. Documento interno.

MACIEL, Cristiano; NOGUEIRA, José Luiz Thomaselli; CIUFFO, Leandro Neumann; GARCIA, Ana Cristina Bicharra. Avaliação heurística de sítios na Web. *In*: ESCOLA DE INFORMÁTICA DA SBC-CENTRO-OESTE, 7., 2004, Cuiabá. *Anais* [...]. Cuiabá: Sociedade Brasileira de Computação, 2004. p. 41-76.

NIELSEN, Jakob. Heuristic evaluation. *In*: NIELSEN, Jakob; MACK, Robert L. (ed.). *Usability inspection methods*. New York: John Wiley & Sons, 1994. p. 25-62.

ROSA, Henrique Schneider Fernandes da. *Avaliação do site Época Cosméticos*. Brasília, 2026. Documento interno.

SALES, André Barros de. *Plano de Ensino: Interação Humano Computador (FGA0173), 02/2026, Turma 01, v1*. Brasília: Universidade de Brasília, 2026.

SILVA, Eduardo Ribeiro Gomes da. *Projeto de avaliação de IHC: Meu SUS Digital*. Brasília, 2026. Documento interno.

## Agradecimentos e uso de IA generativa

**Uso de IA generativa nesta página.** Em 15/10/2026, o Claude (Anthropic) foi utilizado, a pedido de Henrique Schneider, para reorganizar esta página no modelo de artefato da disciplina (tabela de contribuição, histórico em ordem cronológica, numeração das seções, legendas e chamadas das tabelas), ordenar e padronizar as referências conforme a ABNT, incluir o aviso sobre a lista de sites do relatório da Entrega 1 e marcar com **[VERIFICAR]** as informações que só o grupo pode confirmar. As sínteses das avaliações individuais não foram alteradas. A ferramenta não é autora do artefato e seu uso não exime os autores da responsabilidade sobre o conteúdo (SALES, 2026, p. 3).
