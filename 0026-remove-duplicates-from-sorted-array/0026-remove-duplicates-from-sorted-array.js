/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   if(nums.length <1) return 1;
    var i=0;
    for(var j=1;j<nums.length;j++){
    if(nums[j]!= nums[i]){
    i++;
    nums[i]=nums[j];
    }
    }

   return i+1;
    };