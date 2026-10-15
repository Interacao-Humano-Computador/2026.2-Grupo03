# Análise de Tarefas e Fluxos de Trabalho do Usuário

## Tabela de contribuição

**Tabela 1 – Contribuições no artefato Análise de Tarefas**

| Integrante | Contribuição | Atividade (link) | Gravação (link) |
| --- | --- | --- | --- |
| Alexandre Vilar Valadares Fonsêca | Modelagem HTA/CTT individual registrada nas contribuições da Entrega 2 (**[VERIFICAR: não publicada nesta página]**) | — | [Reunião 01 (27/09/2026)](https://youtu.be/jhhM3LJIpgA) |
| Eduardo Ribeiro Gomes da Silva | **[VERIFICAR: contribuição]** | — | — |
| Gabriel Robson | Correção da sequência e da identificação da tarefa 2 no fluxo de consulta de débitos (v1.1); revisão das v1.0 e v1.2 | [Commit 43cb9a1](https://github.com/Interacao-Humano-Computador/2026.2-Grupo03/commit/43cb9a1) | [Reunião 01 (27/09/2026)](https://youtu.be/jhhM3LJIpgA) |
| Henrique Schneider Fernandes da Rosa | Catalogação e mapeamento dos fluxos (v1.0); introdução sobre HTA e golfos de interação (v1.2); revisão da v1.1 | [Commit d53cf07](https://github.com/Interacao-Humano-Computador/2026.2-Grupo03/commit/d53cf07); [commit 530579c](https://github.com/Interacao-Humano-Computador/2026.2-Grupo03/commit/530579c) | [Reunião 01 (27/09/2026)](https://youtu.be/jhhM3LJIpgA) |
| João Vitor Tavares de Sá Lima | Modelagem HTA/CTT individual registrada nas contribuições da Entrega 2 (**[VERIFICAR: não publicada nesta página]**) | — | — |

Fonte: elaborado pelos autores (2026).

## Histórico de versões

**Tabela 2 – Histórico de versões do artefato Análise de Tarefas**

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| --- | --- | --- | --- | --- |
| 17/09/2026 | 1.0 | Catalogação e mapeamento dos fluxos de trabalho do usuário no portal do Detran-DF para a Entrega 2. | Henrique Schneider | Gabriel Robson |
| 27/09/2026 | 1.1 | Correção da sequência e da identificação da tarefa 2 no fluxo de consulta de débitos. | Gabriel Robson | Henrique Schneider |
| 27/09/2026 | 1.2 | Inclusão da introdução fundamentando a relevância da Análise de Tarefas (HTA) e dos Golfos de Interação no contexto de IHC. | Henrique Schneider | Gabriel Robson |
| 15/10/2026 | 1.3 | Padronização da estrutura (tabela de contribuição, legendas e chamadas dos quadros), remoção de marcadores de citação residuais ("3") e do rótulo "(Exemplo)" no Fluxo 1, inclusão das seções 6 e 7 com marcadores de pendência e da seção de uso de IA | Henrique Schneider (solicitante), com apoio do Claude (IA generativa) | **[VERIFICAR: revisor]** |

Fonte: elaborado pelos autores (2026).

## 1. Introdução e Importância no Contexto de IHC

A **Análise de Tarefas** e o mapeamento dos fluxos de trabalho constituem uma das etapas centrais no processo de Engenharia de Usabilidade e Design de Interação. Segundo Barbosa e Silva (2010, cap. 6, seç. 6.4, p. 192), a análise de tarefas estuda o desempenho de um sistema de trabalho completo — composto pela pessoa (usuário) e pelo sistema computacional (Portal Detran-DF) —, investigando como as pessoas atingem seus objetivos e por que executam determinadas sequências de ações.

Diferente de uma simples descrição de funcionalidades, a análise funcional de tarefas baseia-se na decomposição de objetivos psicológicos dos usuários em subobjetivos, operações e planos de ação condicionais. No contexto do Portal Detran-DF, a aplicação de técnicas formais como a **Análise Hierárquica de Tarefas (HTA – *Hierarchical Task Analysis*)** é fundamental para:

1. **Mapeamento da Jornada Real:** Compreender os passos e tomadas de decisão necessários para concluir serviços essenciais (como consulta de débitos, pontuação da CNH e agendamentos).
2. **Diagnóstico dos Golfos de Norman:** Identificar falhas nos **Golfos de Execução** (quando o cidadão não descobre como agir ou quais dados preencher) e nos **Golfos de Avaliação** (quando o sistema falha em fornecer feedbacks diagnósticos e claros sobre o estado da solicitação).
3. **Prevenção e Correção de Falhas de Interação:** Determinar os pontos onde o custo e a probabilidade de erros são elevados, permitindo propor recomendações de redesign de IHC antes da implementação.

Deste modo, este artefato fornece a base analítica necessária para guiar o desenvolvimento de protótipos e orientar as avaliações de usabilidade nas etapas subsequentes do projeto.

## 2. Metodologia

Para a análise e estruturação dos fluxos de trabalho, foi utilizada a **Análise Hierárquica de Tarefas (HTA – *Hierarchical Task Analysis*)**, fundamentada na literatura de Interação Humano-Computador (Barbosa; Silva, 2010). A HTA permite decompor os objetivos principais do cidadão em subobjetivos, operações e planos de ação condicionais.

Além disso, para cada fluxo catalogado, avaliam-se:
* **Golfo de Execução:** A facilidade com que o cidadão entende os mecanismos de interação e descobre como executar as ações.
* **Golfo de Avaliação:** A clareza das respostas e feedbacks fornecidos pela interface após cada ação executada.


## 3. Catalogação dos Fluxos de Trabalho

### 3.1. Fluxo 1: Consulta de Débitos e Emissão de Guia de Pagamento de Veículo

* **Objetivo Geral:** Consultar a situação financeira de um veículo registrado e emitir o boleto/guia de recolhimento ou código PIX para quitação de débitos (IPVA, Licenciamento, Multas).
* **Perfil de Usuário Associado:** Condutores primários e proprietários de veículos cadastrados no DF.
* **Frequência de Uso:** Periódica (anual ou pontual mediante vencimento de taxas).

#### 3.1.1. Tabela de Decomposição HTA

O Quadro 1 decompõe o fluxo de consulta de débitos em objetivos, operações, problemas e recomendações.

**Quadro 1 – Tabela HTA do fluxo de consulta de débitos e emissão de guia**

| Objetivos e Subobjetivos | Operações | Problemas / Objeções | Recomendações de IHC |
| :--- | :--- | :--- | :--- |
| **0. Consultar débitos e emitir guia de pagamento** | Acessar o portal e gerar o documento financeiro | Erros recorrentes de integração com o portal Gov.br travam a autenticação inicial. | Tratar exceções da API de login e incluir opção de reconexão sem exigir reinício do navegador. |
| **1. Localizar o serviço de veículos** | 1.1. Acessar a *Home* do Detran-DF<br>1.2. Clicar no menu ou atalho "Veículos" / "Consulta de Débitos" | Rótulos de atalhos e menus às vezes variam entre subpáginas. | Padronizar os termos de navegação na barra superior fixa. |
| **2. Informar dados do veículo** | 2.1. Inserir a Placa do veículo<br>2.2. Inserir o número do Renavam<br>2.3. Submeter o formulário de consulta | Ausência de máscaras e dicas visuais sobre o formato exato da placa (ex.: padrão Mercosul). Mensagem genérica "Carro não encontrado" em caso de erro. | Inserir máscaras automáticas nos campos e destacar o campo exato com erro no preenchimento. |
| **3. Selecionar e conferir os débitos** | 3.1. Visualizar o extrato detalhado de débitos<br>3.2. Marcar os débitos que deseja quitar | Dificuldade em identificar a discriminação exata de juros ou vencimentos de cada taxa. | Exibir o detalhamento de valores de forma expansível com estética minimalista. |
| **4. Gerar o documento de pagamento** | 4.1. Selecionar o formato (PIX ou Boleto PDF)<br>4.2. Confirmar a geração<br>4.3. Baixar PDF ou copiar código PIX | Botão de emissão não especifica claramente o tipo do documento antes do clique. | Alterar o rótulo para "Emitir Boleto (PDF)" e fornecer modal de confirmação prévia com *toast* de sucesso. |

Fonte: elaborado pelos autores (2026).

#### 3.1.2. Plano de Ação (Diagrama Lógico HTA)

**[VERIFICAR: diagrama HTA do Fluxo 1, com legenda e fonte (item 11 da Entrega 2: "O HTA com diagrama, legenda e representação em tabela")]**

* **Plano 0:** Fazer 1 para localizar o serviço; em seguida, fazer 2 para informar os dados do veículo e enviar a consulta. Se os dados forem rejeitados, corrigir os campos e repetir 2. Após a exibição dos débitos, fazer 3 para conferir e selecionar os valores desejados; por fim, fazer 4 para obter a guia ou o código PIX.
* **Plano 2:** Preencher Placa (2.1) e Renavam (2.2); submeter (2.3). Se houver erro de digitação, corrigir o campo sinalizado e reenviar.
* **Plano 4:** Selecionar PIX ou Boleto (4.1); confirmar (4.2); se optar por PIX, utilizar botão "Copiar Código"; se Boleto, efetuar download do PDF (4.3).


### 3.2. Fluxo 2: Solicitação de Segunda Via da Carteira Nacional de Habilitação (CNH)

* **Objetivo Geral:** Solicitar a emissão do documento impresso/digital da 2ª via da CNH por motivo de perda, roubo ou danificação.
* **Perfil de Usuário Associado:** Condutores habilitados no DF.
* **Frequência de Uso:** Ocasional / Eventual.

#### 3.2.1. Tabela de Decomposição HTA

O Quadro 2 decompõe o fluxo de solicitação da 2ª via da CNH.

**Quadro 2 – Tabela HTA do fluxo de solicitação de 2ª via da CNH**

| Objetivos e Subobjetivos | Operações | Problemas / Objeções | Recomendações de IHC |
| :--- | :--- | :--- | :--- |
| **0. Solicitar 2ª Via da CNH** | Iniciar o pedido formal do documento de habilitação | Avanço direto para telas de cobrança sem resumo prévio dos dados do condutor. | Adicionar etapa de revisão de dados antes da emissão da taxa. |
| **1. Autenticar no sistema** | 1.1. Realizar login integrado via Gov.br | Sessão expira rapidamente gerando mensagens de erro genéricas na transição de telas. | Exibir aviso prévio de expiração de sessão com opção de extensão do tempo. |
| **2. Acessar o serviço de Habilitação** | 2.1. Navegar até o menu "Habilitação"<br>2.2. Selecionar "Solicitar 2ª Via da CNH" | Inexistência de tutoriais ou requisitos prévios visíveis na tela inicial do serviço. | Disponibilizar seção contextual de "Ajuda / Documentos Necessários" antes de iniciar. |
| **3. Confirmar a solicitação e dados** | 3.1. Verificar endereço de entrega/posto de coleta<br>3.2. Confirmar motivo do pedido | Ausência de mecanismos de "Cancelar" ou "Desfazer" (*Undo*) na etapa final da solicitação. | Incluir botões visíveis de "Cancelar" e "Voltar" em todas as fases da solicitação. |
| **4. Emitir taxa de serviço** | 4.1. Gerar a Guia de Recolhimento da taxa de 2ª via<br>4.2. Efetuar o download do documento de arrecadação | Falta de feedback que confirme o registro com sucesso da solicitação no banco de dados. | Apresentar tela final com número de protocolo, resumo do pedido e botão para emissão do boleto. |

Fonte: elaborado pelos autores (2026).

#### 3.2.2. Plano de Ação (Diagrama Lógico HTA)

**[VERIFICAR: diagrama HTA do Fluxo 2, com legenda e fonte]**

* **Plano 0:** Fazer 1; em seguida 2; realizar 3; se os dados estiverem corretos, prosseguir para 4; caso contrário, cancelar e atualizar cadastro.
* **Plano 3:** Conferir endereço e motivo (3.1 e 3.2). Se correto, avançar; se incorreto, utilizar botão "Cancelar" para evitar cobrança indevida.


## 4. Análise Consolidada dos Golfos de Interação

O Quadro 3 sintetiza a avaliação dos golfos de execução e de avaliação nos dois fluxos.

**Quadro 3 – Síntese da avaliação dos golfos de interação nos fluxos catalogados**

| Fluxo Analisado | Avaliação do Golfo de Execução | Avaliação do Golfo de Avaliação |
| :--- | :--- | :--- |
| **Consulta e Emissão de Débitos** | **Prejudicado:** A ausência de instruções claras sobre os formatos de entrada exigidos (Placa e Renavam) eleva a chance de erros de digitação durante a formulação da intenção pelo usuário. | **Prejudicado:** Mensagens de erro vagas (ex.: "Carro não encontrado") dificultam que o usuário avalie a razão da falha e entenda qual dado precisa ser corrigido. |
| **Solicitação de 2ª Via da CNH** | **Regular:** A localização do serviço no menu é direta, porém a falta de botões para cancelar ou desfazer torna a execução insegura perante o receio de cobranças indevidas. | **Prejudicado:** O avanço direto para as telas de pagamento sem confirmação prévia gera incerteza sobre a efetivação e o registro do protocolo de atendimento. |

Fonte: elaborado pelos autores (2026).


## 5. Conclusão

A catalogação e decomposição HTA dos fluxos de trabalho permitiu mapear os gargalos operacionais enfrentados pelos cidadãos no portal do Detran-DF. As principais oportunidades de melhoria concentram-se no fortalecimento da prevenção de erros na entrada de dados, no fornecimento de feedbacks diagnósticos mais claros e no estabelecimento de telas intermédias de confirmação com opções de cancelamento e suporte contextual.

## 6. Modelagem por integrante em uma segunda técnica

O item 11 da Entrega 2 pede "uma atividade para cada integrante do grupos que deve estar modelizado em ao menos duas técnicas para especificar as tarefas" (HTA com diagrama, legenda e tabela; GOMS ou CTT) (SALES, 2026, p. 11). A página de contribuições da Entrega 2 registra modelagens HTA/CTT individuais que não estão publicadas nesta página. O Quadro 4 lista a situação de cada integrante.

**Quadro 4 – Atividade modelada por integrante**

| Integrante | Atividade registrada | HTA (diagrama e tabela) | Segunda técnica (CTT ou GOMS) |
| --- | --- | --- | --- |
| Alexandre Vilar Valadares Fonsêca | "Emissão de Guia de Débitos do Veículo" (contribuições da Entrega 2) | **[VERIFICAR]** | **[VERIFICAR]** |
| Eduardo Ribeiro Gomes da Silva | **[VERIFICAR]** | **[VERIFICAR]** | **[VERIFICAR]** |
| Gabriel Robson | HTA e CTT dos fluxos de trabalho (contribuições da Entrega 2) | Quadros 1 e 2 (tabelas); **[VERIFICAR: diagramas]** | **[VERIFICAR]** |
| Henrique Schneider Fernandes da Rosa | "Consulta de Prontuário e Pontuação da CNH" (contribuições da Entrega 2) | **[VERIFICAR]** | **[VERIFICAR]** |
| João Vitor Tavares de Sá Lima | "Localização e Consulta de CFCs Credenciados" (contribuições da Entrega 2) | **[VERIFICAR]** | **[VERIFICAR]** |

Fonte: elaborado pelos autores (2026), com base na [Matriz de Contribuição da Entrega 2](../contribuicao/contrib.md).

## 7. Fundamentação (itens de conteúdo da disciplina)

Os itens 10 e 11 da Entrega 2 pedem referência bibliográfica e foto do texto que explica a análise de tarefas e as técnicas usadas, com o autor de cada item (SALES, 2026, p. 11).

**Autor do item:** **[VERIFICAR: autor do item]**

**[VERIFICAR: foto do trecho de Barbosa e Silva (2010, cap. 6, seç. 6.4, p. 192) citado na introdução]**

## Referências

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. *NBR 6023*: informação e documentação: referências: elaboração. Rio de Janeiro: ABNT, 2018.

BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. Rio de Janeiro: Elsevier, 2010.

SALES, André Barros de. *Plano de Ensino: Interação Humano Computador (FGA0173), 02/2026, Turma 01, v1*. Brasília: Universidade de Brasília, 2026.

## Agradecimentos e uso de IA generativa

**Uso de IA generativa nesta página.** Em 15/10/2026, o Claude (Anthropic) foi utilizado, a pedido de Henrique Schneider, para: reorganizar a página no modelo de artefato da disciplina (tabela de contribuição, histórico, legendas e chamadas dos quadros); remover marcadores numéricos residuais ("3") deixados após frases da introdução, sem mudar o texto; remover o rótulo "(Exemplo)" do Fluxo 1, ausente no relatório entregue; e incluir as seções 6 e 7 com marcadores **[VERIFICAR]** para os diagramas, a segunda técnica de modelagem e os itens de conteúdo. As tabelas HTA, os planos e a análise dos golfos não foram alterados. A ferramenta não é autora do artefato e seu uso não exime os autores da responsabilidade sobre o conteúdo (SALES, 2026, p. 3).
