/*
 * @Author: Zhenzhen Cai 
 * @Date: 2019-04-18 15:56:20 
 * @Last Modified by: Zhenzhen Cai
 * @Last Modified time: 2019-04-18 15:57:16
 */

 /**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var res=[];
    if(matrix===null || matrix.length===0 || matrix[0].length===0){
        return res;
    }
    var rows=matrix.length;
    var cols=matrix[0].length;
    var x=0;
    var y=0;
    while(cols>0 && rows>0){
        if(rows===1){
            for(let i=0;i<cols;i++){
                res.push(matrix[x][y++]);
            }
            break;
        }else if(cols===1){
            for(let i=0;i<rows;i++){
                res.push(matrix[x++][y]);
            }
            break;
        }
        for(let i=0;i<cols-1;i++){
            res.push(matrix[x][y++]);
        }
        for(let i=0;i<rows-1;i++){
            res.push(matrix[x++][y]);
        }
        for(let i=0;i<cols-1;i++){
            res.push(matrix[x][y--]);
        }
        for(let i=0;i<rows-1;i++){
            res.push(matrix[x--][y]);
        }
        x++;
        y++;
        cols-=2;
        rows-=2;
    }
    return res;
};