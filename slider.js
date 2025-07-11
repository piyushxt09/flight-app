const bestOffersSwiper = new Swiper('.best-offers-swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


const popularDestinationsSwiper = new Swiper('.popular-destinations-swiper', {
    slidesPerView: 2,
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 2,
        }
    }
});





const swiper = new Swiper('.myBannerSwiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'slide',
    speed: 600,
});




const bestHotelsSwiper = new Swiper('.best-hotels-swiper', {
    slidesPerView: 2,
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 2,
        }
    }
});