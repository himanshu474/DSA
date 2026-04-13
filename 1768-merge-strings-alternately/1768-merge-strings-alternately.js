/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = "";
    let i = 0;

let min=Math.min(word1.length,word2.length);

for(i=0;i<min;i++){
    res +=word1[i]+word2[i]
}

return res+word1.slice(i)+word2.slice(i)

};
