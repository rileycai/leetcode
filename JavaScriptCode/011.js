// Source : https://leetcode-cn.com/problems/container-with-most-water/
// Author : Zhenzhen Cai
// Date   : 2019-02-26

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var area=0
    ,min=0
    ,max=height.length-1;
    while(min<max){
        area=Math.max(area,Math.min(height[min],height[max])*(max-min));
        if(height[min]<height[max])
            min++;
        else
            max--;
    }
    return area;
    
};