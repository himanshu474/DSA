/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows<1) return 1;
    let result=[]

    for(var i=0;i<numRows;i++){
        var row=[];

        row[0]=1;
        row[i]=1;
        for(var j=1;j<i;j++)
        {
            row[j]=result[i-1][j-1]+result[i-1][j]
        }

        result[i]=row

    }

    return result;
};