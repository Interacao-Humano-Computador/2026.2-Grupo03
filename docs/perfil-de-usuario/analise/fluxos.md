# Análise de Tarefas e Fluxos de Trabalho do Usuário

## Histórico de Versões

Quadro 1 – Histórico de Versões do Documento de Fluxos de Trabalho.

| Data | Versão | Descrição | Autor | Revisor |
| :---: | :---: | :--- | :--- | :--- |
| 17/09/2026 | 1.0 | Catalogação e mapeamento dos fluxos de trabalho do usuário no portal do Detran-DF para a Entrega 2. | Henrique Schneider | Gabriel Robson |

Fonte: Elaborado pelos autores (2026).

---

## 1. Introdução

Este documento apresenta a catalogação e o mapeamento detalhado dos fluxos de trabalho executados pelos cidadãos no portal do Detran-DF. O mapeamento do fluxo de tarefas permite compreender a jornada do usuário, identificar as sequências de ações necessárias para atingir um objetivo e mapear os gargalos operacionais que afetam os Golfos de Execução e de Avaliação durante a interação.

---

## 2. Metodologia

Para a análise e estruturação dos fluxos de trabalho, foi utilizada a **Análise Hierárquica de Tarefas (HTA – *Hierarchical Task Analysis*)**, fundamentada na literatura de Interação Humano-Computador (BARBOSA; SILVA, 2010). A HTA permite decompor os objetivos principais do cidadão em subobjetivos, operações e planos de ação condicionais.

Além disso, para cada fluxo catalogado, avaliam-se:
* **Golfo de Execução:** A facilidade com que o cidadão entende os mecanismos de interação e descobre como executar as ações.
* **Golfo de Avaliação:** A clareza das respostas e feedbacks fornecidos pela interface após cada ação executada.

---

## 3. Catalogação dos Fluxos de Trabalho

### 3.1. Fluxo 1: (Exemplo) Consulta de Débitos e Emissão de Guia de Pagamento de Veículo

* **Objetivo Geral:** Consultar a situação financeira de um veículo registrado e emitir o boleto/guia de recolhimento ou código PIX para quitação de débitos (IPVA, Licenciamento, Multas).
* **Perfil de Usuário Associado:** Condutores primários e proprietários de veículos cadastrados no DF.
* **Frequência de Uso:** Periódica (anual ou pontual mediante vencimento de taxas).

#### 3.1.1. Tabela de Decomposição HTA

Quadro 2 – Tabela HTA do Fluxo de Consulta de Débitos e Emissão de Guia.

| Objetivos e Subobjetivos | Operações | Problemas / Objeções | Recomendações de IHC |
| :--- | :--- | :--- | :--- |
| **0. Consultar débitos e emitir guia de pagamento** | Acessar o portal e gerar o documento financeiro | Erros recorrentes de integração com o portal Gov.br travam a autenticação inicial. | Tratar exceções da API de login e incluir opção de reconexão sem exigir reinício do navegador. |
| **1. Localizar o serviço de veículos** | 1.1. Acessar a *Home* do Detran-DF<br>1.2. Clicar no menu ou atalho "Veículos" / "Consulta de Débitos" | Rótulos de atalhos e menus às vezes variam entre subpáginas. | Padronizar os termos de navegação na barra superior fixa. |
| **2. Autenticar ou informar dados do veículo** | 2.1. Inserir a Placa do veículo<br>2.2. Inserir o número do Renavam<br>2.3. Submeter o formulário de consulta | Ausência de máscaras e dicas visuais sobre o formato exato da placa (ex.: padrão Mercosul). Mensagem genérica "Carro não encontrado" em caso de erro. | Inserir máscaras automáticas nos campos e destacar o campo exato com erro no preenchimento. |
| **3. Selecionar e conferir os débitos** | 3.1. Visualizar o extrato detalhado de débitos<br>3.2. Marcar os débitos que deseja quitar | Dificuldade em identificar a discriminação exata de juros ou vencimentos de cada taxa. | Exibir o detalhamento de valores de forma expansível com estética minimalista. |
| **4. Gerar o documento de pagamento** | 4.1. Selecionar o formato (PIX ou Boleto PDF)<br>4.2. Confirmar a geração<br>4.3. Baixar PDF ou copiar código PIX | Botão de emissão não especifica claramente o tipo do documento antes do clique. | Alterar o rótulo para "Emitir Boleto (PDF)" e fornecer modal de confirmação prévia com *toast* de sucesso. |

Fonte: Elaborado pelos autores (2026).

#### 3.1.2. Plano de Ação (Diagrama Lógico HTA)

