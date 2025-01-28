const swiper = new Swiper('.swiper_images_section_1', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000,
    spaceBetween: 15,
    navigation: {
        nextEl: '.swiper-siguiente-flecha',
        prevEl: '.swiper-atras-flecha',
    }
});