const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const faqs = document.querySelectorAll(".faqs")

//Abre video de youtube
document.getElementById("abrirPestana").addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=xcbL6gK_LE0", "_blank");
});

document
  .getElementById("ri-whatsapp-line")
  .addEventListener("click", function () {
    const numeroTelefono = "5493492589129"; // Reemplaza con el número de teléfono en formato internacional sin el '+'
    const mensaje =
      "Hola, quisiera agendar un turno para visitar el parque vial."; // Mensaje opcional

    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  });

document
  .getElementById("ri-whatsapp-line2")
  .addEventListener("click", function () {
    const numeroTelefono = "5493492589129"; // Reemplaza con el número de teléfono en formato internacional sin el '+'
    const mensaje =
      "Hola, quisiera agendar un turno para visitar el parque vial."; // Mensaje opcional

    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  });

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

ScrollReveal().reveal(".header__content", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 900,
});


ScrollReveal().reveal(".contenedores", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 500,
});


// SWIPER
var swiper = new Swiper(".nosotros__slide__content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
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
    },
  },
});

//LOADER

window.addEventListener("load", function () {
  document.getElementById("loader").classList.toggle("loader2");
});


//FAQ 

 faqs.forEach(faq => {
  faq.addEventListener('click', () => {

    faqs.forEach(el => el.classList.remove('active'));

    faq.classList.add('active');
  });
});

if (faqs.length > 0) {
  faqs[0].classList.add('active');
}

document.querySelectorAll('.image_container img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.popup_image').style.display = "block";
    document.querySelector('.popup_image img').src = image.getAttribute('src');
  }

  document.querySelector('.popup_image span').onclick = () => {
    document.querySelector('.popup_image').style.display = "none";
  }
} )