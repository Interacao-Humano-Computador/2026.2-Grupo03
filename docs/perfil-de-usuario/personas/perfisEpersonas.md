# Registro de Perfis de Usuário e Personas

Este documento apresenta a caracterização dos **Perfis de Usuário** e do elenco de **Personas** desenvolvidos para fundamentar o design de Interação Humano-Computador (IHC) do portal do Detran-DF. A definição desses artefatos assegura que as decisões de projeto atendam aos objetivos reais de cidadãos, candidatos à habilitação e servidores do órgão.

---

## Histórico de Versões

<p align="center"><b>Tabela 1</b> – Histórico de Versões do Documento de Perfis e Personas.</p>

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 17/09/2026 | 1.0 | Estruturação e catalogação inicial dos perfis de usuário e elenco de personas. | Alexandre Vilar | Eduardo Ribeiro |
| 27/09/2026 | 2.0 | Atualização e consolidação com os 3 perfis/personas do estudo (Condutor, Candidato e Agente). | Henrique Schneider | Alexandre Vilar |
| 27/09/2026 | 2.1 | Releitura e refinamento do documento, padronização ABNT de citações e adição das referências de comprovação visual do livro de IHC. | Henrique Schneider | Alexandre Vilar, Gabriel Robson |
| 06/10/2026 | 2.2 | Inclusão dos cenários em seção própria. | Alexandre Vilar | A preencher |

<p align="center"><b>Fonte</b>: Elaborado pelos autores (2026).</p>

---

## 1. Introdução e Escopo

O objetivo deste documento é identificar as categorias de usuários do portal do Detran-DF, descrever suas necessidades e vincular uma persona representativa a cada categoria. O perfil caracteriza quem utiliza o serviço e com qual finalidade; a persona apresenta um personagem fictício (*proto-persona*) que torna concretos o contexto, os objetivos, as atitudes e as dificuldades de um integrante desse perfil.

O recorte contempla o portal público do Detran-DF e, conceitualmente, sistemas institucionais restritos associados às atividades de agentes do órgão.

## Importância no Contexto de IHC

A caracterização do **Perfil do Usuário** e a construção de **Personas** constituem pilares essenciais no Design Centrado no Usuário e no desenvolvimento de sistemas interativos. Na disciplina de Interação Humano-Computador (IHC), compreender quem são os usuários reais e quais são suas reais necessidades é fundamental para orientar todas as etapas do projeto de forma fundamentada e empática.

A adoção desses artefatos traz os seguintes benefícios para o projeto:

* **Evita a concepção guiada por suposições:** Impede que os desenvolvedores e designers projetem a interface baseando-se em suas próprias preferências e opiniões pessoais, assegurando que o sistema atenda aos reais objetivos e limitações do público-alvo.
* **Promove uma atitude centrada no usuário:** Mantém o foco na qualidade de uso e nas características dos usuários (grau de escolaridade, experiência tecnológica, autonomia e contexto de uso) ao longo do ciclo de vida iterativo do desenvolvimento.
* **Orienta as metas de design e requisitos:** Auxilia na identificação, priorização e estruturação das tarefas primárias e secundárias que o produto deve apoiar.
* **Direciona o recrutamento e as avaliações de IHC:** Fornece critérios objetivos para selecionar participantes representativos nas sessões de investigação, testes de usabilidade e avaliações de qualidade de uso.

Segundo a literatura de IHC, projetar para o usuário significa garantir que o sistema se adapte ao modo como as pessoas trabalham e interagem, aumentando a comunicabilidade, reduzindo erros de uso e maximizando a usabilidade e a acessibilidade da solução.

