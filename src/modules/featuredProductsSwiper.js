
//-------------------IMPORT-----------------------
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import products from './products.js';

//------------------------------------------------

const productContainer = document.querySelector('.featured-products__swiper-wrapper');
function renderProductsSwiper() {
    products.forEach(product => {
        const color = product.colors[0];
        const image = color.images[0];
        const altText = `Image of ${product.title} (${color.label}) product`;
        const slide = document.createElement('li');
        slide.classList.add('swiper-slide', 'featured-products__item');

        slide.innerHTML = `
            <a class="product-card" href="#" alt="Link to product ${product.title}">
              <picture class="product-card__picture">
                <source type="image/webp"
                  srcset="${image.webp["1x"]} 1x, ${image.webp["2x"]} 2x">
                <img class="product-card__image" src="${image.png["1x"]}"
                  srcset="${image.png["2x"]} 2x" alt="${altText}"
                  width="312" height="312">
              </picture>
              <h3 class="product-card__title">${product.title}</h3>
              <span class="product-card__price">$${color.price.toFixed(2)}</span>
            </a>
    `;

        productContainer.appendChild(slide);
    });
}

renderProductsSwiper(products.length);

function featuredProductsSwiper() {
    const featuredProductsSwiper = new Swiper('.featured-products__swiper', {
        modules: [Navigation],
        slidesPerView: 4,
        spaceBetween: 24,
        loop: false,
        navigation: {
            nextEl: '.featured-products__btn--next',
            prevEl: '.featured-products__btn--prev',
        },
        pagination: false,
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },
            450: {
                slidesPerView: 1.3,
                spaceBetween: 10,
            },
            450: {
                slidesPerView: 1.4,
                spaceBetween: 10,
            },
            568: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            700: {
                slidesPerView: 2.2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            870: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1000: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
    });
};

export default featuredProductsSwiper;
