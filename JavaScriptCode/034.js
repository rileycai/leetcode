// Source : https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/
// Author : Zhenzhen Cai
// Date   : 2019-03-01
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var l = 0
    ,r = nums.length - 1
    ,leftBound = -1
    ,rightBound = -1;
    
    //二分法查找左边界
    while(l <= r){
        var mid = l + parseInt((r-l)/2);
        if(nums[mid] === target){
            leftBound = mid;
            r = mid - 1;
        } else if(nums[mid] > target){
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    
    l = 0;
    r = nums.length - 1;
     //二分法查找右边界
    while(l <= r){
        mid = l + parseInt((r-l)/2);
        if(nums[mid] === target){
            rightBound = mid;
            l = mid + 1;
        } else if(nums[mid] > target){
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return [leftBound, rightBound];
};


