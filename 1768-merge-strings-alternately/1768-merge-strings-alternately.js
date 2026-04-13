/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = "";
    let i = 0;
let n1=word1.length;
let n2=word2.length;


while(i<n1 || i <n2){
    if(i<n1){
        res+=word1[i]
    }

    if(i<n2){
        res+=word2[i]
    }

    i++
}

return res



};
