/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let i=0;
    let vow = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let res=s.split("")
    let j=res.length-1

    while(i<j)
    {
       while(i<j && !vow.has(res[i])) i++;
       while(i<j && !vow.has(res[j])) j--;

       [res[i],res[j]] =[res[j],res[i]];

       i++;
       j--;

    }
    return res.join("")
};

