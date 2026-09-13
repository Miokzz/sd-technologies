# Evolução visual — 13/09/2026

## Diagnóstico e direção

A base já tinha uma arquitetura enxuta em Next.js 16: conteúdo renderizado no servidor, componentes cliente delimitados e identidade oficial. A abertura dependia do símbolo ampliado; benefícios e títulos tinham cadência repetitiva; a prova interativa aparecia depois dos serviços.

A direção atual é um estúdio editorial de design e desenvolvimento. O encontro entre os dois campos aparece na peça tipográfica da abertura e no experimento que o visitante pode controlar. A narrativa parte do valor do negócio, demonstra o trabalho e explica serviços, processo e proximidade dos fundadores.

- Papel quente `#f2f0e9`, tinta `#232622`, azul `#164be8` e verde claro `#dfe4cc`.
- Manrope variável e Instrument Serif preservadas, com itálico reservado aos contrapontos da composição.
- Hero assimétrico: título em três linhas, bloco comercial recuado e cartaz tipográfico com ampersand. A escala acompanha a largura; o cartaz ganha um espaço próprio no celular.
- O experimento vem antes dos serviços. Prévia à esquerda e controles à direita no desktop; prévia antes dos controles no celular, com ordem de leitura equivalente no DOM.
- Serviços em linhas expansíveis com indicação, escopo e entregáveis. Processo organizado pelo que o cliente acompanha e recebe. Tipografia dos fundadores, pausa cromática e assinatura final dão ritmo ao fechamento.
- Movimento curto e pontual, sem rolagem controlada por JavaScript ou loops. Conteúdo permanece legível antes da hidratação e com movimento reduzido.

## Preservado

Marca oficial e seus arquivos, Samuel e David, ofertas reais, URLs, metadados, páginas legais, navegação por âncoras, foco visível e expansões nativas. A versão monocromática da marca no experimento é aplicada por CSS, sem redesenhar o símbolo.

A decisão anterior de não oferecer contato continua em vigor. Não foram criados formulário, envio de leads, canal fictício, métricas comerciais, clientes, cases ou depoimentos. Nenhuma dependência foi adicionada. Até a conclusão desta etapa local, não havia sido feito commit, push ou publicação remota. A entrega em produção é uma etapa posterior, autorizada separadamente.

## Iterações visuais

1. Inspeção da versão anterior em navegador e implementação da nova composição.
2. Primeira leitura visual completa: hero, demonstração, serviços, processo, equipe, FAQ e rodapé em desktop e celular.
3. Revisão da ordem do estúdio no mobile, de títulos repetitivos e da legibilidade de legendas.
4. Correção de uma colisão identificada no formato amplo: as linhas do grid e a imagem agora respeitam a altura disponível. Verificação dos três formatos com pesos extremos.
5. Segunda passagem visual em mobile, tablet e desktop. Revisão independente e correção da semântica dos nomes dos fundadores, da imagem decorativa em links de marca e do contraste da numeração.

## Verificação

- `pnpm lint`, `pnpm typecheck` e `pnpm build` executados com sucesso. Todas as páginas continuam estáticas.
- `pnpm audit --prod`: nenhuma vulnerabilidade conhecida reportada.
- `git diff --check`: sem erros de whitespace.
- Playwright contra o build de produção: **126 combinações** de sete larguras (320, 360, 390, 768, 1024, 1440 e 1920), três formatos, três temas e pesos 300/800. Nenhum corte, colisão entre os blocos ou overflow horizontal detectado.
- Menu mobile: abrir, Escape com retorno de foco, seleção de seção e fechamento. Todas as âncoras internas têm destino.
- Sete expansões verificadas por teclado. Expansão com animação e encerramento durante resize também verificados. FAQ nativo funciona com JavaScript desabilitado.
- Formato, tema, peso, reset e replay testados. Movimento reduzido elimina animações e transições.
- `/legal`, `/termos`, `/privacidade` e `/cookies`: HTTP 200, um h1 e sem overflow. Rota inexistente: HTTP 404 com retorno à home.
- Nenhum erro de execução ou falha de request registrado durante a suíte no navegador.
- Lighthouse mobile local no candidato de produção: desempenho **98**, boas práticas **100**, SEO **100**; LCP 2,4 s, TBT 60 ms e CLS 0. São medições de laboratório local, não dados de visitantes em produção.
- A primeira medição apontou acessibilidade 96. O contraste foi corrigido e a auditoria dirigida do build passou a **100 em acessibilidade**. Um apontamento adicional, não pontuado, exigiu espaço explícito entre os textos da marca para coincidir com seu nome acessível. Após a correção, a execução completa do axe no build final retornou **zero violações** e 46 checks aprovados.
- Revisão independente concluída; único achado resolvido e confirmado pelo revisor.

Artefatos locais de inspeção e relatórios ficam em `.audit/`, fora do versionamento e do lint de aplicação. A sessão de navegador mantém uma prévia local para revisão. Não foram executados testes em dispositivos físicos ou medição de campo em produção.
