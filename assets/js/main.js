// SHOW MENU
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  navCart = document.getElementById("nav-cart");

// Menu show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove Menu Mobile
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Add Blur Header
const blurHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

// Show Scroll Up
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// Scroll Section Active Link
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// Scroll Reveal Animation

const sr = ScrollReveal({
  origin: 'top',
  distance: '40px',
  opacity: 1,
  scale: 1.1,
  duration: 2500,
  delay: 300,
  // reset: true,
})

sr.reveal(`.home__data, .about__img, .about__data, .visit__data`)
// sr.reveal(`#new-data1`, {opacity: 0, origin: 'top'})
// sr.reveal(`#new-data2`, {opacity: 0, origin: 'bottom'})
// sr.reveal(`#new-data3`, {opacity: 0, origin: 'left'})

sr.reveal(`.home__image, .about__trigo`, {rotate: {z: -15}})
sr.reveal(`.home__chapeu`, {rotate: {z: 15}})
sr.reveal(`.home__footer`, {scale: 1, origin: 'bottom'})

sr.reveal(`.new__card:nth-child(1) img`, {rotate: {z: -30}, distance: 0})
sr.reveal(`.new__card:nth-child(2) img`, {rotate: {z: -30}, distance: 0, delay: 600})
sr.reveal(`.new__card:nth-child(3) img`, {rotate: {z: -30}, distance: 0, delay: 900})

sr.reveal(`.favorite__card`, {interval: 200, opacity: 0, distance: 0, origin: 'bottom'})
sr.reveal(`.footer__container, .about__esfiha`, {scale: 1})


// Click Esfiha

// modalkey global
quantEsfihas = 1

// Função para preencher os campos da janela modal
const preencherCampos = (esfiha) => {
  const modal = document.querySelector('.esfiha__window__area');
  document.querySelector('.window__img__big').src = esfiha.img;
  document.querySelector('.window__info__title').textContent = esfiha.name;
  document.querySelector('.window__info__description').textContent = esfiha.description;
  document.querySelector('.esfiha__info__actualPrice').textContent = `R$ ${esfiha.price.toFixed(2)}`;

    // Inicializar a quantidade com 1 sempre que abrir a modal
    quantEsfihas = 1;
    document.querySelector('.esfiha__info__qt').innerHTML = quantEsfihas;
};

// Função para mostrar a janela modal com fade
const mostrarModal = () => {
  const modal = document.querySelector('.esfiha__window__area');
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('visible'), 10);
};

// Função para esconder a janela modal com fade
const esconderModal = () => {
  const modal = document.querySelector('.esfiha__window__area');
  modal.classList.remove('visible');
  setTimeout(() => modal.style.display = 'none', 500); // Tempo de espera correspondente à duração da transição
};

// Adicionando o evento de clique a cada link de esfiha
const adicionarEventoEsfiha = (link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Clicou na esfiha");

    // Abrir janela modal com animação de fade
    mostrarModal();

    // Preencher os dados da esfiha
    preencherCampos(EsfihasJson[index]);

  });
};

const mudarQuantidade = () => {
  const maisButton = document.querySelector('.esfiha__button__mais');
  const menosButton = document.querySelector('.esfiha__button__menos');
  const qtElement = document.querySelector('.esfiha__info__qt');

  if (maisButton && menosButton && qtElement) {
    maisButton.addEventListener('click', () => {
      quantEsfihas++;
      qtElement.innerHTML = quantEsfihas;
    });

    menosButton.addEventListener('click', () => {
      if (quantEsfihas > 1) {
        quantEsfihas--;
        qtElement.innerHTML = quantEsfihas;
      }
    });
  }
};







// Obtendo todas as tags 'a' dentro da section com id 'favorite'
const esfihaImg = document.querySelectorAll('#favorite a');

// Adicionando o evento de clique a cada uma delas usando a arrow function
esfihaImg.forEach((link, index) => adicionarEventoEsfiha(link, index));


// Fechar e voltar modal
document.querySelector('.esfiha__info__cancelButton').addEventListener('click', esconderModal);
document.querySelector('.window__back').addEventListener('click', esconderModal);

mudarQuantidade()