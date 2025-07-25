class Cart{
    cartList ;
    #localStorageKey ;

    constructor(key){
        this.#localStorageKey = key ;
        this.loadcart() ;
    }

    loadcart() {  
        this.cartList = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [
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

    savetostorage(){
        localStorage.setItem(this.#localStorageKey , JSON.stringify(this.cartList)) ;
    }

    addtoCart(productId) {
            let cartexist ;
            this.cartList.forEach(cartelement => {
                if(cartelement.id === productId ){
                    cartexist = cartelement ;
                }
            }) ;
            if(cartexist){
                cartexist.quantity +=1 ;
            }
            else{
                this.cartList.push({
                    id : productId  ,
                    quantity : 1,
                    deliveryid: '1'
                } ) ;
            } 
            this.savetostorage() ;
        }
    
    updateQuantity() {
            let cartQuantity = 0 ;
            this.cartList.forEach(element => {
                cartQuantity += element.quantity ;
            }) ;
            document.querySelector('.cart-quantity').innerHTML = cartQuantity ; 
            this.savetostorage() ;
        }

    removecartproduct(id) {
            for (let i = this.cartList.length - 1; i >= 0; i--) {
                if (this.cartList[i].id === id) {
                    this.cartList.splice(i, 1);
                }
            }
            this.savetostorage();
        }

    updateDeliveryOption(productid , deliveryOptionid){
            let cartexist ;
            this.cartList.forEach( cartelement => {
                if(cartelement.id === productid ){
                    cartexist = cartelement ;
                }
                if (cartexist) {
                    cartexist.deliveryid = deliveryOptionid ;
                    this.savetostorage() ;
                }
            }) ;
            this.savetostorage() ;
        }
}

let cart = new Cart('cart-oop')  ;