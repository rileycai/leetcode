/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var j=1;
    for(var i=0;i<nums.length-1;i++){
        if(nums[i]<nums[i+1]){
            nums[j++]=nums[i+1];
        }
    }
    return j;
};