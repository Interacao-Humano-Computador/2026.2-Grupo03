# Como registrar as sessões do teste de usabilidade no site

Passo a passo para levar a gravação e a transcrição de cada sessão para as páginas da Entrega 7. Nada aqui inventa dados: o que a gravação não mostrar fica como `**[VERIFICAR]**`.

## O que você precisa ter

- Link da gravação no YouTube como **não listado** (D9 do Plano de Ensino).
- Transcrição do Teams (`.vtt` ou `.docx`; o script entende os dois formatos).
- A folha de medição preenchida (Apêndice C do [roteiro do teste](../../docs/entrega-6/integrantes/henrique-schneider/planejamento-alta-fidelidade.md)) ou o cronômetro anotado a partir da gravação.
- O TCLE assinado e a autorização de gravação.

## Antes de cada sessão com controle remoto do Teams

A sessão é remota: o protótipo roda no computador do avaliador e o participante o usa pelo controle remoto do Teams (“Dar controle”). Confira, **antes** de chamar o participante:

1. **Teste o controle remoto.** Ele costuma exigir o aplicativo do Teams para computador dos dois lados, e a organização pode bloquear o controle para convidados externos. Faça um teste com outra pessoa; se não funcionar, decida a alternativa antes (por exemplo, o participante abrir o link do protótipo no navegador dele e compartilhar a tela).
2. **Compartilhe só a janela do protótipo**, não a tela inteira, para o participante não ver nem controlar outros programas. Feche notificações, o chat e a página do avaliador (A0).
3. **Prepare os quatro estados.** O participante vê o que você abrir, então deixe pronto o endereço de cada tarefa no modo de apresentação (fluxos “Computador · T1” a “T4”, escolhidos no menu do Present) e troque de uma tarefa para outra entre os cartões. Os atalhos escondidos da Tela 4 funcionam só com o clique no canto da tela.
4. **Combine a regra de tempo.** O tempo começa quando o participante tem o controle e diz “pronto”, e termina na tela-alvo ou em “terminei” ou “desisto”. Anote atrasos ou travamentos perceptíveis, com o minuto da gravação.
5. **Combine o retorno do controle.** Avise que você pode retomar o controle a qualquer momento (se travar ou se ele sair do protótipo) e que ele pode pedir uma pausa.
6. **Grave pelo Teams**, se o TCLE autorizar, com a tela compartilhada visível. Confirme que a gravação mostra o cursor do participante.

## Passo a passo

1. **Copie a página da sessão.** Para cada novo participante, copie `docs/entrega-7/integrantes/henrique-schneider/sessao-p8.md` para `sessao-p9.md` (e assim por diante), troque o código no título e nas tabelas e inclua a página em `mkdocs.yml`, na aba “Entrega 7”.
2. **Anonimize a transcrição.** Passe todas as variações do nome (nome, sobrenome, apelido):

   ```bash
   python ferramentas/sessoes/anonimizar.py transcricao.vtt --codigo P8 --nome "Nome" --nome "Nome Sobrenome" > transcricao-p8.md
   ```

   O script troca os nomes pelo código e oculta e-mails e telefones. **Leia a saída inteira**: nomes de terceiros, escolas, bairros e outros dados que identifiquem a pessoa precisam ser tirados à mão (Barbosa; Silva, 2010, cap. 5, seç. 5.4, p. 140). Publique só a versão anonimizada e guarde a original fora do repositório.
3. **Preencha a página da sessão**, na ordem das seções:
   - Seção 2: data, horário, modalidade, dispositivo, observador, TCLE, duração, link do vídeo e se vale como **sessão** ou como **teste-piloto** (o piloto é descartado dos resultados).
   - Seção 3: respostas do questionário pré-teste.
   - Seção 4: medidas por tarefa (resultado, tempo, erros, ajuda, nota), desvios e frases literais com o minuto da gravação.
   - Seção 5: respostas da entrevista pós-teste.
   - Seção 6: trechos da gravação com os minutos.
   - Seção 7: o que ficou diferente do planejamento (remota em vez de presencial, computador em vez de celular, sem observador, tarefa pulada, falha do protótipo).
   - Seção 8: link da transcrição anonimizada.
4. **Consolide as medidas.** Copie `medidas-modelo.csv`, preencha uma linha por participante e tarefa (sem o piloto) e rode:

   ```bash
   python ferramentas/sessoes/consolidar.py medidas.csv
   ```

   A saída é a Tabela 4 do [relatório da Entrega 7](../../docs/entrega-7/relatorio.md). Com um único participante, o desvio padrão não se aplica e os resultados são só indícios.
5. **Preencha o relatório da Entrega 7** (`docs/entrega-7/relatorio.md`): Seções 4.3 (participantes), 4.4 (Tabela 4), 4.5 (interpretação), 4.6 (problemas, com a severidade de Nielsen) e 4.7 (reprojeto). Cada problema precisa de uma evidência (minuto da gravação).
6. **Atualize as páginas.** Em cada página que você editar, acrescente uma linha no histórico de versões (versão +0.1, data e revisor) e atualize a declaração de uso de IA, como manda o `Refatoração/CLAUDE.md`.
7. **Confira o site** antes do PR:

   ```bash
   mkdocs build --strict
   ```

## Cuidados

- O nome do participante não pode aparecer em nenhuma página, arquivo ou nome de arquivo do site.
- Não publique trechos da gravação nem prints que mostrem o rosto sem autorização no TCLE.
- Os valores-alvo de tempo da Tabela 3 do roteiro são propostos e só valem depois da confirmação no piloto. Se mudar algum, registre a mudança no histórico do roteiro.
- Se a sessão foi o piloto, os dados dela não entram nos resultados.
