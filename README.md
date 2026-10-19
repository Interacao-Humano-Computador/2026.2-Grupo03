# 2026.2-Grupo03
# Projeto de Interação Humano-Computador | Grupo 03

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)](https://github.com/Interacao-Humano-Computador/2026.2-Grupo03/actions)
[![Linguagem](https://img.shields.io/badge/linguagem-Markdown-blue)](https://www.markdownguide.org/)
[![Licença](https://img.shields.io/badge/licença-CC%20BY--NC%204.0-lightgrey)](LICENSE.md)

Documentação acadêmica do projeto de **Interação Humano-Computador (IHC)** desenvolvido pelo Grupo 03. O site registra decisões, planejamento, processo de design, artefatos, contribuições individuais e atas de reunião de forma organizada, rastreável e acessível.

## Site em produção

> **[Acessar o GitHub Pages](https://interacao-humano-computador.github.io/2026.2-Grupo03/)**

## Estrutura

```text
.
├── .github/workflows/deploy.yml        ← publica o site no GitHub Pages (main)
├── docs/                                ← páginas do site (MkDocs + Material)
│   ├── index.md                         ← início e equipe
│   ├── entrega-1/                       ← Entrega 1: relatório, planejamento/, verificacao/, integrantes/<nome>/
│   ├── entrega-2/                       ← Entrega 2: relatório, perfil-e-tarefas/, contribuições, verificacao/, integrantes/<nome>/
│   ├── entrega-3/                       ← Entrega 3: relatório, principios-metas-e-guia/, contribuições, verificacao/, integrantes/<nome>/
│   ├── entrega-4/                       ← Entrega 4: relatório, planejamento-da-avaliacao/, contribuições, verificacao/, integrantes/<nome>/
│   ├── trabalhos-avaliativos/           ← trabalhos individuais de cada integrante (listas, exercícios, análises próprias)
│   ├── listas-verificacao/              ← visão geral das listas, autoavaliação e lista do projeto final
│   ├── integrantes/                     ← entregas anteriores e próximas de cada integrante; ex-integrantes
│   ├── atas/                            ← uma página por ata (modelo MCTIC) e modelo de ata
│   ├── relatorios/                      ← visão geral dos relatórios das entregas
│   ├── disciplina/                      ← Plano de Ensino
│   ├── apresentacoes.md                 ← vídeos das apresentações, inspeções e reuniões
│   └── assets/                          ← imagens, PDFs entregues e fotos de referências
├── pendencias/                          ← o que falta completar, por entrega e por integrante (fora do site)
├── Refatoração/                         ← material de referência da disciplina (fora do site)
├── REFATORACAO-RELATORIO.md             ← relatório da refatoração de 15/10/2026 (fora do site)
├── mkdocs.yml
├── requirements.txt
└── README.md
```

Em cada entrega, a pasta `integrantes/` tem uma pasta por integrante atual (`alexandre-vilar`, `gabriel-robson`, `henrique-schneider`, `joao-vitor`) com o material dele naquela entrega. Os endereços antigos das páginas redirecionam para os novos (`mkdocs-redirects`, no `mkdocs.yml`).

Cada página de artefato segue o modelo da disciplina: tabela de contribuição, histórico de versões, introdução, conteúdo, referências e agradecimentos com o uso de IA generativa. O que ainda falta completar não aparece no site: está listado nos arquivos da pasta [`pendencias/`](pendencias/README.md).

## Pré-requisitos

- Git.
- Python 3.10 ou superior.
- `pip` atualizado.

## Rodar localmente

1. Clone o repositório e entre na pasta:

   ```bash
   git clone https://github.com/Interacao-Humano-Computador/2026.2-Grupo03.git
   cd 2026.2-Grupo03
   ```

2. Crie e ative um ambiente virtual:

   ```bash
   python -m venv .venv
   # Windows PowerShell
   .\.venv\Scripts\Activate.ps1
   # macOS/Linux
   source .venv/bin/activate
   ```

3. Instale as dependências:

   ```bash
   python -m pip install --upgrade pip
   pip install -r requirements.txt
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   mkdocs serve
   ```

5. Acesse `http://127.0.0.1:8000/`. O servidor recarrega a documentação quando os arquivos Markdown são alterados.

Para gerar uma versão estática sem iniciar o servidor, execute `mkdocs build --strict`. O build deve terminar sem avisos.

## Como contribuir

- Crie uma branch curta a partir de `main`.
- Use como modelo uma página existente da mesma entrega (tabela de contribuição, histórico, introdução, referências e uso de IA) e, para atas, o modelo em `docs/atas/modelo.md` (nome do arquivo `ata-reuniao-AAAAMMDD-XX.md`).
- Registre histórico de versão, contribuição, fontes, gravações e declaração de uso de IA quando aplicável.
- Use commits pequenos no padrão `tipo: descrição`, por exemplo: `docs: adiciona ata de 12-03-2026`.
- Abra um Pull Request com descrição objetiva, evidências e pelo menos um revisor da equipe.
- Não versionar matrículas, credenciais, dados pessoais sensíveis ou links que deveriam permanecer privados.

## Acessibilidade e rastreabilidade

O tema oferece alternância entre modo claro e escuro, respeitando a preferência do sistema. Imagens devem ter texto alternativo, legenda e fonte; tabelas devem ter cabeçalhos claros, legenda, fonte e chamada no texto. O conteúdo da equipe deve apresentar apenas nomes e fotos, sem números de matrícula.

## Licença

A documentação deste projeto é disponibilizada sob a [Creative Commons BY-NC 4.0](LICENSE.md), salvo materiais de terceiros, que permanecem sujeitos às suas próprias licenças.
