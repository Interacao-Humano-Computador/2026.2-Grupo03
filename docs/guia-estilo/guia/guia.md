# Guia de Estilo do Detran-DF

## 1. Introdução

### 1.1 Objetivo do guia de estilo

Este guia registra as decisões de interface propostas pelo Grupo 03 para o **reprojeto acadêmico do site do Detran-DF**. Seu objetivo é manter consistência visual, facilitar a localização dos serviços e orientar a criação e a manutenção dos protótipos.

Conforme Barbosa e Silva (2010, seção 8.4, p. 282–284), o guia reúne decisões de design e funciona como instrumento de comunicação entre as equipes. A organização abaixo acompanha a estrutura apresentada pelos autores a partir de Marcus (1992) e Mayhew (1999).

!!! info "Escopo e evidências"
    Este é um guia de produto específico elaborado para o projeto acadêmico, e não um manual oficial do Detran-DF. Os valores de cores, fontes, espaçamentos e componentes abaixo são **decisões propostas**, não medições do CSS do site atual. Em 06/10/2026, não foi possível concluir a inspeção visual ao vivo de `www.detran.df.gov.br` por tempo limite de acesso. O catálogo público indexado do Portal de Serviços foi consultado para contextualizar categorias e nomes de serviços; ele não comprova o comportamento atual dos formulários.

### 1.2 Organização e conteúdo

O documento reúne: contexto dos usuários; elementos de interface; interação; preenchimento e ativação de controles; vocabulário; padrões de telas e diálogos; justificativas das decisões; critérios para revisão.

### 1.3 Público-alvo

Integrantes responsáveis pelo design, programação, coordenação, avaliação e suporte do projeto. O guia também permite que novos integrantes compreendam as escolhas sem depender de explicações orais.

### 1.4 Como utilizar

Antes de desenhar uma tela, identificar sua tarefa e consultar os padrões correspondentes. Reutilizar os mesmos componentes para a mesma função. Nos protótipos e na implementação, verificar os estados normal, foco, erro, carregamento e conclusão. Divergências devem ser documentadas com justificativa e avaliadas pela equipe.

### 1.5 Como manter

Atualizar este arquivo por commit e revisão no repositório. Cada alteração deve registrar data, versão, autor, motivo e impacto nos componentes. Revisar o guia quando mudarem as tarefas, as evidências de pesquisa ou os protótipos. Não registrar uma revisão humana como concluída antes de ela ocorrer.

## 2. Resultados de análise

### 2.1 Ambiente de trabalho do usuário

O projeto descreve condutores, candidatos à habilitação e profissionais do órgão. Os [perfis e personas](../../perfil-de-usuario/personas/perfisEpersonas.md) informam que os personagens e seus contextos são hipóteses de trabalho, ainda dependentes de validação com usuários. Portanto, as necessidades abaixo orientam o reprojeto sem serem apresentadas como resultados comprovados de pesquisa.

| Perfil | Contexto previsto | Necessidade de interface |
| :--- | :--- | :--- |
| Condutor | Celular, dados móveis e pouco tempo disponível | Consulta direta, resultado resumido e retomada fácil |
| Candidato à habilitação | Celular e notebook; pouca familiaridade com procedimentos | Explicação das siglas, requisitos e próximo passo |
| Servidor ou agente | Equipamento corporativo e interrupções durante o trabalho | Revisão dos dados, estado do envio e prevenção de duplicidades |

O escopo principal é o **portal público institucional**. Telas de trabalho interno não foram inspecionadas e não são descritas como se integrassem o site público. Seus padrões poderão ser adaptados em uma etapa específica.

A [análise de tarefas](../../perfil-de-usuario/analise/fluxos.md) orienta os fluxos de consulta de débitos, consulta da CNH e agendamento. Seus problemas e recomendações são tratados aqui como insumos do projeto, sem afirmar que cada problema foi reproduzido nesta elaboração. As [metas de usabilidade](../metas/metas.md) complementam as decisões.

## 3. Elementos de interface

### 3.1 Disposição espacial e grid

**Proposta de layout:** cabeçalho institucional, navegação principal, título e caminho de navegação, conteúdo e rodapé. A página inicial deve priorizar acesso aos serviços e busca; notícias ficam em uma seção própria.

