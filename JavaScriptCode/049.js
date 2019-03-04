// Source : https://leetcode-cn.com/problems/group-anagrams/submissions/
// Author : Zhenzhen Cai
// Date   : 2019-03-04

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var ans=[]
    ,hash={};
    strs.forEach(function(item){
        var str=item.split('').sort().join('');
        if(hash[str]===undefined){
            hash[str]=ans.length;
            ans.push([item]);
        }else{
            ans[hash[str]].push(item);
        }
    })
    return ans;
};