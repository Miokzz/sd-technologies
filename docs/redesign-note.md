# Direção S&D — dois olhares, uma direção

## Diagnóstico

Base recebida: commit `7c824d8`, branch `main`, repositório oficial `Miokzz/sd-technologies`. Produção Vercel: `sd-technologies`, projeto `prj_Hy8Y4Pnjb0IXiqJEcWDDqPgGGuqv`.

O site publicado acumulava grid decorativo, rótulos em inglês, numeração repetitiva e várias versões de componentes. A fonte publicada aparecia como uma serif de fallback. O SVG do símbolo era uma aproximação poligonal da marca. Dois arquivos raster antigos não decodificavam corretamente. O script estático apresentava uma mensagem de formulário sem entregar leads e tinha encadeamento inválido de listeners. A seção de prova não tinha o ID `capacidade`.

Preservados: nome, símbolo raster oficial com curvas corretas, fundadores, escopo comercial, URL, estrutura Next.js, SEO e histórico Git.

## Referências consultadas

Os dois vídeos anexados foram examinados por sequências de quadros. A referência de Victor Bueno enfatiza escala e cor; a de bebidas apresenta mudanças de composição e direção de movimento. Não foram usados seus layouts, marcas, imagens nem código.

Pesquisa complementar: [Dribbble](https://dribbble.com/shots/popular), [21st.dev](https://21st.dev/), [Studio Dumbar](https://studiodumbar.com/) e [Exat no Codrops](https://tympanus.net/codrops/2026/04/10/the-exat-microsite-pushing-a-typography-showcase-to-new-creative-extremes/). A pesquisa informou ritmo e tipografia como material interativo, não forneceu componentes prontos.

## Sistema visual

- Manrope variável: estrutura e peso ajustável. Instrument Serif: contraponto humano, com uso pontual de itálico.
- Papel `#f4f3ed`, tinta `#181a1c`, azul `#074cde`, cinzas esverdeados para pausas na leitura.
- Diagonais, curvas longas e recortes derivam do símbolo oficial. A imagem oficial é preservada; não há novo logotipo.
- O encontro de Samuel e David aparece na composição da marca, no `&`, no texto e no encerramento.
- Serviços em elementos `details` nativos. Processo organizado pelo que o cliente acompanha e recebe, sem timeline de círculos.

## Movimento

Movimento curto, preciso e com desaceleração: `cubic-bezier(.22,1,.36,1)`. A marca acompanha discretamente o scroll; a composição tipográfica recorta e assenta seus elementos. Nenhum loop permanente. Scroll nativo, animações fora de viewport pausadas, listeners removidos ao desmontar. `prefers-reduced-motion` elimina animações e transições e mantém todo o conteúdo legível.

## Capacidade

Composição da própria S&D, explicitamente identificada como experimento. Formatos alteram a largura real; container queries reorganizam texto e símbolo. Peso modifica a fonte variável. Temas trocam cores com contraste. Repetição de movimento e reset funcionam por estado React. Não há site fictício, mockup de navegador ou cliente inventado.

## Escopo atualizado

O usuário pediu a remoção completa do contato em 12/09/2026. Formulário, endpoint e CTAs de contato foram removidos; nenhuma entrega de lead é simulada.

## Limpeza

Removidos componentes e seções antigos, CSS não importado, script estático paralelo, assets inválidos e aproximação SVG do logotipo. Framer Motion, Tailwind e PostCSS foram removidos por não serem necessários. Layout e conteúdo permanecem no servidor; apenas navegação, experimento e observação de movimento são componentes cliente.
