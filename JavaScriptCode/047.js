// Source : https://leetcode-cn.com/problems/permutations-ii/submissions/
// Author : Zhenzhen Cai
// Date   : 2019-03-01
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var ans,res,hash,len,hashAns;

var dfs=function(num,nums){
    if(num===len){
        var tmp=res.map(function(x){
            return x;
        })
        if(hashAns[tmp.toString()])
            return;
        hashAns[tmp.toString()]=true;
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
var permuteUnique = function(nums) {
    hashAns=[];
    ans=[];
    res=[];
    hash=[];
    len=nums.length;
    dfs(0,nums);
    return ans;
};