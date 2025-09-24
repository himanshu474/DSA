/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
   let sorted = [...score];
   sorted.sort((a,b)=>b-a);
   let result = [];
   score.forEach(element=>{
    if(sorted.indexOf(element)==0){
        result.push("Gold Medal")
    }else if(sorted.indexOf(element)==1){
        result.push("Silver Medal")
    }else if(sorted.indexOf(element)==2){
        result.push("Bronze Medal")
    }else{
        result.push(`${sorted.indexOf(element)+1}`)
    }
   })

   return result; 
};