> ### Contextualização e Metodologia de Definição dos Perfis e Personas
> 
> A estrutura utiliza os critérios normativos sobre demografia, escolaridade, conhecimento do domínio, objetivos, tarefas, frequência de acesso, experiência tecnológica, grau de autonomia e ambiente físico e tecnológico de acesso. 
> 
> As informações pessoais e demográficas não definem sozinhas o perfil de usuário: atuam como suporte para contextualizar a persona vinculada. Os personagens, falas (*quotes*) e frequências de uso apresentados são hipóteses de trabalho. Não foram realizadas entrevistas, questionários ou observações com usuários nesta etapa. As personas enquadram-se como **proto-personas**, e os obstáculos mapeados representam hipóteses a serem validadas empiricamente. Os fluxos descrevem ações esperadas segundo a perspectiva do Design Centrado no Usuário, sem reproduzir telas ou estabelecer requisitos administrativos. O portal oficial foi consultado para contextualizar os serviços oferecidos, e a referência institucional sobre o sistema de infrações complementa o recorte do perfil profissional.

---

## 2. Fundamentação Teórica dos Atributos do Perfil de Usuário

Segundo a literatura de Interação Humano-Computador, a caracterização do perfil de usuário exige a identificação da sua relação com a tecnologia, do seu conhecimento do domínio e das tarefas que precisará realizar.

> *"Em geral, um perfil de usuário é caracterizado por dados sobre o próprio usuário, dados sobre sua relação com tecnologia, sobre seu conhecimento do domínio do produto e das tarefas que deverá realizar utilizando o produto (Hackos e Redish, 1998; Courage e Baxter, 2005)."*  
> — **BARBOSA e SILVA (2010, Cap. 5, p. 136 / Cap. 6, p. 175)**.

<p align="center"><b>Tabela 2</b> – Mapeamento dos Atributos do Perfil do Usuário segundo a Literatura de IHC.</p>

| Categoria do Atributo | Descrição no Projeto | Citação / Fonte Teórica | Comprovação Visual (Print do Livro) |
| :--- | :--- | :--- | :--- |
| **Dados Demográficos** | Faixa etária, sexo, ocupação e status socioeconômico dos cidadãos e condutores do DF. | BARBOSA; SILVA, 2010, Cap. 5, p. 136 / Cap. 6, p. 175. | [Print p. 175 - Seção 6.1](assets/p175_6.1.png) |
| **Escolaridade e Alfabetismo** | Grau de instrução, interpretação de regras de trânsito e fluência em textos complexos. | BARBOSA; SILVA, 2010, Cap. 6, p. 175. | [Print p. 175 - Seção 6.1](assets/p175_6.1.png) |
| **Conhecimento do Domínio** | Propriedade sobre legislação de trânsito, pontuação da CNH e débitos veiculares. | BARBOSA; SILVA, 2010, Cap. 5, p. 135. | [Print p. 136 - Conhecimento do Domínio](assets/p135_5.2.png) |
| **Experiência Tecnológica** | Frequência de uso de plataformas digitais e familiaridade com dispositivos móveis/desktops. | BARBOSA; SILVA, 2010, Cap. 6, p. 175. | [Print p. 175 - Seção 6.1](assets/p175_6.1.png) |
| **Atitudes e Autonomia** | Perfil de aceitação tecnológica (tecnófilos vs. tecnófobos) e uso autônomo vs. assistido. | BARBOSA; SILVA, 2010, Cap. 6, p. 175. | [Print p. 175 - Seção 6.1](assets/p175_6.1.png) |
| **Perfil de Tarefas** | Distinção entre tarefas primárias (débitos/CNH) e secundárias (agendamento/simulado). | BARBOSA; SILVA, 2010, Cap. 6, p. 175. | [Print p. 175 - Seção 6.1](assets/p175_6.1.png) |

<p align="center"><b>Fonte</b>: Elaborado pelos autores com base em Barbosa e Silva (2010).</p>

---

## 3. Caracterização e Classificação das Tarefas do Usuário

A caracterização das tarefas agrupa as atividades de interação conforme sua relevância e frequência de execução em **Tarefas Primárias** e **Tarefas Secundárias**.

> *"Tarefas: quais são as tarefas do usuário que precisam ser apoiadas? Quais dessas são consideradas primárias, e quais são secundárias? Há quanto tempo realiza essas tarefas? São tarefas frequentes ou infrequentes?..."*  
> — **BARBOSA e SILVA (2010, Cap. 5, p. 136 / Cap. 6, p. 175)**.

