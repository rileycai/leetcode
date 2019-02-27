// Source : https://leetcode-cn.com/problems/generate-parentheses/submissions/
// Author : Zhenzhen Cai
// Date   : 2019-02-27

/**
 * @param {number} n
 * @return {string[]}
 */
var rel;

var dfs=function(s,left,right,n){
    if(left===n && right===n){
        rel.push(s);
        return;
    }
    if(left+1<=n)
        dfs(s+'(',left+1,right,n);
    if(right+1<=n && right+1<=left)
        dfs(s+')',left,right+1,n);
}

var generateParenthesis = function(n) {
    rel=[];
    dfs('',0,0,n);
    return rel;
};