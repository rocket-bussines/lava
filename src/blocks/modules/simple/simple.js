import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper(".swiper", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
});