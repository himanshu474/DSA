/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let i=0;
    let max=candies[0];

    for(i=0;i<candies.length;i++){
        if(candies[i]>max)
        max=candies[i]
    }
    
let res=[]

    for(i=0;i<candies.length;i++){
        if(candies[i]+extraCandies >=max){
        res.push(true)
        }
        else{
            res.push(false)
        }
    }

return res

};