### 3.1. Classificação das Tarefas no Portal Detran-DF

1. **Tarefas Primárias (Foco Principal do Usuário):**
   * **Consulta de Habilitação e Pontuação da CNH:** Acompanhamento situacional do condutor e verificação de infrações registradas no prontuário.
   * **Emissão de Débitos e Licenciamento Veicular (IPVA/CRLV-e):** Obtenção de guias de pagamento e emissão do documento digital de circulação.
   * **Registro de Auto de Infração / Fiscalização (Servidor/Agente):** Inserção e validação de autos de infração no sistema institucional restrito.

2. **Tarefas Secundárias (Atividades de Apoio e Preparação):**
   * **Agendamento de Atendimento Presencial:** Seleção de postos, datas e horários para serviços com necessidade de validação presencial.
   * **Consulta de Unidades, Postos e Credenciadas (CFCs):** Localização de pontos de atendimento oficial no Distrito Federal.
   * **Simulado Teórico de Habilitação:** Ferramenta de preparação e estudo para a prova teórica de 1ª CNH.

<p align="center"><b>Tabela 3</b> – Fundamentação teórica para classificação das tarefas primárias e secundárias.</p>

| Categoria da Tarefa | Descrição no Projeto | Fonte Bibliográfica no Livro | Comprovação Visual (Print do Livro) |
| :--- | :--- | :--- | :--- |
| **Tarefas Primárias e Secundárias** | Definição dos conceitos e identificação das categorias de tarefas apoiadas pelo sistema. | BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. Rio de Janeiro: Elsevier, 2010, Cap. 5, p. 136 / Cap. 6, p. 175. | `![Print p. 136 e p. 175 - Decomposição de Tarefas](caminho_imagem_p136_p175.png)` |

<p align="center"><b>Fonte</b>: Elaborado pelos autores com base em Barbosa e Silva (2010).</p>

---

## 4. Mapeamento de Perfis de Usuário e Personas Vinculadas

### 4.1. Perfil 1: Condutor Habilitado

#### A. Perfil de Usuário
* **Quem Utiliza:** Pessoa que possui habilitação e utiliza os serviços do Detran relacionados à sua condição de condutor.
* **Objetivos e Tarefas:** Consultar informações da CNH e pontuação, esclarecer dúvidas sobre habilitação e localizar o serviço adequado. Como tarefas secundárias, guardar resultados, consultar orientações e procurar atendimento.
* **Conhecimento, Frequência e Contexto:** Conhecimento de trânsito superior à familiaridade com procedimentos administrativos. Acesso via celular ou computador, de forma autônoma ou assistida.
* **Possíveis Obstáculos:** Siglas pouco conhecidas, dificuldade para distinguir serviços semelhantes, recuperação de acesso e incerteza sobre a conclusão da solicitação.

#### B. Persona Vinculada: João Paulo (O Condutor com Pouco Tempo)
* **Status:** Persona Primária (Representa o condutor comum).
* **Identidade:** João Paulo, 43 anos, morador de Ceilândia. Concluiu o ensino médio e trabalha como taxista autônomo com renda variável.
* **Frase de Impacto (*Quote*):**
  > *"Preciso consultar minha CNH e entender se tenho algo para resolver."*
* **Relação com Tecnologia e Contexto:** Experiência intermediária com aplicativos e bom conhecimento prático de condução. Acessa via celular com dados móveis durante pausas no trabalho.
* **Frequência e Expectativas:** Acesso mensal ou mediante notificação. Busca entender sua situação sem perder tempo de trabalho.

#### C. Fluxo de Tarefa da Persona (João Paulo)
1. Durante uma pausa, acessa o canal oficial e localiza a consulta de CNH.
2. Realiza a identificação exigida pelo serviço e consulta suas informações.
3. Interpreta o resultado e verifica se existe uma orientação relevante.
4. Se necessário, procura o serviço indicado ou um canal de atendimento.
5. Guarda o registro disponível e sabe como retomar a consulta.
* **Resultado Esperado:** Resumo claro da situação, explicação de termos técnicos e boa usabilidade em dispositivos móveis.


