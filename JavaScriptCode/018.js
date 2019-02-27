// Source : https://leetcode-cn.com/problems/4sum/submissions/
// Author : Zhenzhen Cai
// Date   : 2019-02-27
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    // if(nums.length<4)
    //     return [];
    nums=nums.sort((a,b)=>a-b);
    var len=nums.length
    ,rel=[];
    for(var i=0;i<len-3;i++){
        if(i && nums[i]===nums[i-1]) continue;
        for(var j=i+1;j<len-2;j++){
            if(j!=i+1 && nums[j]===nums[j-1]) continue;
            var l=j+1
            ,r=len-1;
            while(l<r){
                var sum=nums[i]+nums[j]+nums[l]+nums[r];
                if(sum<target)
                    l++;
                else if(sum>target)
                    r--;
                else{
                    rel.push([nums[i],nums[j],nums[l],nums[r]]);
                    l++;
                    r--;
                    while(nums[l]===nums[l-1])
                        l++;
                    while(nums[r]===nums[r+1])
                        r--;
                }
            }
        }
    }
  return rel;
};