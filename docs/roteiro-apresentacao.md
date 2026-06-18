# Roteiro de Apresentacao do Projeto

Este documento e um roteiro para apresentar o Portfolio Alpha ao professor.
A ideia e explicar o que o projeto faz, onde cada funcionalidade esta no codigo
e como os criterios do escopo foram atendidos.

## 1. Visao geral do projeto

- Projeto: Portfolio pessoal estatico de Angelo Souza.
- Objetivo: apresentar perfil profissional, habilidades, projetos e canais de contato.
- Tecnologias usadas:
  - HTML5 semantico.
  - CSS3 puro com variaveis, Grid, Flexbox, responsividade e animacoes.
  - JavaScript vanilla para menu mobile, modo escuro, scroll e animacao dos cards.
  - Figma para prototipo desktop/mobile e guia visual.
  - GitHub Pages para deploy.

Locais principais:

- HTML principal: `index.html`
- CSS principal: `assets/css/styles.css`
- JavaScript principal: `assets/js/script.js`
- Imagens: `assets/images/`
- Prints e materiais de documentacao: `docs/screenshots/`
- Explicacao tecnica complementar: `docs/explicacao-codigo.md`
- Checklist do Figma: `docs/figma-checklist.md`

## 2. Links importantes

- Deploy: `https://angelosouza1.github.io/Portfolio-Alpha/`
- Repositorio: `https://github.com/AngeloSouza1/Portfolio-Alpha`
- Figma: `https://www.figma.com/design/LKi1Q4s2SkE2mPfnmsjHV6/Portfolio-Angelo-Souza---T7G22`

## 3. Estrutura de arquivos

```text
.
├── assets/
│   ├── css/styles.css
│   ├── images/
│   │   ├── hero-workspace.png
│   │   ├── perfil.jpg
│   │   └── projects/
│   └── js/script.js
├── docs/
│   ├── explicacao-codigo.md
│   ├── figma-checklist.md
│   ├── roteiro-apresentacao.md
│   └── screenshots/
├── index.html
└── README.md
```

Como explicar:

- `index.html` e o corpo da pagina.
- `styles.css` e a aparencia visual.
- `script.js` e o comportamento/interacao.
- `README.md` e a documentacao publica para o GitHub.

## 4. Funcionalidades do site

### 4.1 Header fixo

Onde esta:

- HTML: `index.html`, linhas 22 a 64.
- CSS: `assets/css/styles.css`, linhas 105 a 263.
- JS relacionado: `assets/js/script.js`, linhas 23 a 55.

O que faz:

- Fica fixo no topo da pagina.
- Mostra a marca `A Angelo`.
- Mostra navegacao para `Sobre`, `Habilidades`, `Projetos` e `Contato`.
- Tem botao de modo escuro.
- No mobile, mostra botao hamburguer.

Pontos para explicar:

- `header` tem `id="topo"` para permitir voltar ao inicio.
- Os links do menu usam ancoras internas, por exemplo `href="#sobre"`.
- O JavaScript adiciona classe quando a pagina rola, mudando o visual do header.

### 4.2 Modo escuro

Onde esta:

- Script inicial no HTML: `index.html`, linhas 12 a 17.
- Botao no HTML: `index.html`, linhas 30 a 46.
- Variaveis de tema claro/escuro: `styles.css`, linhas 6 a 42.
- Icones do botao: `styles.css`, linhas 184 a 209.
- Logica JS: `script.js`, linhas 15 a 20 e 58 a 64.

O que faz:

- Alterna entre modo claro e modo escuro.
- Salva a escolha do usuario no `localStorage`.
- Troca o icone entre lua e sol.
- Atualiza textos acessiveis como `aria-label` e `title`.

Como explicar:

- O tema escuro nao troca classe no `body`; ele grava `data-theme="dark"` no elemento `<html>`.
- No CSS, `[data-theme="dark"]` substitui as variaveis de cor.
- Isso facilita manutencao porque as secoes usam `var(--color-bg)`, `var(--color-surface)`, etc.

### 4.3 Hero section

Onde esta:

- HTML: `index.html`, linhas 67 a 90.
- CSS: `styles.css`, linhas 269 a 368.
- Imagem: `assets/images/hero-workspace.png`.

