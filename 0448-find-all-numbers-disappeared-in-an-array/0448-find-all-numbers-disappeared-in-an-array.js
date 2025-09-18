/**
 * @param {number[]} nums
 * @return {number[]}
 */
  var findDisappearedNumbers = function(nums) {
     let set1 = new Set(nums);
  return Array.from({ length: nums.length }, (_, i) => i + 1).filter(x => !set1.has(x));
};