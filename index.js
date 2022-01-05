We are check if All A's Appears Before All B's. 

Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.


Input: s = "aaabbb"
Output: true
Explanation:
The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
Hence, every 'a' appears before every 'b' and we return true.

Input: s = "abab"
Output: false
Explanation:
There is an 'a' at index 2 and a 'b' at index 1.
Hence, not every 'a' appears before every 'b' and we return false.

/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
  //when is this false: b appears before a
    let bIsFirst = 'ba';
    return s.indexOf(bIsFirst) === -1;
    //or
    return s.indexOf('ba') == -1;
   //or 

    let bIsFirst = false
    for(let nextChar of s){

        if (bIsFirst && nextChar === 'a') return false;  
   
        if (nextChar === 'b') bIsFirst = true;
 
    }  
       
    return true 
   


}

/**
 * PUSEDOCODE
if(!s.findIndex('a')){
       return true
// check for how a and b are appearing (sort?)
// only true, if every 'a' character appears before every 'b' in the string
// return false when it doesn't 
*/