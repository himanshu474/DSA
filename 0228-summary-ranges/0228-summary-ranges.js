/**
 * @param {number[]} nums
 * @return {string[]}
 */


var summaryRanges = function(nums) {
    var res=[];

  if(nums.length === 0) return res;
    var start=nums[0]

    for(var i=1;i<nums.length;i++){

        if(nums[i] !== nums[i-1]+1){
             res.push(start === nums[i - 1] ? String(start) : `${start}->${nums[i - 1]}`);
             start = nums[i];
        }
    }

     var last = nums[nums.length - 1];
  res.push(start === last ? String(start) : `${start}->${last}`);

  return res;
};