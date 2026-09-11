# S&D Technologies

Site institucional oficial da S&D Technologies, empresa de tecnologia e soluções digitais criada por Samuel e David.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Vercel (produção)

## Desenvolvimento local

```bash
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## Validação antes de publicar

```bash
npm run lint
npm run typecheck
npm run build
```

A branch de desenvolvimento também possui CI em `.github/workflows/ci.yml` para repetir lint, TypeScript e build antes da publicação.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e configure apenas o que for necessário.

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_SITE_URL`: URL canônica do site.
- `NEXT_PUBLIC_CONTACT_EMAIL`: e-mail exibido na interface.
- `NEXT_PUBLIC_WHATSAPP_URL`: link completo do WhatsApp.
- `NEXT_PUBLIC_INSTAGRAM_URL`: link completo do Instagram.
- `CONTACT_WEBHOOK_URL`: endpoint server-side para receber leads do formulário.
- `CONTACT_WEBHOOK_SECRET`: token Bearer opcional enviado ao webhook.

Nenhum segredo deve ser enviado ao repositório.

## Estrutura

```text
src/
  app/                 # App Router, metadata, sitemap, robots, API e estilos
  components/          # Componentes reutilizáveis e interativos
  config/              # Configuração central, serviços e projetos
  lib/                 # Validação e utilidades
  sections/            # Seções da homepage
  types/               # Tipos compartilhados
public/
  brand/               # Logo oficial e símbolo
  assets/projects/     # Imagens reais de trabalhos futuros
```

## Onde editar conteúdo

A maior parte dos dados comerciais está em `src/config/site.ts`. Ali ficam nome, descrição, fundadores, contatos, navegação, serviços, visão futura, processo e FAQ.

## Como adicionar projetos no futuro

A seção de portfólio atual é deliberadamente honesta e não inventa trabalhos. Quando os primeiros projetos existirem:

1. Edite a coleção vazia em `src/config/projects.ts`.
2. Adicione imagens reais em `public/assets/projects/`.
3. Evolua `src/sections/portfolio.tsx` para renderizar essa coleção.
4. Mantenha descrição, escopo e resultados verificáveis.

## Formulário

O formulário valida os dados no cliente e novamente na rota `POST /api/contact`.

A rota encaminha o lead para `CONTACT_WEBHOOK_URL`. Isso permite conectar depois um serviço de e-mail, CRM, automação ou uma Edge Function sem expor credenciais no navegador.

## Supabase

Supabase não é obrigatório na versão inicial. Se for adotado depois, a recomendação é criar uma tabela `leads`, habilitar RLS e receber os dados através de uma rota server-side ou Edge Function, nunca expondo `service_role` ao cliente.

## Deploy

O fluxo esperado é:

1. projeto validado;
2. commit no GitHub;
3. repositório conectado a um único projeto Vercel;
4. variáveis configuradas na Vercel;
5. deploy de produção;
6. revisão visual e funcional da URL publicada.

## Domínio

Quando houver um domínio próprio, conecte-o ao projeto Vercel e altere `NEXT_PUBLIC_SITE_URL` para a URL final de produção. Depois faça um novo deploy para atualizar canonical, sitemap, robots e JSON-LD.