---

### 4.2. Perfil 2: Candidato à Habilitação

#### A. Perfil de Usuário
* **Quem Utiliza:** Pessoa que pretende iniciar ou está passando pelo processo de obtenção da primeira CNH.
* **Objetivos e Tarefas:** Entender requisitos e próximos passos oficiais. Como tarefas secundárias, consultar credenciadas (CFCs), localizar postos de atendimento e utilizar recursos de preparação (ex.: simulado teórico).
* **Conhecimento, Frequência e Contexto:** Pouca experiência com o domínio de trânsito. Uso concentrado em smartphones e notebooks.
* **Possíveis Obstáculos:** Dificuldade para interpretar siglas, distinguir 1ª habilitação de CNH definitiva e identificar informações atualizadas.

#### B. Persona Vinculada: Camila (A Candidata que Precisa de Orientação)
* **Status:** Persona Secundária.
* **Identidade:** Camila, 19 anos, moradora de Taguatinga. Estagiária, cursa graduação e busca obter a 1ª CNH.
* **Frase de Impacto (*Quote*):**
  > *"Eu sei usar aplicativos, mas preciso entender por onde começar minha habilitação."*
* **Relação com Tecnologia e Contexto:** Usa aplicativos com facilidade, mas é leiga em serviços de trânsito. Acessa pelo celular no transporte público e pelo notebook em casa.
* **Frequência e Expectativas:** Consulta informações semanalmente durante a preparação. Precisa organizar os próximos passos de forma clara.

#### C. Fluxo de Tarefa da Persona (Camila)
1. Acessa o canal oficial e procura orientação sobre primeira habilitação.
2. Lê as informações vigentes e identifica o que se aplica à sua situação.
3. Anota os requisitos informados e as dúvidas a esclarecer.
4. Consulta credenciadas ou recursos de preparação quando pertinentes.
5. Confirma a próxima ação e guarda as orientações.
* **Resultado Esperado:** Linguagem acessível, explicação de siglas e indicação explícita da próxima etapa obrigatória.


---

### 4.3. Perfil 3: Servidor ou Agente do Detran

#### A. Perfil de Usuário
* **Quem Utiliza:** Profissional que utiliza sistemas institucionais para atendimento, análise administrativa ou fiscalização de trânsito.
* **Objetivos e Tarefas:** Consultar informações de trabalho, registrar/analisar demandas autorizadas e lavrar autos de infração.
* **Conhecimento, Frequência e Contexto:** Uso frequente associado à jornada de trabalho, com alto conhecimento do domínio e treinamento prévio.
* **Possíveis Obstáculos:** Volume elevado de trabalho, interrupções frequentes, campos de formulário ambíguos, risco de registro duplicado e instabilidade de conexão em campo.

#### B. Persona Vinculada: Ricardo (O Agente que Precisa Registrar com Precisão)
* **Status:** Stakeholder / Perfil Profissional Interno.
* **Identidade:** Ricardo, 39 anos, morador de Sobradinho. Agente de trânsito com ensino superior completo.
* **Frase de Impacto (*Quote*):**
  > *"Preciso ter certeza de que o registro está correto e foi enviado uma única vez."*
* **Relação com Tecnologia e Contexto:** Conhecimento profissional do domínio e experiência intermediária a avançada em sistemas institucionais. Utiliza equipamento corporativo em campo e desktop na unidade.
* **Frequência e Expectativas:** Acesso diário/frequente. Exige rastreabilidade e confirmação inequívoca das operações realizadas.

#### C. Fluxo de Tarefa da Persona (Ricardo)
1. Acessa o sistema institucional autorizado para sua atividade.
2. Localiza a função pertinente e registra os dados da fiscalização.
3. Revisa as informações e trata eventuais avisos do sistema antes da confirmação.
4. Confirma a operação e verifica o estado do registro.
5. Em caso de falha, segue o procedimento de suporte sem repetir o envio.
* **Resultado Esperado:** Validação de campos, distinção transparente entre registro pendente e enviado, e prevenção de duplicidades.


