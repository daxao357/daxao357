const swiper = new Swiper('.swiper', {

    spaceBetween: 10,

    direction: 'horizontal',
    loop: false,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 1,
        },
    }
});