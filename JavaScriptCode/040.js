// Source : https://leetcode-cn.com/problems/combination-sum-ii/submissions/
// Author : Zhenzhen Cai
// Date   : 2019-03-01

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var ans,res,len;

var dfs=function(index,sum,candidates,target){
    if(sum===target){
        var tmp=res.map(function(item){
            return item;
        })
        ans.push(tmp);
        return;
    }
    for(var i=index+1;i<len;i++){
        if(i!=index+1 && candidates[i]===candidates[i-1])
            continue;
        if(candidates[i]+sum>target)
            continue;
        res.push(candidates[i]);
        dfs(i,candidates[i]+sum,candidates,target);
        res.pop();
    }
}

var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a-b);
    ans=[];
    len=candidates.length;
    for(var i=0;i<len;i++){
        if(i && candidates[i]===candidates[i-1])
            continue;
        res=[candidates[i]];
        dfs(i,candidates[i],candidates,target);
    }
    return ans;
};
