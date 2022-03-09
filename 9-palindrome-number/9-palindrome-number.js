/**
 * @param {number} x
 * @return {boolean}
 */

/* 
1. when getting input x, need 
 no.1 condition, for integer type, positive number more than 10 
 no.2 condition, when x is dived by a power of 10, the numbers of each place should be a palindrome
2. check if the numbers of each place are the same, 
as the difference of even number or odd number

*/

/* // Trial no1 => Wrong Anser / Runtime Error
var isPalindrome = function(x) {
    let num = 0;
    let decimal = 0;
    if( x > 10 || 0 <= x <= 9) {
        for (i=1;x/(10^i)>1;i++) {
            let decimal = x/(10^i);
            decimal =+ 1;
        }
        return true;
    } else if ( x < 0 )
        return false;   
};
*/

// Solution no1 
var isPalindrome = function(x) {
    let reversed = x.toString().split('').reverse().join('')
    return (x.toString()===reversed)
};













