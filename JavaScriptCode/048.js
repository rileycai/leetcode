// Source : https://leetcode-cn.com/problems/rotate-image/submissions/
// Author : Zhenzhen Cai
// Date   : 2019-03-04
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var len=matrix.length;
    for(var i=0;i<len/2;i++){
        var start=i
        ,end=len-i-1;
        for(var j=0;j<end-start;j++){
            var temp = matrix[start][start + j];
            matrix[start][start + j] = matrix[end - j][start];
            matrix[end - j][start] = matrix[end][end - j];
            matrix[end][end - j] = matrix[start + j][end];
            matrix[start + j][end] = temp;
        }
    }
    
};