O que faz:

- E a primeira dobra do site.
- Mostra nome, especialidade e chamada para acao.
- Usa imagem de fundo com overlay escuro para manter a leitura do texto.
- Tem botoes para `Projetos` e `Contato`.

Pontos para explicar:

- A imagem e decorativa, por isso usa `alt=""` e `aria-hidden="true"`.
- O overlay e feito com `linear-gradient` no `hero::after`.
- O titulo usa `span` para controlar as quebras de linha.

### 4.4 Sobre mim

Onde esta:

- HTML: `index.html`, linhas 92 a 127.
- CSS: `styles.css`, linhas 374 a 454.
- Foto: `assets/images/perfil.jpg`.

O que faz:

- Apresenta Angelo Souza.
- Mostra foto e texto em layout de duas colunas no desktop.
- No mobile, vira uma coluna.

Pontos para explicar:

- A secao usa `section` com `id="sobre"`.
- A foto usa `figure`, que e semanticamente melhor para midia.
- O CSS usa `grid-template-areas` para posicionar titulo, imagem e texto.

### 4.5 Habilidades

Onde esta:

- HTML: `index.html`, linhas 129 a 186.
- CSS: `styles.css`, linhas 456 a 553.

O que faz:

- Mostra quatro cards de tecnologia:
  - Ruby on Rails.
  - Python.
  - JavaScript Vanilla.
  - Kotlin.

Pontos para explicar:

- Cada habilidade e um `article`, porque cada card tem conteudo independente.
- Os icones SVG sao decorativos e usam `aria-hidden="true"`.
- Os cards tem hover com borda, sombra e faixa colorida no topo.

### 4.6 Projetos

Onde esta:

- HTML: `index.html`, linhas 188 a 294.
- CSS: `styles.css`, linhas 555 a 649.
- JS de animacao: `script.js`, linhas 72 a 89.
- Imagens dos projetos:
  - `assets/images/projects/pagamento-gateway.svg`
  - `assets/images/projects/amigo-secreto.svg`
  - `assets/images/projects/send-ticket.svg`

O que faz:

- Mostra tres projetos selecionados do GitHub.
- Cada card tem imagem, categoria, titulo, descricao, tags e link para o repositorio.
- Os cards entram com animacao quando aparecem na tela.

Pontos para explicar:

- A classe `reveal` marca os cards que devem animar.
- O JavaScript usa `IntersectionObserver` para observar quando o card entra no viewport.
- Quando entra, o JS adiciona `.is-visible`, e o CSS aplica a transicao.

### 4.7 Contato

Onde esta:

- HTML: `index.html`, linhas 296 a 360.
- CSS: `styles.css`, linhas 651 a 724.

O que faz:

- Substitui formulario por links diretos.
- Tem e-mail, GitHub e LinkedIn.
- Usa icones SVG.

Links:

- E-mail: `mailto:angeloafdesouza@gmail.com`
- GitHub: `https://github.com/AngeloSouza1`
- LinkedIn: `https://www.linkedin.com/in/angeloafsouza/`

Pontos para explicar:

- Foi usado `<address>` porque a area contem canais de contato.
- Os links externos usam `target="_blank"` e `rel="noreferrer"`.
- O e-mail abre o cliente de e-mail do usuario.

### 4.8 Rodape e voltar ao topo

Onde esta:

- HTML: `index.html`, linhas 363 a 369.
- CSS: `styles.css`, linhas 730 a 767.
- JS: `script.js`, linhas 66 a 70.

O que faz:

- Mostra credito do projeto.
- Tem link `Voltar ao topo`.
- O clique usa JavaScript para rolar suavemente para o topo.
- No modo escuro, o rodape usa regra especifica para manter texto escuro.

Pontos para explicar:

- O link tem `href="#topo"` como fallback.
- O JavaScript intercepta o clique com `event.preventDefault()`.
- Depois chama `window.scrollTo({ top: 0, behavior: "smooth" })`.

## 5. Explicacao do HTML por blocos

### Linhas 1 a 20: base do documento

