import * as mycart from '../data/cart.js' ;
import {products} from '../data/products.js' ;
import { fixmoney } from './utils/requiredFunctions.js';

let cart = mycart.cart ;
let checkoutcontainer = `` ;

function getproductdetail(id) {
    let match = "" ;
    products.forEach(productelement => {
        if(productelement.id === id ) {
            match = productelement ;
        }
    }) ;
    return match ;
}

cart.forEach(cartelement => {
    const productelement = getproductdetail(cartelement.id) ;
    checkoutcontainer += `<div class="cart-item-container js-container-id-${productelement.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
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
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked="" class="delivery-option-input" name="delivery-option-${productelement.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input" name="delivery-option-${productelement.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input" name="delivery-option-${productelement.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
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
    });
});