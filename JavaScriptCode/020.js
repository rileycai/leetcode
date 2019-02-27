/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var mat={'(':')','{':'}','[':']'};
    var str=[];
    for(var i=0;i<s.length;i++){
        if(s[i]=='(' || s[i]=='{' || s[i]=='['){
            str.push(s[i]);
        }else{
            if(mat[str.pop()]!=s[i]){
                return false;
            }
        }
    }
    return str.length==0?true:false;
};