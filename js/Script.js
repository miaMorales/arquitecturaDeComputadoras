
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
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

function unidad1Boton(){
  window.location.href = "html/unidad1.html";
}

function unidad2Boton(){
  window.location.href = "html/unidad2.html";
}

function unidad3Boton(){
  window.location.href = "html/unidad3.html";
}

function unidad4Boton(){
  window.location.href = "html/unidad4.html";
}

function practicas(){
  window.location.href = "html/practicas.html";
}