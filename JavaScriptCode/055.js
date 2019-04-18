/*
 * @Author: Zhenzhen Cai 
 * @Date: 2019-04-18 16:17:40 
 * @Last Modified by: Zhenzhen Cai
 * @Last Modified time: 2019-04-18 16:18:55
 */

/**
 * 从后往前遍历数组，如果遇到的元素可以到达最后一行，则截断后边的元素。否则继续往前，最后剩下的元素大于1个，则可以判断为假。否则就是真
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var n=1;
    for(var i=nums.length-2;i>=0;i--){
        if(nums[i]>=n){
            n=1;
        }else{
            n++;
        }
        if(i===0 && n>1){
            return false;
        }
    }
    return true;
    
};