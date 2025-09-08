/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.length<1) return 1;

    for (var i=0;i<nums.length;i++)
    {
        if(nums[i] == target)
        {
            return i;
        }
        if(target<nums[i])
        {
            return i
        }
    }
    return nums.length;
};