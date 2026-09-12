# S&D Technologies

Site oficial de Samuel e David. Repositório: `Miokzz/sd-technologies`. Produção: https://sd-technologies.vercel.app/.

## Desenvolvimento

Node.js 24 e pnpm 11.19.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Verificação

```sh
pnpm lint
pnpm typecheck
pnpm build
```

A integração contínua executa os mesmos comandos. `pnpm-lock.yaml` fixa a árvore de dependências. A única instalação com script permitida é o resolvedor nativo do ESLint.

## Estrutura

- `src/components/studio-site.tsx`: conteúdo e seções renderizados no servidor.
- `src/components/navigation.tsx`: menu responsivo, Escape e foco.
- `src/components/capability.tsx`: experimento interativo em `#capacidade`.
- `src/components/motion-system.tsx`: um observador de visibilidade e atualizações de scroll sob demanda, com limpeza ao desmontar.
- `src/components/brand-mark.tsx`: símbolo oficial, sem redesenho.
- `src/app/styles/studio.css`: sistema visual, responsividade, container queries e reduced motion.
- `src/config/site.ts`: identidade e URL canônica.
- `src/app/layout.tsx`, `robots.ts`, `sitemap.ts`: fontes locais geradas pelo Next.js, metadados e descoberta.

Não há portfólio fictício, métricas, clientes ou depoimentos inventados. O experimento é identificado como trabalho autoral da S&D.

## Contato

Por decisão expressa dos fundadores nesta revisão, não há seção de contato, formulário, endpoint de leads nem integração externa. Não configurar serviços de recebimento até que um contato comercial seja definido.

## Publicação

Usar **somente** o projeto Vercel existente `sd-technologies` (`prj_Hy8Y4Pnjb0IXiqJEcWDDqPgGGuqv`) na equipe `miokzzs-projects`. A branch de produção é `main`. `vercel.json` declara Next.js, instalação congelada e build pnpm. O deploy deve ter o GitHub como origem; não enviar arquivos diretamente pela API.

O estado anterior foi preservado em `codex/before-brand-redesign-20260912`. Para desfazer, usar revert dos commits do redesign, preservando histórico.

## Variáveis

Nenhum segredo é necessário. `NEXT_PUBLIC_SITE_URL` é opcional; por padrão, canonical, JSON-LD e sitemap apontam para a URL oficial, mesmo nos previews.

## Direção e validação

Veja `docs/redesign-note.md` para a direção visual, decisões e registro de verificação.
