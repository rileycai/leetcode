/*
 * @Author: Zhenzhen Cai 
 * @Date: 2019-04-18 11:27:08 
 * @Last Modified by:   Zhenzhen Cai 
 * @Last Modified time: 2019-04-18 11:27:08 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var sum=0;
    var maxSum=-Infinity;
    for(var i=0;i<nums.length;i++){
        sum+=nums[i];
        maxSum=Math.max(maxSum,sum);
        if(sum<0){
            sum=0;
        }
    }
    return maxSum;
};