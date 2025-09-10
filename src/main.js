//-------------------IMPORT-----------------------
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './scss/style.scss'

//-------------------IMPORT MODULE-----------------------
import featuredProductsSwiper from './modules/featuredProductsSwiper.js';
import heroSwiper from './modules/heroSwiper.js';
import faqDropDownList from './modules/faqDropDownList.js';
import products from './modules/products.js';
import renderProductDetail from './modules/productDetail.js';
import feedback from './modules/feedback.js';
import modal from './modules/modal.js';
import footerDropDown from './modules/footer.js';


//-------------------------------------------------------

heroSwiper();
featuredProductsSwiper();
faqDropDownList();
renderProductDetail();
feedback();
modal();
footerDropDown();


