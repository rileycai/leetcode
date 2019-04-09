/*
 * @Author: Zhenzhen Cai 
 * @Date: 2019-04-09 17:11:30 
 * @Last Modified by: Zhenzhen Cai
 * @Last Modified time: 2019-04-09 17:31:05
 */


/**
 *给定一个长度为 n 的整数数组 nums，数组中所有的数字都在 0∼n−1 的范围内。
 *数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
 *请找出数组中任意一个重复的数字。
 *
 * @param {Array} arr
 */
function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

function duplicate(arr){
    for(let i=0;i<arr.length;i++){
        let val=arr[i];
        while(val!=i){
            if(val===arr[val]){
                return true;
            }
            swap(arr,i,val);
        }
    }
    return false;
}

//测试代码
let arr=[3,1,2,0,2,5,3];
let res=duplicate(arr);
console.log(res);




/**
 *给定一个长度为 n+1 的数组 nums，数组中所有的数均在 1∼n 的范围内，其中 n≥1。
 *请找出数组中任意一个重复的数，但不能修改输入的数组。
 * @param {Array} arr
 */
function getDuplication(arr){
    let start=1;
    let end=arr.length-1;
    while(end>=start){
        let mid=Math.floor((end+start)/2);
        let count=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>=start && arr[i]<=mid){
                count++;
            }
        }
        if(end===start){
            if(count>1)
                return start;
            else
                break;
        }
        if(count>(mid-start+1))
            end=mid;
        else
            start=mid+1;
    }
    return -1;
}