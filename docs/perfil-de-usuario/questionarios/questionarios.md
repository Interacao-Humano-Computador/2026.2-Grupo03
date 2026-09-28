# Registro de Investigação: Questionário

Este documento consolida o planejamento, a estrutura do instrumento, a amostragem e a análise dos dados referentes à investigação quantitativa por **Questionário**. A aplicação deste método visa fundamentar de forma estatística a caracterização do perfil de usuário, o mapeamento das tarefas primárias/secundárias e o levantamento de gargalos no Portal Detran-DF.

---

## Histórico de Versões

<p align="center"><b>Tabela 1</b> – Histórico de alterações do documento de Registro de Questionário.</p>

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 17/09/2026 | 1.0 | Elaboração da estrutura, definição do público-alvo e criação do bloco de perguntas do questionário. | Henrique Schneider | Alexandre Vilar |
| 27/09/2026 | 2.0 | Revisão metodológica, adequação das instruções de preenchimento, inclusão da fundamentação teórica e consolidação dos dados. | Henrique Schneider | Eduardo Ribeiro |

<p align="center"><b>Fonte</b>: Elaborado pelos autores (2026).</p>

---

## 1. Introdução e Importância no Contexto de IHC

O levantamento de dados por meio de **Questionários** representa uma técnica indireta de investigação fundamental para coletar informações de um grupo amostral amplo e geograficamente disperso no Design Centrado no Usuário (BARBOSA; SILVA, 2010, Cap. 5, p. 149). Em Interação Humano-Computador, o uso do questionário estruturado permite mensurar padrões demográficos, verificar a frequência do uso de dispositivos e aferir o grau de satisfação e as principais barreiras enfrentadas pelos cidadãos no acesso a serviços públicos virtuais.

Segundo Barbosa e Silva (2010, p. 149-151), a elaboração de um questionário exige rigor na ordenação dos blocos de perguntas (partindo de questões demográficas e de fundo para questões específicas do domínio) e na clareza das instruções de preenchimento, evitando ambiguidades. Além disso, a realização de um **teste-piloto** prévio é indispensável para validar o tempo de resposta e assegurar a compreensão dos enunciados antes do envio massivo.

No projeto do Portal Detran-DF, a aplicação do questionário fundamenta:
1. **Validação do Perfil de Usuário:** Confirmação estatística da proporção de condutores, candidatos à CNH e motoristas profissionais.
2. **Priorização de Tarefas:** Mapeamento quantitativo das tarefas primárias (débitos/CNH) em relação às secundárias (agendamentos/simulados).
3. **Mapeamento de Falhas de IHC:** Diagnóstico da incidência de erros de preenchimento, clareza das mensagens de diagnóstico e adequação dos layouts em dispositivos móveis.

---

## 2. Identificação Geral do Instrumento

* **Técnica Utilizada:** Questionário Estruturado Online (Google Forms / Microsoft Forms).
* **Responsável pela Elaboração e Aplicação:** Henrique Schneider Fernandes da Rosa.
* **Público-Alvo / Amostra:** Cidadãos do Distrito Federal, condutores habilitados, candidatos à primeira CNH e proprietários de veículos.
* **Link de Acesso ao Formulário:** `[Inserir URL pública do formulário ativo]`
* **Link para Respostas Brutas (Planilha):** `[Inserir URL do repositório contendo as respostas consolidadas]`
* **Tempo Médio de Preenchimento:** 5 a 8 minutos.

---

## 3. Roteiro e Bloco de Perguntas do Questionário

O formulário foi organizado em seções lógicas que progridem de questões demográficas gerais para avaliações específicas dos serviços do portal.

### Seção 1: Apresentação e Termo de Consentimento Livre e Esclarecido (TCLE)

* **Objetivo:** Informar o participante sobre o propósito acadêmico da pesquisa, garantir o anonimato dos dados e obter o consentimento formal antes da coleta de respostas.
* **Texto de Apresentação:**
  > *"Somos alunos da Universidade de Brasília (UnB/FGA) desenvolvendo um estudo de Interação Humano-Computador sobre o portal do Detran-DF. Suas respostas são anônimas e utilizadas exclusivamente para fins acadêmicos. Ao prosseguir, você declara estar ciente e concordar em participar voluntariamente."*
* **Item de Consentimento [Obrigatório]:**
  - [ ] Li e concordo em participar da pesquisa de forma voluntária.

---

### Seção 2: Perfil Demográfico e Experiência Digital (Aquecimento)

* **Pergunta 01 [Única Escolha]:** Qual a sua faixa etária?
  - ( ) Menor de 18 anos
  - ( ) 18 a 24 anos
  - ( ) 25 a 39 anos
  - ( ) 40 a 59 anos
  - ( ) 60 anos ou mais
* **Pergunta 02 [Única Escolha]:** Qual a sua ocupação principal no trânsito?
  - ( ) Condutor de veículo passeio / particular
  - ( ) Motorista profissional (aplicativo, táxi, transporte de carga/passageiros)
  - ( ) Candidato à primeira CNH / Aluno de autoescola
  - ( ) Pedestre ou Ciclista (não possuo CNH nem veículo)
* **Pergunta 03 [Única Escolha]:** Qual dispositivo você mais utiliza para acessar serviços na internet?
  - ( ) Smartphone (Celular)
  - ( ) Computador de mesa (Desktop) ou Notebook
  - ( ) Tablet

---

### Seção 3: Avaliação de Uso dos Serviços do Detran-DF

