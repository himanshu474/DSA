/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {

    if(!timeSeries || timeSeries.length ===0 || duration === 0) 
    {
        return 0;
        }
    
    var totalPoisonedTime=0;

    for(var i=0;i<timeSeries.length-1;i++){
        const currentAttackTime=timeSeries[i]
        const nextAttackTime=timeSeries[i+1]
        const timeBetweenAttacks=nextAttackTime-currentAttackTime;
        totalPoisonedTime+=Math.min(duration,timeBetweenAttacks)
    }

    totalPoisonedTime+=duration;
    return totalPoisonedTime;
};