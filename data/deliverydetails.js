export const deliverydetails =  [
    {
        id : '1' ,
        deliveryDays : 7 ,
        priceCents : 0 
    } ,
    {
        id : '2' ,
        deliveryDays : 3 ,
        priceCents : 499
    } ,
    {
        id : '3' ,
        deliveryDays : 1 ,
        priceCents : 999 
    }
] ;

export function getdeliverydetail(id) {
      let match = "" ;
      deliverydetails.forEach(deliveryelement => {
          if(deliveryelement.id === id ) {
              match = deliveryelement ;
          }
      }) ;
      return match ;
  }