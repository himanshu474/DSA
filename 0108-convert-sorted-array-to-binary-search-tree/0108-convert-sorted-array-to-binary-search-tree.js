/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function sortedBST(left,right){
        if(left>right)  return null;

        var mid=Math.floor((left+right)/2);
        
        var root=new TreeNode(nums[mid])

        root.left=sortedBST(left,mid-1)
        root.right=sortedBST(mid+1,right)

        return root;

    }

    return sortedBST(0,nums.length-1)
};