* **Plano 0:** Fazer 1; se não estiver autenticado, fazer 2; em seguida, fazer 3; por fim, fazer 4.
* **Plano 2:** Preencher Placa (2.1) e Renavam (2.2); submeter (2.3). Se houver erro de digitação, corrigir o campo sinalizado e reenviar.
* **Plano 4:** Selecionar PIX ou Boleto (4.1); confirmar (4.2); se optar por PIX, utilizar botão "Copiar Código"; se Boleto, efetuar download do PDF (4.3).

---

### 3.2. Fluxo 2: Solicitação de Segunda Via da Carteira Nacional de Habilitação (CNH)

* **Objetivo Geral:** Solicitar a emissão do documento impresso/digital da 2ª via da CNH por motivo de perda, roubo ou danificação.
* **Perfil de Usuário Associado:** Condutores habilitados no DF.
* **Frequência de Uso:** Ocasional / Eventual.

#### 3.2.1. Tabela de Decomposição HTA

Quadro 3 – Tabela HTA do Fluxo de Solicitação de 2ª Via da CNH.

| Objetivos e Subobjetivos | Operações | Problemas / Objeções | Recomendações de IHC |
| :--- | :--- | :--- | :--- |
| **0. Solicitar 2ª Via da CNH** | Iniciar o pedido formal do documento de habilitação | Avanço direto para telas de cobrança sem resumo prévio dos dados do condutor. | Adicionar etapa de revisão de dados antes da emissão da taxa. |
| **1. Autenticar no sistema** | 1.1. Realizar login integrado via Gov.br | Sessão expira rapidamente gerando mensagens de erro genéricas na transição de telas. | Exibir aviso prévio de expiração de sessão com opção de extensão do tempo. |
| **2. Acessar o serviço de Habilitação** | 2.1. Navegar até o menu "Habilitação"<br>2.2. Selecionar "Solicitar 2ª Via da CNH" | Inexistência de tutoriais ou requisitos prévios visíveis na tela inicial do serviço. | Disponibilizar seção contextual de "Ajuda / Documentos Necessários" antes de iniciar. |
| **3. Confirmar a solicitação e dados** | 3.1. Verificar endereço de entrega/posto de coleta<br>3.2. Confirmar motivo do pedido | Ausência de mecanismos de "Cancelar" ou "Desfazer" (*Undo*) na etapa final da solicitação. | Incluir botões visíveis de "Cancelar" e "Voltar" em todas as fases da solicitação. |
| **4. Emitir taxa de serviço** | 4.1. Gerar a Guia de Recolhimento da taxa de 2ª via<br>4.2. Efetuar o download do documento de arrecadação | Falta de feedback que confirme o registro com sucesso da solicitação no banco de dados. | Apresentar tela final com número de protocolo, resumo do pedido e botão para emissão do boleto. |

Fonte: Elaborado pelos autores (2026).

#### 3.2.2. Plano de Ação (Diagrama Lógico HTA)

* **Plano 0:** Fazer 1; em seguida 2; realizar 3; se os dados estiverem corretos, prosseguir para 4; caso contrário, cancelar e atualizar cadastro.
* **Plano 3:** Conferir endereço e motivo (3.1 e 3.2). Se correto, avançar; se incorreto, utilizar botão "Cancelar" para evitar cobrança indevida.

---

## 4. Análise Consolidada dos Golfos de Interação

Quadro 4 – Síntese da Avaliação dos Golfos de Interação nos Fluxos Catalogados.

| Fluxo Analisado | Avaliação do Golfo de Execução | Avaliação do Golfo de Avaliação |
| :--- | :--- | :--- |
| **Consulta e Emissão de Débitos** | **Prejudicado:** A ausência de instruções claras sobre os formatos de entrada exigidos (Placa e Renavam) eleva a chance de erros de digitação durante a formulação da intenção pelo usuário. | **Prejudicado:** Mensagens de erro vagas (ex.: "Carro não encontrado") dificultam que o usuário avalie a razão da falha e entenda qual dado precisa ser corrigido. |
| **Solicitação de 2ª Via da CNH** | **Regular:** A localização do serviço no menu é direta, porém a falta de botões para cancelar ou desfazer torna a execução insegura perante o receio de cobranças indevidas. | **Prejudicado:** O avanço direto para as telas de pagamento sem confirmação prévia gera incerteza sobre a efetivação e o registro do protocolo de atendimento. |

Fonte: Elaborado pelos autores (2026).

---

## 5. Conclusão

A catalogação e decomposição HTA dos fluxos de trabalho permitiu mapear os gargalos operacionais enfrentados pelos cidadãos no portal do Detran-DF. As principais oportunidades de melhoria concentram-se no fortalecimento da prevenção de erros na entrada de dados, no fornecimento de feedbacks diagnósticos mais claros e no estabelecimento de telas intermédias de confirmação com opções de cancelamento e suporte contextual.

---

## Referências

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 6023: informação e documentação: referências: elaboração**. Rio de Janeiro: ABNT, 2018.

BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. **Interação Humano-Computador**. Rio de Janeiro: Elsevier, 2010.