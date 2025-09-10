/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

      var arr = nums.sort((a, b) => a - b); 

    for(var i=0;i<=arr.length-1;i++)
    {
            if(arr[i] === arr[i+1])
            {
                return true
            }

        
    }
    return false
    
};