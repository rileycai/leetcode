// Source : https://leetcode-cn.com/problems/next-permutation/solution/
// Author : Zhenzhen Cai
// Date   : 2019-02-28

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var len=nums.length
    ,i=len-2;  
    while(i>=0 && nums[i+1]<=nums[i]) //从右往左爬坡，找到第一对nums[i]<nums[i+1]
        i--;
    if(i>=0){
        var j=len-1;
        while(j && nums[j]<=nums[i])  //从右向左爬坡，找到第一个数使nums[j]>nums[i]
            j--;
        var temp=nums[i];     //交换nums[i]和nums[j]
        nums[i]=nums[j];
        nums[j]=temp;
    }
    var rev=nums.slice(i+1).sort((a,b)=>a-b);  //重新排列i右边的数字，从小到大
    nums.length=i+1;
    Array.prototype.push.apply(nums, rev);
    
};