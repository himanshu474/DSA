/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    if(digits.length<1) return 1;

    for(var i=digits.length-1;i>=0;i--){
        if(digits[i]<9){
            digits[i]++;
            return digits;
        }
        digits[i]=0;
        
    }

    digits.push(0);
    digits[0]=1;
    return digits;
};