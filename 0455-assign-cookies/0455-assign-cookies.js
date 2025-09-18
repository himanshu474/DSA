/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
   var findContentChildren = function(g, s) {
    
    var n=g.length;
    var m=s.length;
    var r=0
    var l=0
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)
    while(l<m){
       if(g[r]<=s[l])
       {
        r=r+1
       }
       l=l+1
    }
    return r;

   };