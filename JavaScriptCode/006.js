/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// 对所有的整数k,
//     行0中的字符位于索引k(2*R-2)处
//     行R-1中的字符位于索引k(2*R-2)+R-1处
//     内部的行i中的字符位于索引k(2R-2)+i以及(k+1)(2R-2)-i处

var convert = function(s, numRows) {
    if(numRows==1) return s;
    var cycleLen=2*numRows-2      
    ,len=s.length
    ,rel="";
    for(var i=0;i<numRows;i++){
        for(var j=0;j+i<len;j+=cycleLen){
            rel+=s[j+i];
            if(i!=0 && i!=numRows-1 && j+cycleLen-i<len)
                rel+=s[j+cycleLen-i];
        }
    }
    return rel;
};