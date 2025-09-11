/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    // var arr = nums.sort((a, b) => a - b); 

    // for(var i=0;i<=nums.length-1;i++)
    // {
    //         if(nums[i] === nums[i+1])
    //         {
    //             return true
    //         }

        
    // }
    // return false

    var seen = new Set();

    for(var x of nums){
        if(seen.has(x)){
            return true
        }
        seen.add(x)
    }

    return false
};