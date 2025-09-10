//-------------------IMPORT-----------------------
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

//------------------------------------------------
 function heroSwiper() {
    const heroSwiper = new Swiper('.hero-swiper', {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        navigation: {

        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
};

export default heroSwiper;