---

## 5. Síntese Comparativa dos Perfis e Personas

<p align="center"><b>Tabela 4</b> – Matriz Resumo das Personas do Projeto.</p>

| Perfil / Persona | Foco Principal da Interação | Critério de Sucesso |
| :--- | :--- | :--- |
| **Condutor Habilitado**<br>(João Paulo) | Acompanhar a situação da CNH e resolver pendências. | Compreende o resultado da consulta e identifica a próxima ação sem perder tempo. |
| **Candidato à Habilitação**<br>(Camila) | Aprendizagem e orientação para obtenção da 1ª CNH. | Identifica o próximo passo oficial e o canal adequado para atendimento. |
| **Servidor / Agente do Detran**<br>(Ricardo) | Execução de atividades institucionais autorizadas. | Verifica o estado e a rastreabilidade da operação sem duplicidade. |

<p align="center"><b>Fonte</b>: Elaborado pelos autores (2026) com base em Rosa (2026).</p>

---

## 6. Cenários de Uso das Personas

Os cenários a seguir descrevem situações de uso das três proto-personas e organizam cada narrativa pelos sete elementos característicos de um cenário: ambiente ou contexto, atores, objetivos, planejamento, ações, eventos e avaliação.

### 6.1. Cenário de João Paulo
**Consulta da Situação da CNH Durante uma Pausa no Trabalho**

> **Natureza do cenário:** Situação hipotética construída a partir da proto-persona. Os acontecimentos e as respostas do sistema são propostos para análise de IHC e precisam de validação; não descrevem telas ou procedimentos reais do Detran-DF.

**Narrativa do Cenário**

Durante uma pausa entre corridas, João Paulo estaciona o táxi em um local seguro e utiliza o celular para consultar a situação de sua CNH no canal oficial do Detran-DF. Como depende da habilitação para trabalhar, deseja entender se existe alguma informação que exija uma providência.

Ele localiza a consulta de CNH, realiza a identificação solicitada e acessa o resultado. Ao encontrar um termo administrativo que não conhece, procura uma explicação nas orientações disponíveis. Nesse momento, a conexão móvel oscila e interrompe o carregamento. João retoma o acesso, confere novamente as informações e identifica o canal adequado para esclarecer sua dúvida. Antes de voltar ao trabalho, guarda as orientações para consultá-las depois.

**Elementos Característicos do Cenário**

* **Ambiente ou Contexto:** João está em uma pausa de sua jornada como taxista, com o veículo estacionado. Utiliza um celular com dados móveis e dispõe de pouco tempo. Sua necessidade é acompanhar a própria habilitação, independentemente de ser proprietário do veículo que dirige.
* **Atores:** João Paulo, de 43 anos, morador de Ceilândia, taxista autônomo e com ensino médio completo. Possui experiência intermediária com aplicativos, conhece a prática da condução e tem dúvidas sobre procedimentos administrativos menos frequentes. Prefere linguagem direta e tenta resolver suas demandas sozinho.
* **Objetivos:** Consultar a situação da CNH, compreender o resultado e identificar possíveis providências ou canais de atendimento, reduzindo o tempo de interrupção do trabalho.
* **Planejamento:** João decide começar pela consulta de CNH no canal oficial. Pretende verificar o resultado, procurar explicações para termos desconhecidos e guardar as informações. Caso a dúvida permaneça, planeja buscar atendimento em outro momento.
* **Ações:** Acessa o canal oficial, localiza o serviço, realiza a identificação exigida, lê o resultado e consulta as orientações. Após a interrupção, retoma o acesso, verifica as informações e guarda o conteúdo relevante.
* **Eventos:** O serviço apresenta o resultado da consulta e um termo administrativo desconhecido por João. A conexão móvel oscila, interrompendo o carregamento. Quando o acesso é restabelecido, ele consegue continuar a consulta.
* **Avaliação:** João interpreta as informações para decidir se precisa tomar alguma providência. Percebe que realizar uma consulta não significa ter feito uma solicitação. Considera a tarefa concluída quando entende sua situação e sabe onde esclarecer a dúvida restante.

