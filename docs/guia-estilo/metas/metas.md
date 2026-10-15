# Metas de Usabilidade

## Tabela de contribuição

**Tabela 1 – Contribuições no artefato Metas de Usabilidade**

| Integrante | Contribuição | Atividade (link) | Gravação (link) |
| --- | --- | --- | --- |
| Alexandre Vilar Valadares Fonsêca | **[VERIFICAR: contribuição]** | — | — |
| Eduardo Ribeiro Gomes da Silva | **[VERIFICAR: contribuição]** | — | — |
| Gabriel Robson | **[VERIFICAR: contribuição]** | — | — |
| Henrique Schneider Fernandes da Rosa | Criação do documento (v1.0); revisão da v1.1 | [Commit d803534](https://github.com/Interacao-Humano-Computador/2026.2-Grupo03/commit/d803534) | — |
| João Vitor Tavares de Sá Lima | Fundamentação teórica e redação das metas de usabilidade (v1.1); revisão da v1.0 | [Commit 5b5041f](https://github.com/Interacao-Humano-Computador/2026.2-Grupo03/commit/5b5041f) | — |

Fonte: elaborado pelos autores (2026).

## Histórico de versões

**Tabela 2 – Histórico de versões do artefato Metas de Usabilidade**

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| --- | --- | --- | --- | --- |
| 06/10/2026 | 1.0 | Criação do Documento | Henrique Schneider | João Vitor Tavares |
| 06/10/2026 | 1.1 | Redação das metas de usabilidade | João Vitor Tavares | Henrique Schneider |
| 15/10/2026 | 1.2 | Padronização da estrutura (tabela de contribuição e histórico no início, seções numeradas), inclusão das páginas nas citações após conferência no livro, da seção de item de conteúdo com marcadores de pendência e da seção de uso de IA | Henrique Schneider (solicitante), com apoio do Claude (IA generativa) | **[VERIFICAR: revisor]** |

Fonte: elaborado pelos autores (2026).

## 1. Fundamentação teórica

As metas de usabilidade orientam as decisões de design e ajudam a avaliar se a interface está atendendo às expectativas de interação e desempenho dos usuários. O projeto de um sistema interativo deve definir uma solução com alta qualidade de uso. 

De acordo com a literatura de IHC (Barbosa; Silva, 2010, cap. 2, p. 29), a usabilidade é mensurada a partir de seis fatores e critérios fundamentais:


* **Facilidade de Aprendizado:** Refere-se ao tempo e esforço necessários para que um usuário aprenda a utilizar o sistema com determinado nível de competência.
* **Eficiência:** Relaciona-se ao tempo e recursos (como número de cliques ou esforço cognitivo) necessários para a conclusão de uma atividade após o aprendizado da interface.
* **Facilidade de Recordação:** Diz respeito à facilidade com que o usuário se lembra de como realizar tarefas no sistema ao retornar a ele após um período sem uso.
* **Segurança no Uso:** Refere-se à capacidade do sistema de prevenir erros e de oferecer caminhos claros para que o usuário se recupere de ações indesejadas.
* **Eficácia:** Relaciona-se à capacidade de o usuário concluir seus objetivos corretamente e de forma completa na plataforma.
* **Satisfação do Usuário:** Avaliação subjetiva sobre o conforto, emoções e atitudes do usuário decorrentes da interação com a interface.

No processo de Engenharia de Usabilidade, a definição dessas metas ocorre na fase de análise de requisitos e serve de guia para o desenvolvimento e para as avaliações interativas. Para torná-las mensuráveis, associa-se a cada meta um conjunto de indicadores de desempenho e faixas de valores (níveis inaceitável, aceitável e ideal), permitindo verificar empiricamente se as melhorias propostas atingiram os objetivos almejados (Barbosa; Silva, 2010, cap. 4, p. 105-106).

<!-- Páginas conferidas no PDF de Barbosa e Silva (2010) em 15/10/2026: fatores de usabilidade de Nielsen (1993) no cap. 2, p. 29; indicadores e faixas de valores das metas no cap. 4, pp. 105–106 (Figura 4.6). -->
<!-- TODO(VERIFICAR): o texto fala em "seis fatores"; Barbosa e Silva (2010, p. 29) apresentam os fatores de usabilidade de Nielsen (1993), e a eficácia aparece na definição da ISO 9241-11 citada na mesma página. Conferir a contagem. -->

**Autor do item:** **[VERIFICAR: autor do item "metas de usabilidade" (SALES, 2026, p. 12)]**

**[VERIFICAR: foto da p. 29 de Barbosa e Silva (2010), salva em `docs/assets/referencias/barbosa-silva-2010-p29.png`]**

## 2. Metas definidas para o projeto

As metas de usabilidade estabelecidas para o redesign do portal do Detran-DF foram priorizadas com base nos problemas e limitações identificados nas etapas de Análise de Tarefas e levantamento do Perfil de Usuário. O objetivo é garantir uma interface acessível e ágil tanto para cidadãos que realizam serviços esporádicos quanto para novos condutores em processo de formação.

As metas definidas e suas justificativas no contexto do sistema são:

* **Facilidade de Aprendizado:** A página inicial do portal do Detran-DF apresenta cards e botões com funcionalidades explícitas e objetivas, além de uma assistente virtual que auxilia os usuários com dúvidas frequentes. Essa estrutura direta facilita o aprendizado do usuário leigo, pois reduz a necessidade de navegação por menus complexos.
* **Eficiência:** A eficiência no Portal do Detran-DF é favorecida por uma arquitetura de navegação direta para as funcionalidades primárias, permitindo que usuários frequentes alcancem o serviço desejado em um intervalo curto de 1 a 3 cliques a partir da tela inicial. Por outro lado, o sistema carece de suporte nativo ao preenchimento automático avançado de dados em formulários para usuários autenticados, além de não oferecer atalhos de teclado customizáveis ou ferramentas de busca e comando por voz.
* **Facilidade de Recordação:** A utilização do sistema se torna bastante intuitiva com a experiência de apenas alguns usuários; voltada para quem tem mais afinidade com a tecnologia, essa memorização torna-se mais propícia.
* **Segurança no Uso:** No Portal do Detran-DF, a segurança no uso manifesta-se positivamente na validação de campos estruturados em formulários de consulta. Além disso, as etapas de acesso e consulta de serviços exigem a confirmação de dados do veículo ou condutor antes de gerar documentos oficiais, o que reduz a ocorrência de emissões acidentais de taxas ou guias para veículos de terceiros. Por outro lado, o sistema apresenta fragilidades na prevenção de erros em ações críticas e na recuperação de dados digitados. Em fluxos mais extensos, como no agendamento de atendimentos ou na solicitação de serviços de habilitação, a navegação entre etapas não possui mecanismos adequados para salvar o progresso temporário do usuário, fazendo com que o retorno ou recarregamento acidental da página resulte na perda total das informações inseridas.
* **Eficácia:** No Portal do Detran-DF, a eficácia do sistema apresenta um desempenho parcialmente satisfatório, demonstrando êxito na execução da maioria das funcionalidades propostas. De modo geral, o cidadão consegue concluir os eventos e solicitações desejadas, recebendo o retorno adequado das ações realizadas e atingindo os seus objetivos principais.

<!-- TODO(VERIFICAR): o item 14 da Entrega 3 pede "A razão da seleção das metas de usabilidade" (SALES, 2026, p. 12). O texto descreve como o portal atual se comporta em cada meta; conferir se a razão da escolha de cada meta está explícita. Sugestão em REFATORACAO-RELATORIO.md. -->

## Referências

BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. Rio de Janeiro: Elsevier, 2010.

SALES, André Barros de. *Plano de Ensino: Interação Humano Computador (FGA0173), 02/2026, Turma 01, v1*. Brasília: Universidade de Brasília, 2026.

## Agradecimentos e uso de IA generativa

**Uso de IA generativa nesta página.** Em 15/10/2026, o Claude (Anthropic) foi utilizado, a pedido de Henrique Schneider, para reorganizar a página no modelo de artefato da disciplina (tabela de contribuição e histórico no início, seções numeradas), conferir no PDF de Barbosa e Silva (2010) as páginas das duas citações e incluí-las, e acrescentar a seção de item de conteúdo com marcadores **[VERIFICAR]**. A fundamentação e as metas não foram alteradas. A ferramenta não é autora do artefato e seu uso não exime os autores da responsabilidade sobre o conteúdo (SALES, 2026, p. 3).
