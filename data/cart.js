export const cart = [] ;

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
            quantity : 1 
        } ) ;
    } 
}

export function updateQuantity() {
    let cartQuantity = 0 ;
    cart.forEach(element => {
        cartQuantity += element.quantity ;
    }) ;
    document.querySelector('.cart-quantity').innerHTML = cartQuantity ; 
}