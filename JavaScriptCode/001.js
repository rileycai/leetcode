/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var temp={};
    for(var i=0;i<nums.length;i++){
       temp[num[i]]=i;
    }
    for(var i=0;i<nums.length-1;i++){
       var x=target-nums[i];
       if(temp[x]){
           return [i,temp[x]];
       }
    }
};