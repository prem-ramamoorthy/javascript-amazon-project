import {products} from '../data/products.js' ;

export function getproductdetail(id) {
    let match = "" ;
    products.forEach(productelement => {
        if(productelement.id === id ) {
            match = productelement ;
        }
    }) ;
    return match ;
}