- Linha 1: `<!DOCTYPE html>` informa que o documento usa HTML5.
- Linha 2: `lang="pt-BR"` define o idioma da pagina.
- Linhas 3 a 20: `<head>` guarda metadados, SEO, titulo, script inicial do tema, preload e CSS.
- Linhas 5 a 6: `charset` e `viewport` garantem acentos e responsividade.
- Linhas 7 a 10: `description` ajuda buscadores e compartilhamento.
- Linha 11: titulo da aba do navegador.
- Linhas 12 a 17: aplica o tema salvo antes do CSS carregar.
- Linha 18: `preload` antecipa a imagem principal.
- Linha 19: carrega o CSS.

### Linhas 22 a 64: header

- Linha 23: cria o header fixo com `id="topo"`.
- Linhas 25 a 28: marca clicavel.
- Linhas 30 a 55: grupo de botoes do header.
- Linhas 32 a 46: botao do modo escuro com icones SVG.
- Linhas 49 a 54: botao hamburguer para mobile.
- Linhas 58 a 63: menu de navegacao por ancoras.

### Linhas 66 a 90: hero

- Linha 66: abre o conteudo principal com `<main>`.
- Linha 68: cria a primeira secao.
- Linhas 70 a 72: imagem decorativa de fundo.
- Linhas 74 a 89: conteudo visivel do hero.
- Linhas 76 a 80: titulo principal.
- Linhas 85 a 88: botoes de acao.

### Linhas 92 a 127: sobre mim

- Linha 93: secao com `id="sobre"`.
- Linhas 95 a 98: rotulo e titulo.
- Linhas 99 a 101: foto de perfil.
- Linhas 102 a 125: texto de apresentacao.

### Linhas 129 a 186: habilidades

- Linha 130: secao com `id="habilidades"`.
- Linhas 132 a 135: cabecalho da secao.
- Linhas 137 a 184: quatro cards em `article`.

### Linhas 188 a 294: projetos

- Linha 189: secao de projetos.
- Linhas 196 a 292: grid com tres cards.
- Linhas 197, 229 e 261: cards marcados com `reveal` para animacao.
- Linhas 217 a 224, 249 a 256 e 281 a 288: links para o GitHub.

### Linhas 296 a 360: contato

- Linha 297: secao com `id="contato"`.
- Linhas 299 a 305: texto principal.
- Linhas 308 a 358: lista semantica de canais de contato.

### Linhas 363 a 374: footer e script

- Linhas 364 a 369: rodape.
- Linha 367: link de voltar ao topo.
- Linha 372: carrega o JavaScript no fim do `body`.

## 6. Explicacao do CSS por blocos

### Linhas 1 a 42: variaveis e tema

- `:root` guarda as variaveis do tema claro.
- `[data-theme="dark"]` substitui essas variaveis no modo escuro.
- Vantagem: as secoes nao precisam receber varias classes; elas apenas usam as variaveis.

### Linhas 44 a 99: reset e base

- `box-sizing: border-box` melhora previsibilidade de medidas.
- `scroll-behavior: smooth` suaviza ancoras.
- `body` define fonte, cor e fundo.
- `.sr-only` esconde texto visualmente, mas mantem para leitor de tela.
- `.section-shell` centraliza o conteudo e limita largura.

### Linhas 105 a 263: header e navegacao

- `.site-header` fica fixo com `position: fixed`.
- `.is-scrolled` e `.nav-active` mudam fundo, sombra e cor.
- `.brand` e `.brand__mark` montam o logo.
- `.site-nav` organiza o menu desktop.
- `.theme-toggle` estiliza o botao de tema.
- `.nav-toggle` e as regras de `nth-child` criam o hamburguer e o X.

### Linhas 269 a 368: hero e botoes

- `.hero` usa `min-height: 100svh` para ocupar a primeira dobra.
- `.hero::after` cria o overlay escuro.
- `.hero__media img` usa `object-fit: cover`.
- `clamp()` nos titulos adapta o tamanho em telas diferentes.
- `.button` define estilo comum dos botoes.

### Linhas 374 a 454: sobre mim

- `.section` controla espacamento vertical.
- `.about-layout` usa CSS Grid.
- `grid-template-areas` organiza titulo, foto e texto.
- `.about-media img` usa `aspect-ratio`, `object-fit` e borda arredondada.

