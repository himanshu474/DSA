/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {

    // if(!timeSeries || timeSeries.length ===0 || duration === 0) 
    // {
    //     return 0;
    //     }
    
    var totalPoisonedTime=0;

    for(var i=0;i<timeSeries.length-1;i++){
        totalPoisonedTime+=Math.min(duration,timeSeries[i+1]-timeSeries[i])
    }

    totalPoisonedTime+=duration;
    return totalPoisonedTime;
};