# SEO e discoverability

Origem pública: https://sd-technologies.vercel.app. Projeto Vercel existente:
`sd-technologies` (`prj_Hy8Y4Pnjb0IXiqJEcWDDqPgGGuqv`), equipe
`miokzzs-projects`, publicação pelo GitHub a partir de `main`.

## Decisões

- O sitemap contém `/`, `/legal`, `/termos`, `/privacidade` e `/cookies`.
- `lastModified` foi omitido: o projeto não mantém uma fonte confiável da última
  alteração significativa por URL. A data do build não representa atualização
  do conteúdo; a versão visível dos documentos legais também não acompanha todas
  as alterações das páginas. Só reintroduzir o campo com uma fonte mantida e
  verificável, nunca com a data corrente ou uma constante artificial.
- As quatro páginas legais usam `src/config/metadata.ts` para alinhar canonical,
  Open Graph e Twitter ao título, descrição e URL da própria página. A imagem
  oficial da marca permanece compartilhada.
- Identidade, conteúdo comercial, documentos legais e direção visual preservados.
- O favicon usa uma cópia PNG de 96 × 96 do logo oficial quadrado, em vez do
  SVG retangular usado na interface. O original permanece intacto. A redução
  determinística usa o `sharp` já instalado pelo Next.js, sem nova dependência.
  Isso evita baixar o original de 1,25 MB a cada navegação sem cache.
- JSON-LD `Organization` descreve apenas os dados existentes de S&D, Samuel e
  David. Não há dados locais suficientes para justificar `LocalBusiness`.
- Nenhum rastreador, token de verificação, dependência, `llms.txt` ou markup
  especial de IA foi adicionado.

Referências: [datas no sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap),
[favicon na pesquisa](https://developers.google.com/search/docs/appearance/favicon-in-search)
e a documentação da versão instalada do Next.js em
`node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md`
(herança e substituição de campos aninhados).

## Verificação e manutenção

Rodar `pnpm lint`, `pnpm typecheck` e `pnpm build`. Inspecionar os arquivos finais
em `.next/server/app`: `sitemap.xml.body`, `robots.txt.body` e os HTMLs de cada rota.
Confirmar cinco URLs canônicas, ausência de datas sem fonte e `index, follow`
nas páginas públicas. Validar links/fragmentos, conteúdo no HTML inicial,
metadados sociais por página, imagem social e favicon acessíveis.

No `pnpm start`, verificar desktop e mobile com Playwright CLI, páginas legais,
menu, FAQ, console/rede e uma rota inexistente com HTTP 404 e `noindex`.
Após publicar, repetir o smoke test diretamente na origem pública, incluindo
HTTP → HTTPS, normalização de barra final, robots e sitemap. Um 404 solicitado
deliberadamente aparece no console/rede e deve ser separado de falhas inesperadas.

`NEXT_PUBLIC_SITE_URL`, quando configurada, deve conter a origem de produção,
sem caminho ou barra final; nunca localhost ou o endereço de preview. Na ausência
da variável, a origem oficial é usada. Os aliases de preview consultados na
auditoria estavam protegidos por autenticação Vercel e `X-Robots-Tag: noindex`.

Rollback: reverter o commit da correção via Git, preservando o histórico, e
aguardar o deploy da integração GitHub/Vercel. Não enviar arquivos pela API.

## Ações na conta do proprietário

Não foi acessada uma conta do Google Search Console ou Bing Webmaster Tools.
A disponibilidade técnica das páginas não comprova que estejam indexadas.

1. No Search Console, verificar uma propriedade de prefixo de URL para
   `https://sd-technologies.vercel.app/`. Usar o arquivo HTML ou token real
   fornecido pelo Google; se necessário, incorporar esse valor em uma alteração
   própria. Não há token fictício no projeto.
2. Enviar `https://sd-technologies.vercel.app/sitemap.xml`, inspecionar a home
   e acompanhar indexação, canonical selecionado e relatórios de pesquisa.
3. Se o proprietário usar Bing Webmaster Tools, verificar a mesma origem
   (ou importar a propriedade verificada do Search Console) e enviar o sitemap.

Google Business Profile depende de elegibilidade e fatos locais reais, ainda
não estabelecidos. Analytics continua ausente por decisão do projeto; não é
um requisito para indexação nem uma integração pendente desta correção.
