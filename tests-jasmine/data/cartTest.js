import {cart , addtoCart , loadcart } from '../../data/cart.js' ;

describe("Test Suite : addToCart " , () => {
    it('Adding Existing Values' , () => {
        spyOn(localStorage, 'getItem').and.callFake(() => { // Mocking the getItems by returning Fake Value of  []
            return JSON.stringify([
                {
                    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    quantity: 1,
                    deliveryid : '1'
                }
            ]) ;
        });
        spyOn(localStorage, 'setItem'); // Freasing the setItems to prevent storing items in localStorage 
        console.log(localStorage.getItem('cart') ) ;
        loadcart() ;
        addtoCart('15b6fc6f-327a-4ec4-896f-486349e85a3d') ; // Adding new item in the cart for testing purpose 
        expect(cart.length).toEqual(1) ; // Expecting the length is equal to 1 
        expect(localStorage.setItem).toHaveBeenCalledTimes(1) ;
        expect(cart[0]).toEqual({
                id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                quantity: 2,
                deliveryid : '1'
            }) ;
    });

    it('Adding New Value to the Cart' , () => {
        spyOn(localStorage, 'getItem').and.callFake(() => { // Mocking the getItems by returning Fake Value of  []
            return JSON.stringify([]) ;
        });
        spyOn(localStorage, 'setItem'); // Freasing the setItems to prevent storing items in localStorage 
        // console.log(localStorage.getItem('cart') ) ;
        loadcart() ;
        addtoCart('15b6fc6f-327a-4ec4-896f-486349e85a3d') ; // Adding new item in the cart for testing purpose 
        expect(cart.length).toEqual(1) ; // Expecting the length is equal to 1 
        expect(localStorage.setItem).toHaveBeenCalledTimes(1) ;
        expect(cart[0]).toEqual({
                id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                quantity: 1,
                deliveryid : '1'
            }) ;
    }) ; 
});