| Propriedade | Padrão proposto |
| :--- | :--- |
| Largura do conteúdo | Até 1200 px, centralizado |
| Grid | 12 colunas no desktop, 8 no tablet e 4 no celular |
| Faixas de adaptação | Celular: abaixo de 768 px; tablet: 768–1023 px; desktop: a partir de 1024 px |
| Margens laterais | 16 px no celular; 24 px no tablet; 32 px no desktop |
| Espaçamento | Escala de 4, 8, 16, 24, 32 e 48 px |
| Cards de serviço | 1 por linha no celular; 2 no tablet; até 3 no desktop |
| Formulário | Uma coluna; largura de leitura de até 640 px |

A navegação móvel deve abrir por um botão com nome acessível e indicação de expandido/recolhido. Evitar rolagem horizontal da página a 320 px de largura; tabelas extensas podem ter uma região própria de rolagem identificada. Não deslocar o foco ao adaptar o layout.

### 3.2 Janelas

Navegar no mesmo contexto por padrão. Antes de encaminhar ao Portal de Serviços, informar a mudança de ambiente. Se houver nova aba, avisar no texto do link.

Usar diálogo modal somente quando uma decisão exige atenção imediata. O diálogo deve ter título, mensagem breve, botão de ação específico e opção de cancelamento; ao abrir, receber o foco e limitar a navegação a seus controles; ao fechar, devolver o foco ao elemento de origem. `Esc` cancela quando isso for seguro.

### 3.3 Tipografia

A família proposta é `Arial, Helvetica, sans-serif`, escolhida por disponibilidade e leitura sem carregamento de fontes externas. Não representa uma identificação da fonte atualmente usada pelo órgão.

| Elemento | Tamanho proposto | Peso / uso |
| :--- | :--- | :--- |
| Título da página (H1) | 32 px; 28 px no celular | 700; um título principal |
| Título de seção (H2) | 24 px | 700 |
| Subtítulo (H3) | 20 px | 700 |
| Texto, campos e botões | 16 px | 400; botões 700 |
| Ajuda e legenda | 14 px | 400; nunca para a informação principal |

Usar entrelinha de 1,5, alinhamento à esquerda e parágrafos curtos. Evitar texto justificado, longas frases em caixa alta e informação essencial em imagens. Preservar leitura com ampliação de texto de 200%.

### 3.4 Símbolos não tipográficos

Usar ícones da mesma família visual: traços simples, tamanho de 24 px e espessura consistente. Exemplos: lupa para busca, calendário para agendamento, documento para emissão e seta para retorno. A área interativa deve ser maior que o desenho.

Ícones de ação devem ter rótulo visível ou nome acessível. Ícones decorativos ficam ocultos de tecnologias assistivas. Não usar somente um símbolo ou uma cor para comunicar erro, sucesso ou indisponibilidade. Marcas oficiais devem usar arquivos autorizados, sem redesenho do brasão.

### 3.5 Cores

A paleta é uma proposta para o protótipo. A equipe deverá confrontá-la com a identidade institucional antes de uma implementação oficial.

| Token | Cor | Aplicação |
| :--- | :--- | :--- |
| Primária | `#005A9C` | Botões principais e links |
| Primária em hover | `#003F6B` | Destaque da ação sob o ponteiro |
| Texto principal | `#1F2937` | Títulos e conteúdo sobre branco |
| Texto secundário | `#4B5563` | Ajuda e informações complementares |
| Superfície | `#FFFFFF` | Cards e formulários |
| Fundo | `#F3F4F6` | Separação de áreas |
| Borda de controle | `#6B7280` | Identificação de campos sobre branco |
| Sucesso | `#166534` | Confirmação acompanhada de texto |
| Erro | `#B91C1C` | Mensagem e identificação do campo |
| Atenção | `#92400E` | Avisos acompanhados de texto |

Botões primários usam texto branco. Links em conteúdo são sublinhados. O foco usa contorno azul de 3 px com separação clara do controle; em fundo azul, usar contorno branco contrastante. A cor não é o único meio de diferenciar estados.

