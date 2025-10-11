/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(n) {
    if (n < 2) return n;
    let guess = n;

    while (guess * guess > n) {
        guess = Math.floor((guess+n/guess)/ 2);
    }

    return guess;
};


