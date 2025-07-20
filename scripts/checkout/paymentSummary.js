import {getproductdetail} from '../../data/products.js' ;
import {cart} from '../../data/cart.js' ;
import {fixmoney} from '../utils/requiredFunctions.js' ;
import { getdeliverydetail } from '../../data/deliverydetails.js';

export function renderPaymentSummary() {
    let itemstotal = 0 ;
    let shippingtotal = 0 ;
    let totalItems = 0 ;
    cart.forEach(cartObject => {
        totalItems+=1 ;
        const productDetail = getproductdetail(cartObject.id) ;
        const deliveryDetails = getdeliverydetail(cartObject.deliveryid) ;
        itemstotal += productDetail.priceCents * cartObject.quantity ;
        shippingtotal += deliveryDetails.priceCents  ;
    });
    const totalBeforeTax = itemstotal + shippingtotal ;
    const taxcents = totalBeforeTax * 0.10 ;
    const total = totalBeforeTax + taxcents ;
    let orderSummaryhtml = `
    <div class="payment-summary">
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${totalItems}):</div>
            <div class="payment-summary-money">$${fixmoney(itemstotal)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${fixmoney(shippingtotal)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${fixmoney(totalBeforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${fixmoney(taxcents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${fixmoney(total)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
        </div>` ;
    document.querySelector('.payment-summary').innerHTML = orderSummaryhtml ;
}