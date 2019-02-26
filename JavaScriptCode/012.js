// Source : https://leetcode-cn.com/problems/integer-to-roman/submissions/
// Author : Zhenzhen Cai
// Date   : 2019-02-26

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var map_s={1:'M',2:'MM',3:'MMM',0:''}
    ,map_h={1:'C',2:'CC',3:'CCC',4:'CD',5:'D',6:'DC',7:'DCC',8:'DCCC',9:'CM',0:''}
    ,map_t={1:'X',2:'XX',3:'XXX',4:'XL',5:'L',6:'LX',7:'LXX',8:'LXXX',9:'XC',0:''}
    ,map_o={1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX',0:''};
    return map_s[~~(num/1000)]+map_h[~~((num%1000)/100)]+map_t[~~((num%100)/10)]+map_o[num%10];   
};