### Linhas 456 a 553: habilidades

- `.skills-grid` cria grade com 4 colunas.
- `.skill-card` tem borda, sombra, padding e transicao.
- `.skill-card::before` cria a faixa colorida que aparece no hover.
- `.skill-card__icon` estiliza os SVGs.

### Linhas 555 a 649: projetos

- `.projects-grid` cria 3 colunas no desktop.
- `.project-card` inicia invisivel com `opacity: 0` e deslocado.
- `.project-card.is-visible` e ativado pelo JS.
- Hover aumenta sombra, muda borda e aplica leve escala na imagem.

### Linhas 651 a 724: contato

- `.contact-layout` herda grid de duas colunas.
- `.contact-copy` fica sticky no desktop.
- `.contact-link` organiza icone e texto.
- Hover muda icone e cria microinteracao.

### Linhas 730 a 767: footer

- `.site-footer` estiliza rodape.
- Regras de `[data-theme="dark"] .site-footer` corrigem contraste no modo escuro.

### Linhas 773 a 793: animacoes e acessibilidade

- `@keyframes heroEnter` cria entrada suave do hero.
- `prefers-reduced-motion` reduz animacoes para usuarios que preferem menos movimento.

### Linhas 799 a 914: responsividade

- `@media (max-width: 900px)` ajusta layout para tablet/mobile.
- Menu desktop vira menu escondido.
- Grids viram uma coluna.
- `@media (max-width: 560px)` ajusta header, hero, botoes e imagem dos projetos em celulares.

## 7. Explicacao linha por linha do JavaScript

Arquivo: `assets/js/script.js`

### Linhas 1 a 13: seletores principais

- Linhas 1 a 5: comentario separando a area de seletores.
- Linha 6: pega o header pelo seletor `.site-header`.
- Linha 7: pega o botao hamburguer.
- Linha 8: pega a navegacao principal.
- Linha 9: pega todos os links do menu.
- Linha 10: pega todos os elementos com `.reveal`, usados na animacao dos projetos.
- Linha 11: pega o link do rodape para voltar ao topo.
- Linha 12: pega o botao de modo escuro.
- Linha 13: guarda o elemento raiz `<html>`, usado para aplicar `data-theme`.

### Linhas 15 a 20: funcao `syncThemeToggle`

- Linha 15: declara a funcao.
- Linha 16: verifica se o tema atual e escuro.
- Linha 17: atualiza `aria-pressed`, importante para acessibilidade.
- Linha 18: troca o `aria-label` entre "Ativar modo claro" e "Ativar modo escuro".
- Linha 19: troca o `title`, que aparece como dica ao passar o mouse.
- Linha 20: fecha a funcao.

### Linhas 22 a 25: funcao `syncHeaderState`

- Linha 22: comentario explicando a funcao.
- Linha 23: declara a funcao.
- Linha 24: adiciona ou remove `.is-scrolled` se o scroll passar de 16px.
- Linha 25: fecha a funcao.

### Linhas 27 a 33: funcao `closeMenu`

- Linha 27: comentario explicando que a funcao fecha o menu mobile.
- Linha 28: declara a funcao.
- Linha 29: remove `nav-open` do `body`, liberando a rolagem.
- Linha 30: remove `is-open` da navegacao.
- Linha 31: remove `nav-active` do header.
- Linha 32: atualiza `aria-expanded` para `false`.
- Linha 33: fecha a funcao.

### Linhas 35 a 46: clique no botao hamburguer

- Linhas 35 a 39: comentario de organizacao.
- Linha 40: adiciona um listener de clique no botao.
- Linha 41: verifica se o menu ja esta aberto.
- Linha 42: liga/desliga a classe `nav-open` no `body`.
- Linha 43: liga/desliga a classe `is-open` na navegacao.
- Linha 44: liga/desliga a classe `nav-active` no header.
- Linha 45: atualiza `aria-expanded` com `true` ou `false`.
- Linha 46: fecha o listener.

### Linhas 48 a 51: fechar menu ao clicar em links

