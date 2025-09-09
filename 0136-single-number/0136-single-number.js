/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // if(nums.length<1) return 1;
//   var arr = nums.sort((a, b) => a - b); // Create a copy of the array and sort it
var xor=0
    // var number;
    for(var i=0;i<nums.length;i++){
        xor=xor^nums[i]
    }
   return xor
};