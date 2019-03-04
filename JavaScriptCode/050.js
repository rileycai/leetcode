/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n===0)
        return 1;
    if(n===1)
        return x;
    if(n<0)
        return 1.0/myPow(x,-n);
    
    var sub=myPow(x,parseInt(n/2));
    
    return sub*sub*myPow(x,n%2);
    
};