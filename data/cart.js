export let cart ;

export function  loadcart() {  
    cart = JSON.parse(localStorage.getItem('cart')) || [
            {
                id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                quantity: 1,
                deliveryid : '1'
            },
            {
                id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
                quantity: 1,
                deliveryid : '2' 
            },
            {
                id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
                quantity: 1,
                deliveryid :  '3'
            },
            {
                id: "5968897c-4d27-4872-89f6-5bcb052746d7",
                quantity: 1,
                deliveryid : '1'
            }
        ]
}

loadcart() ;

if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function savetostorage(){
    localStorage.setItem('cart' , JSON.stringify(cart)) ;
}

export function addtoCart(productId) {
    let cartexist ;
    cart.forEach(cartelement => {
        if(cartelement.id === productId ){
            cartexist = cartelement ;
        }
    }) ;
    if(cartexist){
        cartexist.quantity +=1 ;
    }
    else{
        cart.push({
            id : productId  ,
            quantity : 1,
            deliveryid: '1'
        } ) ;
    } 
    savetostorage() ;
}

export function updateQuantity() {
    let cartQuantity = 0 ;
    cart.forEach(element => {
        cartQuantity += element.quantity ;
    }) ;
    document.querySelector('.cart-quantity').innerHTML = cartQuantity ; 
    savetostorage() ;
}

export function removecartproduct(id) {
    for (let i = cart.length - 1; i >= 0; i--) {
        if (cart[i].id === id) {
            cart.splice(i, 1);
        }
    }
    savetostorage();
}

export function updateDeliveryOption(productid , deliveryOptionid){
    let cartexist ;
    cart.forEach( cartelement => {
        if(cartelement.id === productid ){
            cartexist = cartelement ;
        }
        if (cartexist) {
            cartexist.deliveryid = deliveryOptionid ;
            savetostorage() ;
        }
    }) ;
    console.log(cart) ;
    savetostorage() ;
}