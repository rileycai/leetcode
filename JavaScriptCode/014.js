/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var len=strs.length;
    if(len==0){
        return "";
    }else  if(len==1){
        return strs[0];
    }else{
        var rel=strs[0];   
        for(var i=1;i<len;i++){
            var temp="";
            if(rel.length!=0){
                for(var j=0;j<rel.length;j++){
                if(rel[j]==strs[i][j]){
                    temp+=rel[j];
                }else{
                    rel=temp;
                    break;
                }
                }
            }
        }
        return rel;
    }
};