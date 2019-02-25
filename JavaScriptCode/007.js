/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    var minn=-Math.pow(2,31)
    ,maxn=Math.pow(2,31)-1;    
    var i=0
    ,t=x>0?x:x*-1
    ,flag=x>0?1:-1;
    
    while(t>0){
        i=10*i+(t%10);
        t=parseInt(t/10);
    };
    var rel=i*flag;
    if(rel>minn && rel<maxn){
        return rel;
    }else{
        return 0;
    }
                                            
};