/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var i=0

    for(var j=0;j<nums.length;j++)
    {
        if(nums[j] !== 0)
        {
            nums[i]=nums[j];
            i++
        }


    }
        while(i<nums.length){
            nums[i]=0;
            i++;
        }

};