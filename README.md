# JOVI — Landing Page (Next.js)

Landing page do projeto **JOVI**, migrada de HTML + CSS + JS puro para
**React** e, nesta etapa, portada de **Vite** para **Next.js**.

> Escopo desta entrega: apenas integração/evolução para React/Next.js. Não
> foram feitas alterações de Tailwind CSS, responsividade ou Front-End
> Design — tudo isso permanece exatamente como estava.

## Tecnologias utilizadas

- [Next.js 14](https://nextjs.org/) — framework React (roteamento por
  arquivos, build e servidor de produção)
- [React 18](https://react.dev/)
- JavaScript (sem TypeScript)
- CSS puro (`src/styles/style.css`, reaproveitado da versão estática, sem
  nenhuma alteração de conteúdo)
- Node.js + npm (ambiente de desenvolvimento)

O projeto não possui backend próprio, mas consome uma API pública externa
(ver seção "Rotas, hooks e consumo de API" abaixo).

## Uso de Inteligência Artificial neste projeto

Parte do desenvolvimento técnico desta etapa — a migração inicial da
estrutura para React/Vite, a criação da rota `/materiais`, do hook
customizado `useMateriais`, da integração com a API pública
JSONPlaceholder e, nesta última etapa, a portabilidade completa do projeto
de Vite para Next.js (roteamento por arquivos, `_app`, `_document`,
`next.config.js`) — foi realizada com apoio de um assistente de IA
(Claude, da Anthropic). A IA foi usada como ferramenta de produtividade
para escrever e reorganizar o código (componentes, hooks, páginas e
chamadas `fetch`) a partir da estrutura e do conteúdo originais do projeto
JOVI; o design visual, o CSS e o conteúdo das seções da landing page são
os já existentes na versão estática do grupo e não foram alterados pela
IA. Todo o código gerado foi revisado antes da entrega.

## Rotas, hooks e consumo de API

O Next.js usa roteamento por arquivos: cada arquivo em `src/pages/` já é
uma rota, sem necessidade de `react-router-dom`.

- **`/`** (`src/pages/index.jsx`) — a landing page original do JOVI, sem
  nenhuma alteração visual ou de comportamento.
- **`/materiais`** (`src/pages/materiais.jsx`) — página de demonstração
  técnica de consumo de API. Usa o hook customizado
  `src/hooks/useMateriais.js`, que faz `fetch` na API pública gratuita
  [JSONPlaceholder](https://jsonplaceholder.typicode.com) (sem necessidade
  de chave), controla os estados de carregamento/erro/dados e expõe uma
  função `recarregar()`. É possível chegar até ela pelo link **"Materiais
  (API)"** no menu do cabeçalho.

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm (instalado junto com o Node.js)

## Instalação das dependências

Na raiz do projeto (`jovi-next-project/`), rode:

```bash
npm install
```

## Como executar o projeto (ambiente de desenvolvimento)

```bash
npm run dev
```

Acesse `http://localhost:3000`.

## Como gerar a build de produção

```bash
npm run build
npm run start
```

- `npm run build` gera a build otimizada do Next.js (pasta `.next/`).
- `npm run start` sobe um servidor Node.js de produção servindo essa build.

## Servidores de Back-end

Este projeto não possui back-end/API própria — é uma aplicação Next.js
(front-end). A única chamada de rede é o `fetch` feito no navegador, pelo
hook `useMateriais`, para a API pública JSONPlaceholder. Portanto, não há
servidor adicional para subir.

## Usuários e senhas de teste

Não há sistema de autenticação/login neste projeto, portanto não há
usuários ou senhas de teste a informar.

## Estrutura do projeto

```
jovi-next-project/
├── next.config.js
├── package.json
├── INTEGRANTES.TXT
├── .gitignore
├── public/
│   └── midia/                 # imagens e vídeos (servidos como estáticos)
└── src/
    ├── styles/
    │   ├── style.css           # CSS original, sem alterações
    │   └── materiais.css       # CSS exclusivo da página /materiais
    ├── data/
    │   ├── theme.js
    │   └── equipe.js
    ├── hooks/
    │   └── useMateriais.js     # hook customizado de consumo de API
    ├── components/
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── Problema.jsx
    │   ├── Solucoes.jsx
    │   ├── Publico.jsx
    │   ├── Galeria.jsx
    │   ├── Equipe.jsx
    │   └── Contato.jsx
    └── pages/
        ├── _app.jsx            # importa o CSS global (style.css/materiais.css)
        ├── _document.jsx       # <html lang="pt-br"> e favicon
        ├── index.jsx           # landing page original (rota "/")
        └── materiais.jsx       # demo de API (rota "/materiais")
```

## Preparação para Git / Vercel

Os comandos abaixo são só para você copiar, colar e executar no seu
terminal — nenhum deploy ou push foi feito por aqui.

### 1. Inicializar o repositório Git e subir para o GitHub

```bash
cd jovi-next-project
git init
git add .
git commit -m "feat: migração do projeto JOVI de Vite para Next.js"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

> Troque `SEU_USUARIO/SEU_REPOSITORIO` pela URL do repositório que você
> criar no GitHub.

### 2. Deploy no Vercel via CLI

```bash
npm install -g vercel
vercel login
vercel
```

O Vercel detecta automaticamente que é um projeto Next.js e já configura o
build (`next build`) e o start corretos — não é preciso preencher nada
manualmente.

Para subir direto em produção depois do primeiro deploy de preview:

```bash
vercel --prod
```

### 3. Deploy via GitHub + painel do Vercel (alternativa sem CLI)

1. Suba o projeto para o GitHub com os comandos do passo 1.
2. Em https://vercel.com/new, importe o repositório.
3. Confirme o framework preset **Next.js** (detectado automaticamente).
4. Clique em **Deploy**.

## Links

- **Link do Deploy (Vercel):** _[preencher depois do deploy]_
- **Link do Repositório (GitHub):** _[preencher com a URL do repositório]_

## Equipe — Drakon

| Integrante | Função |
|---|---|
| Antonio do Nascimento | Desenvolvedor Python / Analista de Requisitos |
| Guilherme Pereira | Front-end / Desenvolvedor Python |
| Gustavo Leal | UX Design / Front-end |
| Matheus Mendes | Desenvolvedor Python / Documentação Técnica |
| Matheus Sato | Pesquisa & Análise de Mercado |
