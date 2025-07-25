import * as mycart from '../data/cart.js' ;
import { products as amazonproducts } from '../data/products.js';

// getProducts(renderFunc) ;

function renderFunc() {
  let cart = mycart.cart ;
  let products = amazonproducts ;
  let productsHtml = "" ;

  products.forEach((element) => {
      productsHtml  += `<div class="product-container">
            <div class="product-image-container">
              <img class="product-image" src="${element.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
              ${element.name}
            </div>

            <div class="product-rating-container">
              <img class="product-rating-stars" src= ${element.getImage() }>
              <div class="product-rating-count link-primary">
                ${element.rating.count}
              </div>
            </div>

            <div class="product-price">
              ${element.getPrice()}
            </div>

            <div class="product-quantity-container">
              <select>
                <option selected="" value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            ${element.getSizeChart()}

            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <img src="images/icons/checkmark.png">
              Added
            </div>

            <button class="add-to-cart-button button-primary js-cart" data-product-id = ${element.id} >
              Add to Cart
            </button>
          </div>` ;
  });

  document.querySelector('.products-grid').innerHTML = productsHtml ;

  document.querySelectorAll('.js-cart').forEach(element => {
      element.addEventListener('click' , () => {
          let productId = element.dataset.productId ;
          mycart.addtoCart(productId) ;
          mycart.updateQuantity() ;
      });
  });
}