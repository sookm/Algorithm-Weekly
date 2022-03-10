/**
 * @param {string} s
 * @return {number}
 */

/*
Initial idea 1
    1) get string, bring each string using "let i of s"
    2) use switch condition statements, 
        for this, elements of s should be integer type 
        and then plus all of them 

idea 2
    Use replace() functions and Regular Expression  
    There is targetStr()


var romanToInt = function(s) {
    const replacedRoman = targetStr.replace(a,b);
    
    for (let i of s) {     
    }
};
*/

// Solution -> Use table, length and 
// if statment in case that the second place should minus the first place
var romanToInt = function(s) {
    let table = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        //if the next roman numeral is larger, then we know we have to subtract this number
        if (table[s[i]] < table[s[i+1]]) {
            result-=table[s[i]]
        } 
        //otherwise, add like normal. 
        else {
            result+=table[s[i]]
        }
    }
    return result
    
};
    
