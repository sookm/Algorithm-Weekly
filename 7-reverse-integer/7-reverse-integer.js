/**
 * @param {number} x
 * @return {number}
 */

/*
idea 1.
int tp string and reverse

*/
var reverse = function(x) {
    let reverse = 0;
    while(x !==0 ) {
        reverse = reverse*10 + (x%10);
        x = parseInt(x/10);
    }
    return reverse > Math.pow(2,31) || reverse < Math.pow(-2,31) ? 0:reverse;
};



/*
var reverse = function(x) {
    let reversedStr = ''
    let xStr = x.toString()
    if ( Math.pow(2, 31) - 1 > x > 0) {
        for ( let i of xStr ) {
            reversedStr = i + reversedStr
           
        }
      reversedStr = parseInt(reversedStr)
    } 
    
    if (-Math.pow(2, 31) < x < 0) {
        for (let i of xStr) {
            reversedStr = i + reversedStr
        }
    reversedStr = parseInt(reversedStr.replace('-', ''))
    reversedStr = -1*(reversedStr)
    console.log(reversedStr)
      
    } 
    if (x < -Math.pow(2, 31) || x > Math.pow(2, 31) - 1) {
    reversedStr=0
    //if ( x > 10^8 || x < -10^7) {
    //    reversedStr = 0
    }
  return (reversedStr)
};
*/