// Source : https://leetcode-cn.com/problems/permutations/submissions/
// Author : Zhenzhen Cai
// Date   : 2019-03-01
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var ans,res,hash,len;

var dfs=function(num,nums){
    if(num===len){
        var tmp=res.map(function(x){
            return x;
        })
        ans.push(tmp);
        return;
    }
    for(var i=0;i<len;i++){
        if(hash[i])
            continue;
        hash[i]=true;
        res.push(nums[i]);
        dfs(num+1,nums);
        hash[i]=false;
        res.pop();
    }
}
var permute = function(nums) {
    ans=[];
    res=[];
    hash=[];
    len=nums.length;
    dfs(0,nums);
    return ans;
};