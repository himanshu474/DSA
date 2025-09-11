/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  if (k <= 0) return false;         // optional early guard
  const seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    // 1) Check whether current value exists among the up-to-k previous elements
    if (seen.has(nums[i])) return true;

    // 2) Add current value into the window
    seen.add(nums[i]);

    // 3) Keep the window size <= k by removing the element that fell out
    if (seen.size > k) seen.delete(nums[i - k]);
  }
  return false;
};