- Linha 48: comentario.
- Linha 49: percorre todos os links do menu.
- Linha 50: em cada link, adiciona clique chamando `closeMenu`.
- Linha 51: fecha o `forEach`.

### Linhas 53 a 56: inicializacao do header e tema

- Linha 53: comentario.
- Linha 54: escuta o evento de scroll e chama `syncHeaderState`.
- Linha 55: executa `syncHeaderState()` uma vez ao carregar.
- Linha 56: executa `syncThemeToggle()` uma vez ao carregar.

### Linhas 58 a 64: clique no modo escuro

- Linha 58: comentario.
- Linha 59: adiciona clique ao botao de tema.
- Linha 60: decide o proximo tema: se esta escuro, muda para claro; se nao, muda para escuro.
- Linha 61: escreve o tema no atributo `data-theme` do `<html>`.
- Linha 62: salva a escolha no `localStorage`.
- Linha 63: sincroniza textos e estados do botao.
- Linha 64: fecha o listener.

### Linhas 66 a 70: voltar ao topo

- Linha 66: comentario.
- Linha 67: adiciona clique ao link do rodape.
- Linha 68: impede o comportamento padrao do link.
- Linha 69: rola a pagina para o topo com animacao suave.
- Linha 70: fecha o listener.

### Linhas 72 a 89: animacao dos cards de projeto

- Linhas 72 a 76: comentario explicando o `IntersectionObserver`.
- Linha 77: cria o observador.
- Linha 78: recebe as entradas observadas.
- Linha 79: percorre cada entrada.
- Linha 80: verifica se o elemento entrou na tela.
- Linha 81: adiciona `.is-visible` ao card.
- Linha 82: para de observar aquele card depois da primeira animacao.
- Linha 83: fecha o `if`.
- Linha 84: fecha o `forEach`.
- Linha 85: fecha a funcao do observer.
- Linha 86: define `threshold: 0.18`, ou seja, dispara quando 18% do card aparece.
- Linha 87: fecha a criacao do observer.
- Linha 89: manda o observer observar todos os itens com `.reveal`.

## 8. Criterios do escopo e como foram atendidos

### 8.1 Figma

Onde esta documentado:

- `README.md`, secao `Prototipo Figma`.
- `docs/figma-checklist.md`.

Como foi feito:

- Foram criados prototipos para desktop e mobile.
- Foi criado Style Guide com cores, fonte e componentes.
- O link publico do Figma foi incluido no README.

### 8.2 HTML semantico

Onde apontar:

- `index.html`, linhas 22, 58, 66, 68, 93, 130, 189, 197, 297, 308 e 364.

Tags usadas:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<figure>`
- `<address>`
- `<footer>`

Como explicar:

- A estrutura nao foi feita apenas com `div`.
- Cada parte da pagina usa uma tag com sentido semantico.

### 8.3 CSS moderno

Onde apontar:

- Variaveis: `styles.css`, linhas 6 a 42.
- Grid: `styles.css`, linhas 386 a 400, 460 a 464, 555 a 557.
- Flexbox: `styles.css`, linhas 109 a 112, 127 a 131, 336 a 340.
- Media queries: `styles.css`, linhas 799 a 914.

Como explicar:

- As cores e medidas principais foram centralizadas em variaveis.
- Grid foi usado em secoes com colunas, como Sobre, Habilidades e Projetos.
- Flexbox foi usado para alinhar header, botoes e grupos menores.
- Media queries fazem a pagina se adaptar ao mobile.

### 8.4 Responsividade

Onde apontar:

- `styles.css`, linhas 799 a 914.

Como foi feita:

- Em telas ate 900px:
  - menu vira mobile;
  - grids viram uma coluna;
  - contato deixa de ser sticky;
  - foto sobre mim reduz largura.
- Em telas ate 560px:
  - altura do header muda;
  - hero ajusta imagem e titulo;
  - botoes ficam em largura total;
  - imagens de projeto ficam menores.

### 8.5 Animacoes nativas

Onde apontar:

- Hover de links do menu: `styles.css`, linhas 211 a 230.
- Hover de botoes: `styles.css`, linhas 343 a 358.
- Hover de skills: `styles.css`, linhas 475 a 533.
- Animacao dos projetos: `styles.css`, linhas 559 a 583 e `script.js`, linhas 77 a 89.
- Keyframe do hero: `styles.css`, linhas 773 a 782.

Como explicar:

- Tudo foi feito com `transition`, `transform`, `@keyframes` e JavaScript nativo.
- Nao foi usada biblioteca de animacao.
- Os cards de projeto aparecem quando entram na tela.

### 8.6 JavaScript vanilla

Onde apontar:

- `assets/js/script.js`, arquivo inteiro.

Funcionalidades:

- Abrir/fechar menu mobile.
- Fechar menu ao clicar em link.
- Alterar estado visual do header no scroll.
- Alternar modo claro/escuro.
- Salvar tema no `localStorage`.
- Voltar ao topo com scroll suave.
- Animar cards com `IntersectionObserver`.

### 8.7 Acessibilidade basica

Onde apontar:

- `index.html`, linhas 25, 35 a 37, 49 a 50, 58, 68, 93, 130, 189, 297 e 308.
- `styles.css`, linhas 84 a 93.
- `script.js`, linhas 17 a 19, 32 e 45.

Como explicar:

- Uso de `aria-label`, `aria-expanded`, `aria-controls`, `aria-hidden` e `aria-labelledby`.
- Texto visualmente escondido com `.sr-only` para o botao do menu.
- O botao de tema atualiza estado acessivel.

### 8.8 Deploy

Onde esta:

- README, secao `Deploy`.
- GitHub Pages: `https://angelosouza1.github.io/Portfolio-Alpha/`

