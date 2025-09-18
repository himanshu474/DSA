/**
 * @param {number[]} nums
 * @return {number[]}
 */
  var findDisappearedNumbers = function(nums) {
    var set1=new Set(nums)
    
    let missing=[]

    for(var i=1;i<=nums.length;i++){
        if(!set1.has(i)){
            missing.push(i)
        }
    }

  return missing

};