### 6.2. Cenário de Camila
**Identificação dos Primeiros Passos para Obter a Primeira CNH**

> **Natureza do cenário:** Situação hipotética construída a partir da proto-persona. Os acontecimentos e as respostas do sistema são propostos para análise de IHC e precisam de validação; não descrevem telas ou procedimentos reais do Detran-DF.

**Narrativa do Cenário**

Em casa, depois do estágio, Camila acessa pelo celular o canal oficial do Detran-DF para descobrir como iniciar o processo de obtenção da primeira CNH. Ela utiliza aplicativos com facilidade, mas ainda não conhece os procedimentos de habilitação e precisa organizar seus próximos passos de acordo com seu orçamento.

Durante a navegação, encontra informações sobre primeira habilitação e CNH definitiva. Inicialmente, fica em dúvida sobre qual opção corresponde à sua situação. Ao ler as orientações, identifica a seção de primeira habilitação e passa a anotar os requisitos informados e as dúvidas que precisa esclarecer.

Camila também encontra um recurso de simulado teórico e cogita se ele faz parte do início da solicitação. Após consultar a descrição, distingue a preparação para a prova da solicitação do serviço. Para ler os textos mais longos, utiliza o notebook. Ao terminar, guarda as orientações e identifica o canal indicado para confirmar a próxima ação.

**Elementos Característicos do Cenário**

* **Ambiente ou Contexto:** Camila está em casa, após o estágio, planejando obter sua primeira habilitação. Começa pelo celular e utiliza o notebook para leituras mais longas. Seu orçamento é limitado, e ela precisa compreender o processo antes de organizar as etapas.
* **Atores:** Camila, de 19 anos, moradora de Taguatinga, com ensino médio completo, estudante de graduação e estagiária. Tem facilidade com aplicativos e formulários, mas é iniciante nos serviços de trânsito. Prefere agir com autonomia e confirmar dúvidas em canais oficiais.
* **Objetivos:** Compreender como iniciar a primeira habilitação, identificar os requisitos informados, organizar os próximos passos e localizar o canal adequado para esclarecer dúvidas.
* **Planejamento:** Camila decide consultar primeiro as informações oficiais, identificar o serviço correspondente à sua situação e anotar requisitos e dúvidas. Pretende consultar recursos de preparação e credenciadas quando forem pertinentes, antes de confirmar a próxima ação.
* **Ações:** Acessa o canal oficial, procura primeira habilitação, lê as orientações e compara as opções encontradas. Anota informações, consulta a descrição do simulado, continua a leitura no notebook e guarda as orientações e o canal de atendimento.
* **Eventos:** O portal apresenta opções relacionadas à primeira habilitação e à CNH definitiva, além de um recurso de simulado teórico. Essas informações provocam dúvidas iniciais sobre o serviço adequado e sobre a função do simulado.
* **Avaliação:** Camila conclui que primeira habilitação corresponde à sua situação. Compreende que um recurso de preparação não representa, por si só, uma solicitação de serviço. Avalia que conseguiu se orientar quando pode explicar qual é a próxima ação e onde confirmar as dúvidas restantes.

### 6.3. Cenário de Ricardo
**Verificação de um Registro Após Interrupção da Conexão**

> **Natureza do cenário:** Situação hipotética construída a partir da proto-persona. Os acontecimentos e as respostas do sistema são propostos para análise de IHC e precisam de validação; não descrevem telas ou procedimentos reais do Detran-DF.

**Narrativa do Cenário**

Durante uma atividade externa de fiscalização, Ricardo utiliza um equipamento institucional autorizado para registrar informações de uma ocorrência. Ele acessa o sistema restrito correspondente à sua função e preenche os dados necessários.

Antes de confirmar a operação, revisa as informações. O sistema apresenta um aviso sobre um campo que precisa ser conferido. Ricardo verifica o dado e faz a correção. Ao confirmar a operação, a conexão é interrompida antes que ele consiga visualizar o resultado do envio.

