/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // if(nums.length<0) return 0;

    // for(var i=0;i<nums.length;i++){

    // }

    var n= nums.length;
    var expectedSum=(n*(n+1))/2;
    var actualSum=nums.reduce((a,b)=>a+b,0)

    return expectedSum-actualSum;
};