Validar contraste mínimo de **4,5:1 para texto comum** e **3:1 para texto grande**, conforme WCAG 2.2, critério 1.4.3. Também verificar contraste de controles e indicadores, conforme 1.4.11. Os pares efetivamente utilizados, inclusive hover e foco, precisam ser conferidos; uma paleta isolada não certifica acessibilidade.

### 3.6 Animações

Transições discretas de 150–200 ms, apenas para indicar mudança de estado. Respeitar `prefers-reduced-motion`. Não usar animações piscantes nem carrosséis automáticos como único acesso a informação importante. O indicador de carregamento deve vir acompanhado de texto, como “Consultando informações…”.

### 3.7 Visualização de informações

Em resultados de consulta, preferir resumo seguido de lista ou tabela com cabeçalhos claros. Valores monetários usam `R$ 1.234,56`; datas usam `DD/MM/AAAA`. Documentos e situação devem ser identificados por texto. Gráficos, mapas ou diagramas futuros precisam de descrição e alternativa textual com os dados relevantes, sem depender de cor.

## 4. Elementos de interação

### 4.1 Estilos de interação

Usar menus e cards para escolher serviços; formulários para informar dados; listas e tabelas para resultados; diálogos para confirmação. Ajuda contextual complementa a tarefa sem substituir instruções visíveis. Assistentes virtuais, caso incluídos no protótipo, não podem ser o único acesso ao atendimento ou ao serviço.

### 4.2 Seleção de um estilo

| Situação | Componente e regra |
| :--- | :--- |
| Escolher serviço | Card ou link com nome da tarefa |
| Escolher uma entre poucas opções | Botões de opção (radio) |
| Escolher vários itens independentes | Caixas de seleção (checkbox) |
| Escolher entre muitas opções | Lista com busca ou select acessível |
| Executar ação | Botão com verbo e objeto |
| Navegar a outro conteúdo | Link descritivo |

Elementos interativos devem apresentar estados normal, hover, foco, pressionado e, quando pertinente, indisponível. Explicar por que uma ação está indisponível; não deixar o usuário interpretar apenas um botão cinza.

### 4.3 Aceleradores e teclado

A navegação deve funcionar com `Tab` e `Shift+Tab`; botões com `Enter` ou `Espaço`; links com `Enter`; seletores conforme seu comportamento nativo. Incluir “Ir para o conteúdo” como primeiro link de navegação. Evitar atalhos personalizados que conflitem com navegador ou leitor de tela. Não exigir gesto de arrastar nem uso do mouse para concluir uma tarefa.

## 5. Elementos de ação

### 5.1 Preenchimento de campos

Rótulos devem permanecer visíveis acima do campo. Informar obrigatoriedade em texto e explicar formato antes do preenchimento. Placeholder não substitui rótulo. Usar máscaras somente quando necessárias, permitindo colar e corrigir dados sem bloquear formatos válidos. Não inventar os requisitos administrativos de um serviço: eles devem ser conferidos na fonte oficial de cada fluxo.

| Campo de exemplo | Orientação proposta |
| :--- | :--- |
| Placa | “Informe a placa do veículo”; aceitar formatos oficialmente aplicáveis |
| Renavam | “Informe o Renavam indicado no documento do veículo” |
| Data de atendimento | Exibir datas disponíveis e permitir escolha por teclado |
| Serviço | Usar nome completo e explicar siglas na primeira ocorrência |

Validar perto do campo e ao enviar. Exemplo de erro: “Confira a placa informada.” Evitar mensagens genéricas como “Dados inválidos”. Associar a mensagem ao campo com `aria-describedby` e sinalizar erro com `aria-invalid`. No envio inválido, direcionar o foco a um resumo com links para os campos. Preservar valores válidos após um erro, respeitando a privacidade e as regras do serviço.

### 5.2 Seleção

Mostrar quais opções estão selecionadas e permitir alteração antes de confirmar. Cada controle deve ter área de toque proposta de **44 × 44 px**; esse valor é uma decisão do projeto. O critério 2.5.8 da WCAG 2.2 estabelece referência mínima de 24 × 24 CSS px, com exceções e alternativas de espaçamento; não confundir esse mínimo com a meta de 44 px.

