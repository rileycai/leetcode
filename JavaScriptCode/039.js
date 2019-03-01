// Source : https://leetcode-cn.com/problems/combination-sum/submissions/
// Author : Zhenzhen Cai
// Date   : 2019-03-01

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var ans,res,len;
// des
var dfs=function(index,sum,candidates,target){
    if(sum===target){
        var tmp=res.map(function(item){
            return item;
        })
        ans.push(tmp);
        // console.log(res,ans);
        return ;
    }
    for(var i=index;i<len;i++){
        if(sum+candidates[i]>target) 
            continue;
        res.push(candidates[i]);
        dfs(i,sum+candidates[i],candidates,target);
        res.pop();
    }
}

var combinationSum = function(candidates, target) {
    ans=[];
    len=candidates.length;
    candidates.sort((a,b)=>a-b);
    for(var i=0;i<len;i++){
        res=[candidates[i]];
        dfs(i,candidates[i],candidates,target);
    }
    return ans;
};