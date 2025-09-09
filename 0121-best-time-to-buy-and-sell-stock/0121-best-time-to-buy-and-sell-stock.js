/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
 var minprice=prices[0];
        var maxProfit=0
      
    for(var i=0;i<prices.length;i++){
       if(prices[i]<minprice) {
       minprice=prices[i];
       }
   else{
   var profit=prices[i]-minprice
    if(profit>maxProfit){
     maxProfit=profit
  }
   }
    }
 return maxProfit

}