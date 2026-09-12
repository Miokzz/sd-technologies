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
- Papel `#f5f4ef`, tinta `#172027`, azul `#0754dd`, cinzas esverdeados para pausas na leitura.
- Curvas longas e diagonais derivam do símbolo oficial. A imagem oficial é preservada dentro do SVG de transparência; não há novo logotipo.
- O encontro de Samuel e David aparece na composição da marca, no `&`, no texto e no encerramento.
- Serviços em elementos `details` nativos. Processo organizado pelo que o cliente acompanha e recebe, sem timeline de círculos.

## Movimento

Movimento curto, preciso e com desaceleração: `cubic-bezier(.22,1,.36,1)`. A marca assenta ao entrar em cena. O parallax foi removido para impedir colisões com a legenda durante o scroll. O observador deixa de observar cada elemento após sua entrada. Nenhum loop permanente, recorte de texto ou conteúdo inicialmente invisível. `prefers-reduced-motion` elimina animações e transições e mantém todo o conteúdo legível.

## Capacidade

Composição da própria S&D, explicitamente identificada como experimento. Formatos alteram largura e proporção reais. Grids reservam espaços independentes para texto, marca e legendas; unidades de container dimensionam a tipografia. Os controles ficam ao lado da prévia no desktop e acima dela no celular. Peso modifica a fonte variável. Temas preservam as cores da marca. Repetição de movimento e reset funcionam por estado React. Não há site fictício, mockup de navegador ou cliente inventado.

## Refinamento integral — 12/09/2026

A segunda revisão responde à solicitação de remover o fundo da logo, corrigir sobreposições e tornar o site mais convincente para potenciais clientes.

- O símbolo original permanece incorporado no SVG. Um filtro altera apenas o alfa, removendo o fundo branco e a franja clara. A tentativa de edição automática foi descartada por alterar o resultado.
- A abertura apresenta argumento e chamada antes da arte no celular. Marca e legendas ocupam áreas distintas, sem posições absolutas concorrentes.
- Serviços apresentam modalidade, indicação e entregáveis; benefícios explicam identidade, clareza e facilidade de uso. Processo explicita escopo, investimento, prazo e responsabilidades antes do início.
- Menu indica a seção atual e fecha por Escape, clique fora ou seleção. FAQ, fechamento e rodapé têm tipografia e espaçamento revisados.
- Auditoria visual de todas as seções, no desktop e em telas pequenas. Verificação de 126 combinações: sete larguras (320, 375, 430, 768, 1024, 1440 e 1920), três formatos, três cores e pesos extremos 300/800. Nenhuma colisão entre os blocos da composição, corte da prévia ou overflow horizontal detectado.
- Todas as perguntas e serviços abertos nas sete larguras: textos sem extravasamento e âncoras válidas. Reset e Escape conferidos por interação real no navegador.

## Escopo atualizado

O usuário pediu a remoção completa do contato em 12/09/2026. Formulário, endpoint e CTAs de contato foram removidos; nenhuma entrega de lead é simulada.

## Limpeza

Removidos componentes e seções antigos, CSS não importado, script estático paralelo, assets inválidos e aproximação SVG do logotipo. Framer Motion, Tailwind e PostCSS foram removidos por não serem necessários. Layout e conteúdo permanecem no servidor; apenas navegação, experimento e observação de movimento são componentes cliente.
