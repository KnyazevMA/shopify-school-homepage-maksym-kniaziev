import products from './products.js';

function renderGallery(product, state) {
    const color = product.colors.find(c => c.name === state.color);
    const mainImage = color.images[state.imageIndex];

    const selectImg = color.images.map((img, index) => {
        return `

            <button class="product-detail__btn-img ${index === state.imageIndex ? 'product-detail__btn-img--active' : ''}"" data-index="${index}" type="button" aria-label="${product.title} photo enlargement button">
                <picture class="product-detail__picture">
                    <source type="image/webp"
                    srcset="${img.webp["1x"]} 1x, ${img.webp["2x"]} 2x">
                    <img class="product-detail__image" src="${img.png["1x"]}"
                    srcset="${img.png["2x"]} 2x" alt="Small photo of the product ${product.title}""
                    width="88" height="88">
                </picture>
            </button>

        `;
    }).join('');

    return ` 
        <div class="product-detail__wrapper-big-img">
            <picture class="product-detail__picture product-detail__picture--big">
                <source type="image/webp"
                srcset="${mainImage.webp["1x"]} 1x, ${mainImage.webp["2x"]} 2x">
                <img class="product-detail__image product-detail__image--big" src="${mainImage.png["1x"]}"
                srcset="${mainImage.png["2x"]} 2x" alt="Photo of ${product.title} product""
                width="88" height="88">
           </picture>
            <span class="product-detail__image-badge">
                <svg class="header__logo-icon" width="20" height="20" aria-hidden="true">
                <use xlink:href="images/sprite.svg#star-icon"></use>
                </svg>
                <span class="product-detail__image-bage-text">Highly Rated</span>
            </span>
        </div>
        <div class="product-detail__wrapper-btn-img">
            ${selectImg}
        </div>
  `
}

function renderColorOption(product, state) {
    return product.colors.map(color => {
        const isChecked = color.name === state.color ? 'checked' : '';
        return `
            <label class="custom-radio">
                <input class="custom-radio__field" type="radio" name="color" id="color-${color.name}" value="${color.name}" ${isChecked}>
                <span class="custom-radio__visual custom-radio__visual--img">
                    <picture class="product-detail__picture product-detail__picture--big">
                        <source type="image/webp"
                        srcset="${color.prewiewImg.webp["1x"]} 1x, ${color.prewiewImg.webp["2x"]} 2x">
                        <img class="custom-radio__img" src="${color.prewiewImg.png["1x"]}"
                        srcset="${color.prewiewImg.png["2x"]} 2x" alt="Small photo of the product ${color.title}""
                        width="88" height="88">
                    </picture> 
                </span>
            </label>
        `
    }).join('');
}

function renderSizeOption(activeColor) {
    return activeColor.sizes.map(size => {
        const value = size
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[()]/g, '');

        return `
            <label class="custom-radio">
                <input class="custom-radio__field" type="radio" name="size" value="${value}">
                <span class="custom-radio__visual">${size}</span>
            </label>
        `
    }).join('');
}

function renderInfo(product, state) {
    const activeColor = product.colors.find(c => c.name === state.color);

    const ColorOptionHTML = renderColorOption(product, state);
    const SizeOptionHTML = renderSizeOption(activeColor);


    return `
            <h2 class="product-detail__title">${product.title}</h2>
            <span class="product-detail__price">$${activeColor.price.toFixed(2)}</span>
            <form class="product-detail__form" action="POST">
              <fieldset class="product-detail__option-color">
              ${ColorOptionHTML}
              </fieldset>
              <fieldset class="product-detail__option-size">
                <legend class="product-detail__legend">Choose size:</legend>
                <div class="product-detail__size-label-inner">
                ${SizeOptionHTML}
                </div>
              </fieldset>
              <button class="btn btn--big product-detail__btn" type="submit" disabled>Add To Bag</button>
            </form>
            <p class="product-detail__description">
              Let your attitude have the edge in your Nike Air Max Plus, a Tuned Air experience that offers premium
              stability and unbelievable cushioning.
            </p> 
    `;
}

function initSizeSelection() {
    const sizeInputs = document.querySelectorAll('input[name="size"]');
    const addToCartBtn = document.querySelector('.product-detail__btn');

    addToCartBtn.disabled = true;

    sizeInputs.forEach(input => {
        input.addEventListener('change', () => {
            if (document.querySelector('input[name="size"]:checked')) {
                addToCartBtn.disabled = false;
            }
        });
    });
}

function initImageSelection(product, state) {
    const thumbButtons = document.querySelectorAll('.product-detail__btn-img');

    thumbButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.index, 10);
            state.imageIndex = index;
            const galleryWrapper = document.querySelector('.product-detail__inner-left');
            galleryWrapper.innerHTML = renderGallery(product, state);
            initImageSelection(product, state);
        });
    });
}

function initColorSelection(product, state) {
    const colorInputs = document.querySelectorAll('input[name="color"]');

    colorInputs.forEach(input => {
        input.addEventListener('change', () => {
            state.color = input.value;
            state.imageIndex = 0;

            const galleryWrapper = document.querySelector('.product-detail__inner-left');
            galleryWrapper.innerHTML = renderGallery(product, state);

            const infoWrapper = document.querySelector('.product-detail__inner-right');
            infoWrapper.innerHTML = renderInfo(product, state);

            initSizeSelection();
            initImageSelection(product, state);
            initColorSelection(product, state);
        });
    });
}

function renderProductDetail(product) {
    product = products[4];
    const state = { color: product.colors[0].name, imageIndex: 0 };

    const galleryWrapper = document.querySelector('.product-detail__inner-left');
    galleryWrapper.innerHTML = renderGallery(product, state);

    const infoWrapper = document.querySelector('.product-detail__inner-right');
    infoWrapper.innerHTML = renderInfo(product, state);

    initSizeSelection();
    initImageSelection(product, state);
    initColorSelection(product, state);
}



export default renderProductDetail;