/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
    var fractionToDecimal = function(numerator, denominator) {
        if(numerator===0 ) return "0"

        let res=((numerator<0) ^ (denominator<0)) ? "-":"";
        let num=Math.abs(numerator)
        let den=Math.abs(denominator);
        res+=Math.floor(num/den);
        let rem=num%den;
        if(rem === 0 ) return res;
        res+="."
        let seen =new Map();
        while(rem!=0)
        {
            if(seen.has(rem)){
                res=res.slice(0,seen.get(rem)) +"(" +res.slice(seen.get(rem)) + ")"
                break;
            }
            seen.set(rem,res.length);
            rem*=10;
            res+=Math.floor(rem/den);
            rem %=den;
        }

        return res

    };