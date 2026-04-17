/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = {
        "a" : true,
        "e" : true,
        "i" : true,
        "o" : true,
        "u" : true,
        "A" : true,
        "E" : true,
        "I" : true,
        "O" : true,
        "U" : true,
    }
    let left = 0
    let right = s.length - 1
    let reversed = s.split('')
    while (left <= right) {
        if (!vowels[s[left]]) {
            left++
        } else if (!vowels[s[right]]) {
            right--
        } else {
            [reversed[left], reversed[right]] = [reversed[right], reversed[left]]
            left++
            right--
        }
    }
    return reversed.join('')
};