/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var s=s.split('');
    var sum=0;
    var dic={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};  
    for(var i=0;i<s.length;i++){
        if(dic[s[i]]<dic[s[i+1]]){
            sum-=dic[s[i]];
        }else{
            sum+=dic[s[i]];
        }
    }
    return sum;
};