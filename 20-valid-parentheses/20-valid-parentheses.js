/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    const brackets = {'{': '}', '(': ')', '[': ']'};
    const stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if (s[i] === brackets[stack[stack.length - 1]]) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    };
    
    return !stack.length;

};