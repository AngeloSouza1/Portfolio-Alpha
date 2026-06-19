// ============================================================
// Seletores principais
// Aqui guardamos em constantes os elementos que serao usados
// mais de uma vez ao longo do arquivo.
// ============================================================
const header = document.querySelector(".site-header"); // Localiza e guarda o header principal da pagina.
const navToggle = document.querySelector(".nav-toggle"); // Localiza o botao hamburguer usado no menu mobile.
const siteNav = document.querySelector(".site-nav"); // Localiza o elemento que contem os links da navegacao.
const navLinks = document.querySelectorAll(".site-nav a"); // Cria uma lista com todos os links que estao dentro do menu.
const revealItems = document.querySelectorAll(".reveal"); // Cria uma lista com os elementos que receberao animacao de entrada.
const backToTop = document.querySelector(".back-to-top"); // Localiza o link do rodape usado para voltar ao topo.
const themeToggle = document.querySelector(".theme-toggle"); // Localiza o botao que alterna entre tema claro e escuro.
const root = document.documentElement; // Guarda o elemento <html>, onde o atributo data-theme sera aplicado.

const syncThemeToggle = () => { // Declara a funcao que sincroniza o estado acessivel do botao de tema.
  const isDark = root.dataset.theme === "dark"; // Verifica se o atributo data-theme do <html> esta como dark.
  themeToggle.setAttribute("aria-pressed", String(isDark)); // Informa para tecnologias assistivas se o modo escuro esta ativo.
  themeToggle.setAttribute("aria-label", isDark ? "Ativar modo claro" : "Ativar modo escuro"); // Define a proxima acao que o botao executara.
  themeToggle.setAttribute("title", isDark ? "Ativar modo claro" : "Ativar modo escuro"); // Atualiza a dica exibida quando o mouse para sobre o botao.
}; // Encerra a funcao syncThemeToggle.

// Atualiza o visual do header quando a pagina sai do topo.
const syncHeaderState = () => { // Declara a funcao que atualiza o header conforme a rolagem.
  header.classList.toggle("is-scrolled", window.scrollY > 16); // Adiciona is-scrolled depois de 16px e remove ao voltar ao topo.
}; // Encerra a funcao syncHeaderState.

// Fecha o menu mobile e sincroniza os atributos de acessibilidade.
const closeMenu = () => { // Declara uma funcao reutilizavel para fechar o menu mobile.
  document.body.classList.remove("nav-open"); // Remove a classe que bloqueia a rolagem da pagina com o menu aberto.
  siteNav.classList.remove("is-open"); // Remove a classe que deixa a navegacao mobile visivel.
  header.classList.remove("nav-active"); // Remove do header o estado visual usado enquanto o menu esta aberto.
  navToggle.setAttribute("aria-expanded", "false"); // Informa que o menu controlado pelo botao esta fechado.
}; // Encerra a funcao closeMenu.

// ============================================================
// Menu mobile
// Alterna classes CSS para abrir/fechar a navegacao em telas
// menores e atualiza aria-expanded para leitores de tela.
// ============================================================
navToggle.addEventListener("click", () => { // Executa a funcao interna sempre que o botao hamburguer for clicado.
  const isOpen = navToggle.getAttribute("aria-expanded") === "true"; // Le o atributo do botao para descobrir se o menu esta aberto.
  document.body.classList.toggle("nav-open", !isOpen); // Bloqueia ou libera a rolagem do body conforme o novo estado do menu.
  siteNav.classList.toggle("is-open", !isOpen); // Mostra o menu se estava fechado ou esconde se estava aberto.
  header.classList.toggle("nav-active", !isOpen); // Ativa ou remove o fundo do header durante a abertura do menu.
  navToggle.setAttribute("aria-expanded", String(!isOpen)); // Salva no atributo aria-expanded o novo estado do menu.
}); // Encerra o listener de clique do botao hamburguer.

// Ao clicar em qualquer link da navegacao, o menu mobile fecha.
navLinks.forEach((link) => { // Percorre cada link encontrado dentro da navegacao.
  link.addEventListener("click", closeMenu); // Chama closeMenu quando um link for clicado no mobile.
}); // Encerra o percurso da lista de links.

// O listener de scroll muda o header de transparente para solido.
window.addEventListener("scroll", syncHeaderState, { passive: true }); // Atualiza o header a cada rolagem sem bloquear o scroll.
syncHeaderState(); // Executa a verificacao do header assim que o script e carregado.
syncThemeToggle(); // Sincroniza o botao com o tema que ja estiver aplicado ao carregar.

// Alterna entre tema claro e escuro, salvando a escolha no navegador.
themeToggle.addEventListener("click", () => { // Executa a troca de tema quando o usuario clica no botao.
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark"; // Escolhe light se esta dark e dark se esta light.
  root.dataset.theme = nextTheme; // Aplica o novo tema no atributo data-theme do elemento <html>.
  localStorage.setItem("portfolio-theme", nextTheme); // Salva o tema no navegador para manter a escolha apos atualizar.
  syncThemeToggle(); // Atualiza aria-pressed, aria-label e title depois da mudanca.
}); // Encerra o listener de clique do botao de tema.

// Garante que o link do rodape sempre volte ao inicio da pagina.
backToTop.addEventListener("click", (event) => { // Executa a rolagem ao clicar no link Voltar ao topo.
  event.preventDefault(); // Impede o salto padrao do navegador para a ancora.
  window.scrollTo({ top: 0, behavior: "smooth" }); // Leva a pagina ao ponto zero com movimento suave.
}); // Encerra o listener do link Voltar ao topo.

// ============================================================
// Animacao de entrada dos cards de projeto
// IntersectionObserver observa quando os cards entram na tela.
// Quando entram, adiciona a classe is-visible e para de observar.
// ============================================================
const revealObserver = new IntersectionObserver( // Cria um observador nativo para detectar elementos entrando na tela.
  (entries) => { // Recebe uma lista com informacoes dos elementos que estao sendo observados.
    entries.forEach((entry) => { // Percorre cada elemento informado pelo IntersectionObserver.
      if (entry.isIntersecting) { // Verifica se o elemento atingiu a parte visivel definida pelo threshold.
        entry.target.classList.add("is-visible"); // Adiciona a classe que ativa a animacao de entrada no CSS.
        revealObserver.unobserve(entry.target); // Para de observar o card depois que ele anima pela primeira vez.
      } // Encerra a condicao que verifica se o elemento esta visivel.
    }); // Encerra o percurso das entradas observadas.
  }, // Encerra a funcao executada pelo IntersectionObserver.
  { threshold: 0.18 } // Dispara quando pelo menos 18% do elemento estiver visivel na tela.
); // Encerra a criacao do IntersectionObserver.

revealItems.forEach((item) => revealObserver.observe(item)); // Registra cada elemento .reveal para ser acompanhado pelo observador.
