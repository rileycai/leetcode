/*
 * @Author: Zhenzhen Cai 
 * @Date: 2019-04-09 17:16:35 
 * @Last Modified by: Zhenzhen Cai
 * @Last Modified time: 2019-04-09 17:30:31
 */


/**
 *在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * @param {Array} arr
 * @param {Int} num
 * @returns  Boolean
 */
function find(arr,num){
    let columns=arr[0].length;
    let rows=arr.length;
    let row=0;
    let col=columns-1;

    while(row<rows && col>=0){
        if(arr[row][col]===num)
            return true;
        else if(arr[row][col]>num)
            col--;
        else    
            row++;
    }
    return false;
}

//测试
var arr=[[1,2,8,9],
         [2,4,9,12],
         [4,7,10,13],
         [6,8,11,15]];