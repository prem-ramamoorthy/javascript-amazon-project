import {fixmoney} from '../scripts/utils/requiredFunctions.js' ;

describe('Test Scuite : formatcurrency ' , () => {
    it('Convert cents into dollars' , () => {
        expect(fixmoney(2095)).toEqual("20.95") ;
    });
    it('Round Up to the nearest cent' , () => {
        expect(fixmoney(2000.5)).toEqual("20.01") ;
    });
    it('Works With Zero' , () => {
        expect(fixmoney(0)).toEqual("0.00") ;
    });
}); 