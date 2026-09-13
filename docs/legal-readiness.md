# Documentos legais e publicação

Foram preparados `/legal`, `/termos`, `/privacidade` e `/cookies`, com identidade visual do site, índice, navegação entre documentos, canonical próprio e estilo de impressão.

## Informação ainda não fornecida

- Nome completo ou razão social do responsável pela S&D; CNPJ somente se existente.
- E-mail para solicitações de privacidade, autorizado para publicação.

Esses dados foram solicitados ao usuário. Não usar e-mails encontrados em contas GitHub/Vercel como contato da empresa sem autorização. Não inventar CNPJ ou responsável.

Enquanto `src/config/legal.ts` mantiver `complete: false`, os documentos são acessíveis apenas no desenvolvimento local, com aviso de preparação e `noindex`. Em produção, as rotas retornam 404, não há links para elas e não entram no sitemap. As animações funcionam normalmente em produção.

Após receber os dados, preencher a identificação, conferir sua correspondência com os textos, ajustar `complete` e publicar pelo GitHub no projeto Vercel existente. Isso ativa os links no rodapé e inclui as rotas no sitemap.

## Auditoria que orientou a redação

- Não há formulários, contas, pagamentos, APIs de leads, analytics ou pixels na aplicação.
- Não há uso de document.cookie, localStorage ou sessionStorage no código do site.
- As escolhas do experimento são estado React temporário.
- Fontes e imagens são servidas no mesmo site. A infraestrutura é a Vercel.
- Não foram inventados prazo de retenção de logs, categorias de cookies, condições de cancelamento ou garantias comerciais.
- Os termos tratam do uso do site. Proposta/contrato de prestação de serviços continuam sendo documentos próprios, a definir por projeto.

Fontes consultadas em 12/09/2026: [LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm), [Aviso da Vercel](https://vercel.com/legal/privacy-notice), [DPA da Vercel](https://vercel.com/legal/dpa). Os textos são uma minuta adaptada ao site, não uma certificação de conformidade jurídica nem substituto de avaliação profissional sobre a operação real da empresa.
