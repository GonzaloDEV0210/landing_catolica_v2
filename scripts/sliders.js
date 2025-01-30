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

const swiper_2 = new Swiper('#swiper_slide2', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000,
    spaceBetween: 15,
    navigation: {
        nextEl: '.slide2_flecha_siguiente',
        prevEl: '.slide2_flecha_atras',
    }
});

const swiper_3 = new Swiper('#swiper_slide3', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000,
    spaceBetween: 15,
    navigation: {
        nextEl: '.flecha_slider3_siguiente',
        prevEl: '.flecha_slider3_atras',
    }
});

const swiper_4 = new Swiper('#swiper4', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000,
    spaceBetween: 50,
    navigation: {
        nextEl: '.icono_flecha_slider4_siguiente',
        prevEl: '.icono_flecha_slider4_atras',
    },
    breakpoints: {
        800: {
            slidesPerView: 2,
            spaceBetween: -50,
        }
    }
});

const swiper_opiniones = new Swiper('#swiper_opiniones', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000,
    spaceBetween: 50,
    navigation: {
        nextEl: '.flecha_opiniones_siguiente',
        prevEl: '.flecha_opiniones_atras',
    },
    breakpoints: {
        800: {
            slidesPerView: 2,
            spaceBetween: -50,
        }
    }
});