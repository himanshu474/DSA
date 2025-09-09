/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // if(nums.length<1) return 1;
  var arr = nums.sort((a, b) => a - b); // Create a copy of the array and sort it

    // var number;
    for(var i=0;i<nums.length;i=i+2){
        if(arr[i] != arr[i+1])
        return arr[i]
    }
   return arr[arr.length-1]
};