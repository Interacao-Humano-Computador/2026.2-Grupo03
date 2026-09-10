# Processo de Design

## Histórico de versões e contribuições

| Data | Versão | Descrição | Autor | Revisor |
| --- | --- | --- | --- | --- |
| 10/09/2026 | 1.1 | Ampliação da fundamentação teórica, das etapas e da aplicação do processo ao Portal de Serviços do Detran-DF. | Eduardo Ribeiro | A definir |
| 10/09/2026 | 1.0 | Registro da Engenharia de Usabilidade de Mayhew e do framework DECIDE. | Eduardo Ribeiro | A definir |

## Introdução

O processo de design define como o grupo compreenderá o problema, levantará evidências, proporá soluções e avaliará os resultados da interface do Portal de Serviços do Detran-DF. Em Interação Humano-Computador, o projeto da interação deve considerar as pessoas, seus objetivos, as tarefas realizadas e o contexto em que o sistema é utilizado (BARBOSA; SILVA, 2010).

Para organizar esse trabalho, o grupo adotou a Engenharia de Usabilidade de Mayhew (MAYHEW, 1999), que será complementada pelo framework DECIDE e pela avaliação heurística em etapas posteriores. Neste momento, o foco está apenas na escolha e na justificativa do processo.

### Abordagem adotada

A Engenharia de Usabilidade de Mayhew é adequada a um sistema governamental com alta densidade de informações e fluxos burocráticos porque prioriza a compreensão dos usuários e das tarefas antes das decisões detalhadas de design. O modelo foi escolhido para reduzir decisões baseadas apenas em preferência estética e orientar o projeto por evidências de uso.

Essa abordagem também está alinhada à avaliação heurística, que permite inspecionar a interface em busca de problemas de usabilidade a partir de princípios reconhecidos. As heurísticas ajudam a identificar falhas de visibilidade do estado do sistema, compatibilidade com o mundo real, controle do usuário, prevenção de erros, consistência e ajuda (NIELSEN, 1994).

### Fundamentos do processo

O processo será orientado pelos seguintes fundamentos:

- **Centrado no usuário:** decisões devem considerar as características, necessidades, objetivos e limitações dos cidadãos que utilizam os serviços.
- **Orientado às tarefas:** a análise deve observar o que o usuário precisa realizar, como localizar multas, agendar atendimento, consultar credenciadas e acessar sua conta.
- **Baseado em evidências:** problemas e soluções devem ser apoiados por observações, registros da inspeção, resultados de avaliação e justificativas documentadas.
- **Iterativo:** cada avaliação pode revelar novos problemas e gerar ajustes no modelo conceitual, nos protótipos e na interface final.
- **Acessível e inclusivo:** contraste, hierarquia visual, linguagem, navegação por teclado e compatibilidade com tecnologias assistivas devem ser considerados desde o início.
- **Comunicável:** a interface deve tornar compreensíveis suas funções, estados, consequências das ações e formas de recuperação de erros (BARBOSA; SILVA, 2010).

### Fases gerais do processo

1. **Análise de requisitos:** compreensão dos usuários, das tarefas e das necessidades de usabilidade do sistema.
2. **Design e desenvolvimento:** criação e evolução das soluções de interação, considerando os requisitos levantados.
3. **Avaliação e refinamento:** verificação das soluções e realização de ajustes com base nas evidências encontradas.

### Aplicação ao Portal de Serviços do Detran-DF

No projeto, o processo será aplicado aos fluxos de consulta e pagamento de multas, agendamento de atendimento presencial, consulta de credenciadas, autenticação e uso do assistente virtual. Esses fluxos foram considerados relevantes por fazerem parte dos serviços oferecidos ao cidadão e dos problemas identificados na inspeção preliminar.

Em uma etapa posterior, o grupo deverá verificar questões como:

- O cidadão encontra rapidamente o serviço que procura?
- O sistema informa claramente em que etapa do fluxo o usuário está?
- Os campos obrigatórios, erros e consequências das ações estão explícitos?
- O usuário recebe feedback compreensível após salvar, consultar ou concluir uma tarefa?
- A interface oferece ajuda e recuperação quando ocorre uma falha de login ou preenchimento?
- Os conteúdos e controles são acessíveis a pessoas com diferentes necessidades?

### Critérios de decisão

O planejamento da avaliação será apoiado pelo framework DECIDE, de Sharp, Rogers e Preece (SHARP; ROGERS; PREECE, 2019). A inspeção heurística utilizará as dez heurísticas de Nielsen, enquanto os referenciais de Barbosa e Silva apoiarão a análise de comunicabilidade, especialmente em falhas de feedback e na ausência de explicação sobre a lógica do sistema.

Cada problema identificado deverá ser registrado com sua localização, contexto, heurística relacionada, impacto sobre o usuário, impacto sobre a tarefa, grau de severidade e recomendação de melhoria. Essa forma de registro facilita a rastreabilidade entre o problema observado, a decisão de design e a solução proposta.

### Declaração de uso de inteligência artificial generativa

O Google Gemini foi utilizado como ferramenta de apoio à organização das ideias, à revisão da redação e à estruturação inicial desta página (GOOGLE, 2026). Seu uso não substituiu a leitura das referências, a análise do grupo ou a decisão sobre o processo de design.

As sugestões geradas foram revisadas e validadas pelos integrantes. A responsabilidade pelo conteúdo final, pelas interpretações, pelas citações e pelas referências é exclusivamente do Grupo 3.

## Referências

BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. **Interação humano-computador**. Rio de Janeiro: Elsevier, 2010.

GOOGLE. **Gemini**. Disponível em: <https://gemini.google.com/>. Acesso em: 10 set. 2026.

MAYHEW, Deborah J. **The usability engineering lifecycle: a practitioner's handbook for user interface design**. San Francisco: Morgan Kaufmann, 1999.

NIELSEN, Jakob. Heuristic evaluation. In: NIELSEN, Jakob; MACK, Robert L. (ed.). **Usability inspection methods**. New York: John Wiley & Sons, 1994. p. 25-62.

SHARP, Helen; ROGERS, Yvonne; PREECE, Jennifer. **Interaction design: beyond human-computer interaction**. 5. ed. Indianapolis: Wiley, 2019.
