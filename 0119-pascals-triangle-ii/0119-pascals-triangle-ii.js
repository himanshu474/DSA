/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {

    var row=[1]
    for(var i=0;i<=rowIndex;i++){
        var newRow=[]
        newRow[0]=1;
        newRow[i]=1;
        for(var j=1;j<i;j++){
            newRow[j]=row[j-1]+row[j]
        }
  row=newRow      
    }
    return row
};