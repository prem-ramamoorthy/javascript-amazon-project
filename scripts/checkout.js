import {renderPage} from '../scripts/checkout/orderSummary.js';
import {renderPaymentSummary} from '../scripts/checkout/paymentSummary.js' ;
// import { getProducts } from '../data/products.js';

getProducts (() => {
    renderPage() ;
    renderPaymentSummary() ;
})