/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var candidate=null;
    var count=0;

    for(var i=0;i<nums.length;i++){
        if(count === 0) {candidate=nums[i];
        }
        if(nums[i]=== candidate) {
            count++;
        }
        else{
            count--;
        }
    }
    return candidate

};