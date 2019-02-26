// Source : https://leetcode-cn.com/problems/string-to-integer-atoi/
// Author : Zhenzhen Cai
// Date   : 2019-02-25

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    //     方法1，使用正则表达式
        var minn=-Math.pow(2,31)
        ,maxn=Math.pow(2,31)-1;    
        
        str=str.trim();
        var rel=/^(\-|\+)?[0-9]+/.exec(str);
        if(rel){
            var num=Number(rel[0]);
            if(num<minn)
                return minn;
            if(num>maxn)
                return maxn;
            return num;
        }
        return 0;
        
        
    // //     方法二
    //     var minn=-Math.pow(2,31)
    //     ,maxn=Math.pow(2,31)-1;      
    //     str=str.trim();
    //     var i=0;
    //     var flag=1;
    //     if(str[i]=='+') i++;
    //     else if(str[i]=='-'){
    //         i++;
    //         flag=-1;
    //     }
    //     var rel=0;
    //     for(;i<str.length;i++){
    //         if(str[i]==' ')
    //             break;
    //         var x=str[i]-'0';
    //         if(x>=0 && x<=9)
    //             rel=rel*10+x;
    //         else
    //             break;
    //     }
    
    //     if(flag==1)
    //         return rel<=maxn?rel:maxn;
    //     else
    //         return rel*flag>=minn?rel*flag:minn;
    
        
        
    };