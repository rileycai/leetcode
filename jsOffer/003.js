/*
 * @Author: Zhenzhen Cai 
 * @Date: 2019-04-09 16:01:25 
 * @Last Modified by: Zhenzhen Cai
 * @Last Modified time: 2019-04-09 16:42:09
 */


/**
 *给定一个长度为 n 的整数数组 nums，数组中所有的数字都在 0∼n−1 的范围内。
 *数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
 *请找出数组中任意一个重复的数字。
 *
 * @param {*} arr
 */
function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

function duplicate(arr){
    let res=new Set();
    for(let i=0;i<arr.length;i++){
        let val=arr[i];
        while(val!=i){
            if(val===arr[val]){
                res.add(val);
                break;
            }
            swap(arr,i,val);
        }
    }
    return res;
}

let arr=[3,1,2,0,2,5,3];
let res=duplicate(arr);
console.log(res);

