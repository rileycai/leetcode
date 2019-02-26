// Source : https://leetcode-cn.com/problems/3sum-closest/
// Author : Zhenzhen Cai
// Date   : 2019-02-26

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums=nums.sort((a,b)=>a-b);
    var len=nums.length
    ,closeSum=nums[0]+nums[1]+nums[2]
    ,sum=0;
    for(var i=0;i<len;i++){
        var start=i+1
        ,end=len-1;
        while(start<end){
            sum=nums[i]+nums[start]+nums[end];
            if(Math.abs(sum-target)<Math.abs(closeSum-target))
                closeSum=sum;
            if(sum>target)
                end--;
            else if(sum<target)
                start++;
            else
                return target;
        }
    }
    return closeSum;
};