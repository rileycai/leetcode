// Source : https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/comments/
// Author : Zhenzhen Cai
// Date   : 2019-02-26


/**
 * @param {string} digits
 * @return {string[]}
 */
// 递归，DFS
var temp,rel;
var dfs=function(str,idx,digits){
    if(idx===digits.length){
        rel.push(str);
        return;
    }
    var num=Number(digits[idx]);
    if(num<=1)
        dfs(str,idx+1,digits);
    else{
        for(var i=0,len=temp[num].length;i<len;i++)
            dfs(str+temp[num][i],idx+1,digits);
    } 
}

var letterCombinations = function(digits) {
    if(!digits.length)
        return [];
    temp=['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    ,rel=[];
    
    dfs('',0,digits);
    return rel;  
};