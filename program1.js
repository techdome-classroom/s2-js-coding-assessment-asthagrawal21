/**
 * @param {string} s
 * @return {boolean}
 */

module.exports = { isValid };

function isValid(s) {
    let stack = [];
    let map = {
        '(' : ')',
        '[' : ']', 
        '{' : '}'
    } ;
    for(let i = 0 ; i < s.length; i++ ) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[' ) {
            stack.push(s[i]);
        }
        else {
            if (stack.length === 0 || map[stack.pop()] !== s[i]){
                return false;
            }
        }
    }
    return stack.length === 0;
}
