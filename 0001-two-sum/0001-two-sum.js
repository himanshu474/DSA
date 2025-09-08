/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        let complement=target-nums[i];
        if(map.has(complement))
        {
            return[map.get(complement),i]
        }
        map.set(nums[i],i);
    }
    return []
};

console.log(twoSum([1, 7, 4, 6, 9, 2, 8, 3, 11],10)); 
