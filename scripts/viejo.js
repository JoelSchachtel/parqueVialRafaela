const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
}

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

//Header

ScrollReveal().reveal(".header__container img", {
  duration: 1000,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1000,
});

// About
 
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content h3", {
  ...scrollRevealOption,
  delay: 500
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000
});
ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 1500
});
ScrollReveal().reveal(".t1", {
  ...scrollRevealOption,
  delay: 500
});

ScrollReveal().reveal(".t2", {
  ...scrollRevealOption,
  delay: 1000
});

ScrollReveal().reveal(".slide__container", {
  ...scrollRevealOption,
  delay: 1000
});

//Abre video de youtube
document.getElementById("abrirPestana").addEventListener("click", function() {
  window.open("https://www.youtube.com/watch?v=xcbL6gK_LE0", "_blank");
});

//Abre chat de whatsapp
document.getElementById("abrirWhatsApp").addEventListener("click", function() {
  const numeroTelefono = "5493492589129"; // Reemplaza con el número de teléfono en formato internacional sin el '+'
  const mensaje = "¡Hola! Quisiera agendar un turno para visitar el parque vial."; // Mensaje opcional

  const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
});


var swiper = new Swiper(".slide__content", {
  slidesPerView: 3,
  spaceBetween: 25,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  loop: true,
  pagination: {
    el: "swiper-pagination", 
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    }
  }
});

