var mySwiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Récupérez toutes les swiper-slides
const slides = document.querySelectorAll('.swiper-slide');

// Parcourez toutes les swiper-slides
slides.forEach((slide) => {
  // Récupérez toutes les images (.listImg .img-fluid) de cette swiper-slide
  const images = slide.querySelectorAll('.listImg .img-fluid');

  // Ajoutez un gestionnaire d'événements de clic à chaque image
  images.forEach((image) => {
    image.addEventListener('click', () => {
      // Récupérez l'attribut "src" de l'image cliquée
      const src = image.getAttribute('src');

      // Définissez l'attribut "src" de l'image (.img-fluid, avant .listImg) de la même swiper-slide avec la valeur de "src"
      const mainImage = slide.querySelector('.img-fluid:not(.listImg)');
      mainImage.setAttribute('src', src);
    });
  });
});



