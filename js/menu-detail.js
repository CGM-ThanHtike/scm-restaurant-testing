$(document).ready(function () {

    // Swiper.js for carousel
    const swiper = new Swiper('.swiper', {
        cssMode: true,
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 0px
            0: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // filling blank heart icon on click action
    $(".blank-heart").click(function () {
        $(".filled-heart").removeClass("d-none");
        $(".blank-heart").addClass("d-none");
    })

    $(".filled-heart").click(function () {
        $(".filled-heart").addClass("d-none");
        $(".blank-heart").removeClass("d-none");
    })
})