Quando houver seleção de itens financeiros no protótipo, mostrar descrição e total antes da geração de documento. Dados de exemplo devem ser fictícios e identificados como demonstração.

### 5.3 Ativação

Definir uma ação principal por etapa: “Consultar veículo”, “Ver horários” ou “Confirmar agendamento”. Usar ação secundária para “Voltar” e “Cancelar”. Rótulos devem explicar o resultado; evitar “OK” em ações importantes.

Durante envio, mostrar estado de processamento e impedir duplicação. Sucesso deve incluir resultado e próxima ação. Se o serviço falhar, informar o que foi ou não concluído e como tentar novamente; não recomendar novo envio quando o estado da operação ainda é desconhecido.

## 6. Vocabulário e padrões

### 6.1 Terminologia

| Termo | Padrão de comunicação |
| :--- | :--- |
| CNH | Carteira Nacional de Habilitação (CNH) na primeira ocorrência |
| CRLV-e | Certificado de Registro e Licenciamento de Veículo eletrônico (CRLV-e) |
| Renavam | Explicar como identificador do veículo e orientar onde encontrá-lo |
| Agendamento | Escolha de serviço, unidade, data e horário |
| Consulta | Visualização de informação; não indica pagamento ou solicitação concluída |
| Emitir / baixar | Distinguir geração do documento e download do arquivo |

Preferir linguagem direta, frases curtas e tratamento uniforme. O catálogo consultado inclui Veículos, Habilitação, Agendamento e Infração. Os rótulos finais deverão ser reconciliados com o serviço oficial: padronização textual não autoriza alterar requisitos, taxas ou nomes legais.

### 6.2 Tipos de tela

| Tela | Estrutura proposta |
| :--- | :--- |
| Inicial | Identidade institucional, busca, categorias de serviço, notícias e atendimento |
| Orientação de serviço | Objetivo, requisitos oficiais, documentos, canal e botão para iniciar |
| Formulário | Título da tarefa, progresso, campos, ajuda e ação principal |
| Resultado de consulta | Resumo, data de referência, detalhes e ações permitidas |
| Revisão | Dados da solicitação, opção de editar e confirmação específica |
| Conclusão | Estado da operação, protocolo quando existente e próximos passos |
| Falha | Explicação, estado conhecido da operação e recuperação |

### 6.3 Sequências de diálogos

**Consulta:** escolher serviço → ler orientações → informar dados → enviar → receber resultado. Se o preenchimento for inválido, corrigir os campos; se não houver resultado, explicar a ausência sem tratá-la automaticamente como erro de digitação.

**Agendamento proposto:** escolher serviço → selecionar unidade e horário → revisar → confirmar → receber confirmação. Se o horário ficar indisponível, retornar à seleção preservando o restante quando possível. Este fluxo descreve o protótipo; a sequência real ainda precisa de inspeção.

**Documento proposto:** consultar → conferir dados → solicitar emissão → receber resultado → baixar. Mensagem de conclusão de emissão não deve afirmar que houve pagamento. Para encaminhamentos externos, informar qual ambiente será aberto e por quê.

**Exemplos de mensagens:**

- Carregamento: “Consultando informações. Aguarde.”
- Ausência de resultado: “Nenhum resultado encontrado para os dados informados. Confira os dados ou procure atendimento.”
- Confirmação no protótipo: “Agendamento confirmado. Consulte os detalhes abaixo.”
- Falha com estado desconhecido: “Não foi possível confirmar a conclusão. Consulte a situação antes de enviar novamente.”

## 7. Rastreabilidade das decisões

