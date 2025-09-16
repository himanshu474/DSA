/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    
    this.size = nums.length; //stores length of array
    this.prefixSum = Array( nums.length ).fill( 0 );//empty array
    this.prefixSum[0] = nums[0];//first value of prefix sum is the same as that of the first element of nums
    
    for( let i = 1; i < this.size ; i++ ){//traverse from left to right of array nums
        this.prefixSum[i] = this.prefixSum[i-1] + nums[i];
        /*stores sum of current value(nums) + previous sum value 
        at the index before it(prefixsum)*/
    }
    
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    
    if( left == 0 ){
        /* if left index isnt mentioned then we return the 
        sum up till the right index from the prefix sum array */
        return this.prefixSum[right];
    }else{
        //if the left index is given, then return the sum up 
        //till the right index minus the value of prefix sum at 
        //the index before the given left index i.e. value 
        //at the (left - 1) index
        return this.prefixSum[right] - this.prefixSum[left-1];
    }
    
    
};



/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */