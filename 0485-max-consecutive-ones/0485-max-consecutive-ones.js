/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var max_count=0;
    var current_count=0;

    for(var i=0;i<nums.length;i++){
        if(nums[i] ===1) {
            current_count++;
        }
        if(nums[i] === 0){
            if(current_count>max_count){
                max_count=current_count;
            }
            current_count=0
        }

        max_count=Math.max(max_count,current_count)
    }
    return max_count
};