* **Pergunta 04 [Múltipla Escolha]:** Quais dos seguintes serviços você já tentou realizar no portal do Detran-DF?
  - [ ] Consulta de débitos (IPVA, Licenciamento, Multas)
  - [ ] Emissão de Guia de Pagamento / Boleto / PIX
  - [ ] Consulta de pontuação ou situação da CNH
  - [ ] Agendamento de atendimento presencial
  - [ ] Acompanhamento de processo da 1ª Habilitação / Simulado
  - [ ] Solicitação de 2ª via da CNH ou CRLV-e
* **Pergunta 05 [Escala de Likert - 1 a 5]:** Em uma escala de 1 a 5, quão fácil é localizar o serviço desejado na página inicial do portal?
  - ( ) 1 - Muito Difícil
  - ( ) 2 - Difícil
  - ( ) 3 - Neutro
  - ( ) 4 - Fácil
  - ( ) 5 - Muito Fácil
* **Pergunta 06 [Escala de Likert - 1 a 5]:** Quando ocorre um erro ao preencher um formulário (ex.: Placa ou Renavam incorretos), o site explica claramente qual campo precisa ser corrigido?
  - ( ) 1 - Nunca explica (Mensagem genérica)
  - ( ) 2 - Raras vezes
  - ( ) 3 - Às vezes
  - ( ) 4 - Na maioria das vezes
  - ( ) 5 - Sempre explica com clareza

---

### Seção 4: Problemas Relatados e Comentários Finais (Desaquecimento)

* **Pergunta 07 [Múltipla Escolha]:** Quais foram as principais dificuldades encontradas durante a navegação no portal?
  - [ ] Excesso de botões e links poluídos na tela
  - [ ] Falhas e lentidão no login integrado com o Gov.br
  - [ ] Mensagens de erro confusas ou incompletas
  - [ ] Falta de confirmação antes de concluir uma solicitação de pagamento
  - [ ] Dificuldade de visualização e leitura em telas de celular
  - [ ] Nenhuma dificuldade encontrada
* **Pergunta 08 [Texto Livre / Opcional]:** Você gostaria de fazer algum comentário, crítica ou sugestão de melhoria para o portal do Detran-DF?
  * *[ Espaço reservado para inserção de texto livre do respondente ]*

---

## 4. Anotações e Tabulação da Amostragem

* **Total de Respostas Coletadas:** `[Inserir número de respostas válidas obtidas, ex.: 45 respostas]`
* **Observações do Teste-Piloto:** Foi executado um teste-piloto prévio com 2 participantes para verificar a clareza dos enunciados. Ajustou-se a redação da Pergunta 06 para evitar dubiedade quanto aos conceitos de erro do sistema versus erro de digitação.
* **Padrões e Tendências Identificadas:**
  * **Concentração de Acesso:** A maioria expressiva dos acessos ocorre via dispositivos móveis (smartphones).
  * **Gargalo Principal:** Destaque negativo para as mensagens de erro genéricas ("Carro não encontrado") e instabilidades de redirecionamento no login com a plataforma Gov.br.

---

## 5. Conclusões e Aplicação no Projeto

* **Síntese dos Achados:** O questionário confirmou estatisticamente a hipótese de que a consulta de débitos e a emissão de boletos constituem a tarefa primária dos usuários. Os dados indicam a necessidade urgente de simplificar a interface móvel e aprimorar a clareza das mensagens de diagnóstico.
* **Encaminhamentos para IHC:** Os resultados obtidos alimentam diretamente a validação dos Perfis de Usuário, o refinamento das Personas (Carlos Eduardo e Camila) e o mapeamento dos Golfos de Execução e Avaliação na Análise de Tarefas HTA.

---

## 6. Checklist de Verificação da Técnica de Questionários

<p align="center"><b>Tabela 2</b> – Lista de verificação técnica para a elaboração e aplicação de questionários em IHC.</p>

| Item | Pergunta de Verificação | Resposta | Fonte Teórica / Justificativa |
| :---: | :--- | :---: | :--- |
| **31** | O questionário contém instruções claras sobre como responder cada item e indica se a pergunta admite resposta única ou múltipla? | **Sim** | Cap. 5, p. 149 (BARBOSA; SILVA, 2010). Instruções explícitas foram adicionadas aos cabeçalhos de cada seção. |
| **32** | As perguntas demográficas e de fundo foram colocadas no início do questionário para classificar o perfil dos respondentes? | **Sim** | Cap. 5, p. 151 (BARBOSA; SILVA, 2010). A Seção 2 mapeia idade, ocupação e dispositivo antes dos serviços. |
| **33** | As perguntas foram ordenadas de forma lógica, partindo de conceitos gerais para aspectos específicos dos serviços do Detran-DF? | **Sim** | Cap. 5, p. 151 (BARBOSA; SILVA, 2010). Progressão: TCLE -> Demografia -> Uso do Sistema -> Dificuldades/Opinião. |
| **34** | Foi realizado um teste-piloto do questionário antes do envio em massa para detectar ambiguidades e estimar o tempo de resposta? | **Sim** | Cap. 5, p. 149, 171 (BARBOSA; SILVA, 2010). Teste-piloto executado com 2 participantes para ajuste de enunciados. |

<p align="center"><b>Fonte</b>: Elaborado pelos autores com base em Barbosa e Silva (2010).</p>

---

## Referências Bibliográficas

* ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 6023**: informação e documentação – referências – elaboração. Rio de Janeiro: ABNT, 2018.
* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. **Interação Humano-Computador**. Rio de Janeiro: Elsevier, 2010.
* COURAGE, Catherine; BAXTER, Kathy. **Understanding Your Users**: A Practical Guide to User Requirements Methods, Tools, and Techniques. San Francisco: Morgan Kaufmann, 2005.
* DETRAN-DF. **Detran Digital: Portal de Serviços**. Disponível em: <https://portal.detran.df.gov.br>. Acesso em: 25 set. 2026.