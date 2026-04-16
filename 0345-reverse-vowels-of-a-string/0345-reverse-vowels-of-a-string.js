/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let i=0;
    let vow = ['a','e','i','o','u','A','E','I','O','U'];
    let res=s.split("")
    let j=res.length-1

    while(i<j)
    {
        if(!vow.includes(res[i])){
            i++
        }
        else if(!vow.includes(res[j])){
            j--;
        }
        else{
          let temp=res[i];
          res[i]=res[j];
          res[j]=temp

          i++;
           j--;

        }
    }
    return res.join("")
};

