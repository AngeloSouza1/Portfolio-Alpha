// ============================================================
// Seletores principais
// Aqui guardamos em constantes os elementos que serao usados
// mais de uma vez ao longo do arquivo.
// ============================================================
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const revealItems = document.querySelectorAll(".reveal");
const backToTop = document.querySelector(".back-to-top");
const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;

const syncThemeToggle = () => {
  const isDark = root.dataset.theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Ativar modo claro" : "Ativar modo escuro");
  themeToggle.setAttribute("title", isDark ? "Ativar modo claro" : "Ativar modo escuro");
};

// Atualiza o visual do header quando a pagina sai do topo.
const syncHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

// Fecha o menu mobile e sincroniza os atributos de acessibilidade.
const closeMenu = () => {
  document.body.classList.remove("nav-open");
  siteNav.classList.remove("is-open");
  header.classList.remove("nav-active");
  navToggle.setAttribute("aria-expanded", "false");
};

// ============================================================
// Menu mobile
// Alterna classes CSS para abrir/fechar a navegacao em telas
// menores e atualiza aria-expanded para leitores de tela.
// ============================================================
navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  document.body.classList.toggle("nav-open", !isOpen);
  siteNav.classList.toggle("is-open", !isOpen);
  header.classList.toggle("nav-active", !isOpen);
  navToggle.setAttribute("aria-expanded", String(!isOpen));
});

// Ao clicar em qualquer link da navegacao, o menu mobile fecha.
navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// O listener de scroll muda o header de transparente para solido.
window.addEventListener("scroll", syncHeaderState, { passive: true });
syncHeaderState();
syncThemeToggle();

// Alterna entre tema claro e escuro, salvando a escolha no navegador.
themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
  syncThemeToggle();
});

// Garante que o link do rodape sempre volte ao inicio da pagina.
backToTop.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ============================================================
// Animacao de entrada dos cards de projeto
// IntersectionObserver observa quando os cards entram na tela.
// Quando entram, adiciona a classe is-visible e para de observar.
// ============================================================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));
