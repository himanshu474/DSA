/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var i=a.length-1;
    var j=b.length-1;
    var result="";
    var carry=0;

    while(i>=0 || j>=0 || carry){
        var sum=carry;

        if(i>=0) sum+=Number(a[i--]);
        if(j>=0) sum+=Number(b[j--]);

        result= (sum%2)+result;

        carry=Math.floor(sum/2)

    }
    return result;
};