Como explicar:

- O deploy foi feito pelo GitHub Pages.
- A branch usada foi `main`.
- A pasta publicada foi `/(root)`.

## 9. Ordem sugerida para apresentar

1. Mostrar o site publicado no GitHub Pages.
2. Mostrar rapidamente o Figma:
   - desktop;
   - mobile;
   - style guide.
3. Explicar a estrutura de arquivos.
4. Abrir `index.html` e mostrar:
   - header;
   - hero;
   - secoes;
   - contato;
   - footer.
5. Abrir `styles.css` e mostrar:
   - variaveis;
   - dark mode;
   - responsividade;
   - animacoes.
6. Abrir `script.js` e explicar:
   - menu mobile;
   - modo escuro;
   - voltar ao topo;
   - animacao dos cards.
7. Mostrar README com:
   - link do deploy;
   - link do Figma;
   - prints;
   - checklist concluido.

## 10. Falas curtas para usar na apresentacao

### Sobre o objetivo

"O objetivo do projeto foi construir um portfolio pessoal do zero, usando apenas
HTML, CSS e JavaScript puro, passando por Figma, desenvolvimento, documentacao,
GitHub e deploy."

### Sobre o HTML

"No HTML eu tentei manter uma estrutura semantica. Por isso usei header, nav,
main, section, article, address e footer, em vez de montar tudo apenas com div."

### Sobre o CSS

"No CSS eu centralizei cores e medidas em variaveis. Isso facilitou o modo
escuro, porque o tema altera as variaveis e o restante do layout acompanha."

### Sobre o JavaScript

"O JavaScript ficou responsavel pelas interacoes: menu mobile, modo escuro,
estado do header no scroll, voltar ao topo e animacao de entrada dos cards."

### Sobre responsividade

"A responsividade foi feita com media queries. No desktop as secoes usam grids
em colunas; no mobile esses grids viram uma coluna, e os botoes ocupam a largura
da tela."

### Sobre animacoes

"As animacoes sao nativas. Usei transition, transform, keyframes e
IntersectionObserver. Nao usei bibliotecas externas."

### Sobre deploy

"O projeto esta publicado pelo GitHub Pages, a partir da branch main e da raiz
do repositorio."

## 11. Checklist rapido antes de apresentar

- Abrir o deploy e testar o site.
- Testar o botao de modo escuro.
- Testar o menu mobile diminuindo a tela ou usando inspecionar.
- Clicar nos links de projetos.
- Clicar nos links de contato.
- Clicar em `Voltar ao topo`.
- Abrir README e mostrar links de Figma/deploy.
- Abrir `script.js` para explicar as funcoes principais.