Como não sabe se a operação foi concluída, Ricardo decide verificar o estado do registro antes de tentar novamente. Quando consegue retomar o acesso, consulta as informações disponíveis sobre a operação. Se o estado permanecer indefinido, procura o suporte institucional e segue o encaminhamento indicado. Seu propósito é garantir a precisão do registro e evitar um envio duplicado.

**Elementos Característicos do Cenário**

* **Ambiente ou Contexto:** Ricardo está em uma atividade externa de fiscalização, sujeito a interrupções e variações de conexão. Utiliza equipamento institucional e sistema restrito autorizado para suas atribuições. O registro da ocorrência acontece nesse ambiente profissional.
* **Atores:** Ricardo, de 39 anos, morador de Sobradinho, com ensino superior e agente de trânsito. Possui conhecimento profissional do domínio e experiência intermediária a avançada com ferramentas institucionais. A equipe de suporte participa caso ele precise esclarecer um impedimento técnico.
* **Objetivos:** Registrar corretamente as informações da ocorrência, confirmar o estado da operação, evitar duplicidade e manter a possibilidade de localizar e acompanhar o registro.
* **Planejamento:** Ricardo decide preencher os dados e revisá-los antes da confirmação. Planeja tratar os avisos apresentados e verificar o resultado da operação. Caso ocorra uma falha, pretende consultar o estado do registro antes de repetir qualquer envio e buscar suporte se necessário.
* **Ações:** Acessa o sistema autorizado, localiza a função pertinente, preenche os dados, revisa os campos e corrige a informação indicada pelo aviso. Confirma a operação, retoma o acesso após a interrupção e consulta o estado do registro. Se a dúvida persistir, aciona o suporte institucional.
* **Eventos:** O sistema apresenta um aviso de validação. Depois da correção e da confirmação, a conexão é interrompida antes da visualização do resultado. Ao retomar o acesso, Ricardo encontra as informações disponíveis sobre o estado da operação ou identifica que precisa de suporte para esclarecê-lo.
* **Avaliação:** Ricardo interpreta o aviso para identificar a correção necessária. Após a interrupção, reconhece que a ausência de confirmação visível não permite concluir se o envio ocorreu. Avalia a tarefa como concluída quando consegue verificar o estado do registro e sua correção; se isso não for possível, identifica o encaminhamento institucional adequado.

---

## 7. Validação Proposta e Próximos Passos

Como estas personas foram inicialmente modeladas como **proto-personas** (hipóteses de trabalho), recomenda-se a execução das seguintes etapas em entregas futuras:

1. **Entrevistas e Observação:** Entrevistar participantes pertencentes aos três perfis e observar a execução de tarefas reais ou simuladas.
2. **Registro de Problemas:** Tabular dúvidas, erros cometidos, taxas de conclusão e necessidades de ajuda externa.
3. **Refinamento do Artefato:** Comparar os dados coletados em campo com o comportamento previsto das proto-personas e atualizar as hipóteses.
4. **Procedimentos Éticos:** Garantir a participação voluntária, assinatura do Termo de Consentimento Livre e Esclarecido (TCLE) e evitar a coleta de dados pessoais sensíveis.

---

## Referências Bibliográficas

* ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 6023**: informação e documentação – referências – elaboração. Rio de Janeiro: ABNT, 2018.
* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. **Interação Humano-Computador**. Rio de Janeiro: Elsevier, 2010.
* COURAGE, Catherine; BAXTER, Kathy. **Understanding Your Users**: A Practical Guide to User Requirements Methods, Tools, and Techniques. San Francisco: Morgan Kaufmann, 2005.
* DETRAN-DF. **Detran Digital: Portal de Serviços**. Disponível em: <https://portal.detran.df.gov.br>. Acesso em: 25 set. 2026.
* ROSA, Henrique Schneider Fernandes da. **Lista de verificação: perfil de usuário / PerfilPersonas2**. Projeto de Interação Humano-Computador, UnB/FGA, 2026.
