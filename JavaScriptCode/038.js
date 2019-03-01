/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var tmp=""
    ,rel="1"
    ,count=1;
    for(var i=0;i<n-1;i++){
        tmp=rel;
        rel="";
        for(var j=0;j<tmp.length;j++){
            if(tmp[j]!=tmp[j+1]){
                rel+="1"+tmp[j];
            }else{
                j++;
                if(tmp[j]!=tmp[j+1]){
                     rel+="2"+tmp[j];
                }else{
                    j++;
                     rel+="3"+tmp[j];
                }
            }
        }
        // console.log(rel);
    }
    return rel;
};