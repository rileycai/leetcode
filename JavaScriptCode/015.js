// Source : https://leetcode-cn.com/problems/3sum/
// Author : Zhenzhen Cai
// Date   : 2019-02-26
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums=nums.sort((a,b)=>a-b);
    console.log(nums);
    var len=nums.length;
    var rel=[];
    for(var i=0;i<len;i++){
       if(i && nums[i]===nums[i-1]) continue;  //消除重复
       var target=-nums[i]
       ,start=i+1
       ,end=len-1;
       while(start<end){
           var sum=nums[start]+nums[end];
           if(sum>target)
               end--;
           else if(sum<target)
               start++;
           else{
               rel.push([nums[i],nums[start],nums[end]]);
               while(nums[start+1]===nums[start])   //消除重复
                   start++;
               while(nums[end-1]===nums[end])      //消除重复
                   end--;
               start++;
               end--;
           }
       }
    }
    return rel;
};

// var x=[-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];
// threeSum(x);