| Decisão | Origem | Justificativa | Verificação prevista |
| :--- | :--- | :--- | :--- |
| Serviços prioritários e resultado resumido | Perfil do condutor e análise de tarefas | Reduzir esforço de busca | Observar localização e consulta com participantes |
| Explicar siglas e próximo passo | Perfil do candidato | Apoiar compreensão do domínio | Perguntar o significado e a próxima ação após leitura |
| Revisão e estado do envio | Análise de tarefas e perfil profissional | Reduzir incerteza e duplicidade | Simular sucesso, falha e interrupção |
| Grid responsivo e controles de 44 px | Contextos móveis previstos e decisão de projeto | Facilitar leitura e toque | Testar 320 px, tablet e desktop |
| Contraste, teclado e nomes acessíveis | WCAG 2.2 | Acesso por diferentes modos de interação | Inspeção de contraste, teclado e leitor de tela |
| Componentes e vocabulário reutilizáveis | Barbosa e Silva (2010, seção 8.4) | Comunicar e preservar decisões | Conferir consistência entre telas |

**Fonte:** elaborado para o projeto com base nos artefatos vinculados e nas referências. A matriz registra a origem das decisões, mas não equivale a uma validação já realizada com usuários.

## 8. Checklist de aplicação e validação

Utilizar **Conforme / Não conforme / Não se aplica**, registrando tela, evidência e responsável. A lista ainda deve ser aplicada aos protótipos; os itens não estão automaticamente aprovados.

1. A tela identifica a tarefa principal e a próxima ação?
2. O layout funciona no celular sem cortar campos ou informação essencial?
3. Os textos usam hierarquia e termos consistentes com este guia?
4. Os pares de cores utilizados atendem aos requisitos de contraste aplicáveis?
5. Todas as ações podem ser realizadas por teclado com foco visível?
6. Ícones, campos e controles têm nomes acessíveis e orientação clara?
7. As mensagens de erro identificam o problema e uma forma de recuperação?
8. A confirmação diferencia consulta, emissão, agendamento e pagamento?
9. Carregamento, sucesso, falha e indisponibilidade são comunicados por texto?
10. Cada mudança de padrão registra sua origem e justificativa?

**Pendências:** inspeção visual do portal institucional; conferência de identidade oficial; validação dos fluxos reais; testes com participantes; revisão humana do guia. As medições e evidências futuras devem substituir hipóteses quando disponíveis.

## Referências bibliográficas

- BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. Rio de Janeiro: Elsevier, 2010. Seção 8.4, p. 282–284. Fundamentação utilizada: trecho fornecido para esta atividade.
- MARCUS, Aaron. *Graphic Design for Electronic Documents and User Interfaces*. New York: ACM Press, 1992. Referência citada por Barbosa e Silva (2010); consulta indireta.
- MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999. Referência citada por Barbosa e Silva (2010); consulta indireta.
- DETRAN-DF. *Site institucional*. Disponível em: <https://www.detran.df.gov.br/>. Tentativa de acesso em: 6 out. 2026; inspeção visual não concluída.
- DETRAN-DF. *Detran Digital: Portal de Serviços*. Disponível em: <https://portal.detran.df.gov.br/>. Catálogo público indexado consultado em: 6 out. 2026; formulários não inspecionados.
- GRUPO 03. *Perfis de Usuário e Personas; Análise de Tarefas; Metas de Usabilidade*. Projeto de IHC, UnB, 2026. Documentos vinculados neste guia.
- W3C. *Web Content Accessibility Guidelines (WCAG) 2.2*. Disponível em: <https://www.w3.org/TR/WCAG22/>. Critérios 1.4.3, 1.4.11, 2.5.8 e demais critérios aplicáveis.
- W3C. *Understanding SC 1.4.3: Contrast (Minimum)*. Disponível em: <https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html>. Acesso em: 6 out. 2026.
- W3C. *Understanding SC 2.5.8: Target Size (Minimum)*. Disponível em: <https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html>. Acesso em: 6 out. 2026.

## Histórico de Versões

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 06/10/2026 | 1.0 | Criação do documento | Henrique Schneider | Integrantes do grupo |
| 06/10/2026 | 1.1 | Elaboração do guia de reprojeto: estrutura teórica, padrões, rastreabilidade e critérios de validação | Gabriel Robson, com apoio do ChatGPT na elaboração e conferência documental | Revisão humana pendente |

**Fonte:** elaborado para o projeto (2026).

**Uso de IA:** ChatGPT auxiliou na organização, redação e verificação de coerência documental. Os valores visuais são propostas explícitas; o apoio de IA e a compilação do site não substituem inspeção da interface nem testes com usuários.
