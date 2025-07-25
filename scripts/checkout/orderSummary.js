import * as mycart from '../../data/cart.js' ;
import { fixmoney } from '../utils/requiredFunctions.js';  
import { deliverydetails } from '../../data/deliverydetails.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {getproductdetail} from '../../data/products.js' ;
import { renderPaymentSummary } from '../../scripts/checkout/paymentSummary.js';

export function renderPage() {
  renderPaymentSummary() ;
  let cart = mycart.cart ;
  let checkoutcontainer = `` ;

  cart.forEach(cartelement => {
      const productelement = getproductdetail(cartelement.id) ;

      let deliveryDate = "" ;
      deliverydetails.forEach( (deliveryObject) => {
        if( cartelement.deliveryid  === deliveryObject.id){
          deliveryDate = dayjs().add(deliveryObject.deliveryDays , 'days').format('dddd , MMMM D');
        }
      }) ;
  
      checkoutcontainer += `<div class="cart-item-container js-container-id-${productelement.id}">
              <div class="delivery-date">
                Delivery date: ${deliveryDate}
              </div>

              <div class="cart-item-details-grid">
                <img class="product-image" src="${productelement.image}">

                <div class="cart-item-details">
                  <div class="product-name">
                    ${productelement.name}
                  </div>
                  <div class="product-price">
                    $${fixmoney(productelement.priceCents)}
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label">${cartelement.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                      Update
                    </span>
                    <span class="delete-quantity-link link-primary" data-productid = ${productelement.id}>
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options">
                    ${generatedeliveryOptions(productelement.id , cartelement.deliveryid)}
                </div>
              </div>
            </div>` ;

  });

  document.querySelector('.order-summary').innerHTML = checkoutcontainer ;
  document.querySelectorAll('.delete-quantity-link').forEach((link) => {
      link.addEventListener('click' , ()=>{
          const partid = link.dataset.productid ;
          mycart.removecartproduct(partid) ;
          document.querySelector(`.js-container-id-${partid}`).remove() ;
          renderPaymentSummary() ;
      });
  });

  function generatedeliveryOptions(id , cartid) {
    let deliveryObjectHTML = `
      <div class="delivery-options-title">
          Choose a delivery option:
      </div>` ;
    deliverydetails.forEach((deliveryObject) => {
        const date = dayjs().add(deliveryObject.deliveryDays , 'days').format('dddd , MMMM D') ;
        const price = deliveryObject.priceCents === 0 ? 'Free' : fixmoney(deliveryObject.priceCents) ;
        deliveryObjectHTML += `
        <div class="delivery-option js-delivery-option"  data-product-id = ${id} data-delivery-id = ${deliveryObject.id}>
          <input type="radio" ${deliveryObject.id === cartid  ? 'checked' : '' } class="delivery-option-input" name="delivery-option-${id}">
          <div>
            <div class="delivery-option-date">
              ${date}
            </div>
            <div class="delivery-option-price">
              $${price}- Shipping
            </div>
          </div>
        </div>` ;
    }) ;
    return deliveryObjectHTML ;
  }

  document.querySelectorAll('.js-delivery-option').forEach((element)=>{
    element.addEventListener('click' , () => {
      const {productId , deliveryId} = element.dataset ;
      mycart.updateDeliveryOption(productId , deliveryId) ;
      renderPage() ;
      renderPaymentSummary() ;
    }) ;
  });
}

renderPage() ;