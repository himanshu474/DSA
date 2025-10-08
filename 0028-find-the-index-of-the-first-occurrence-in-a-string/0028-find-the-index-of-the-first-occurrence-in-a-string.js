/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
     if (!needle.length) return 0; // edge case: empty needle
    return haystack.indexOf(needle);
};