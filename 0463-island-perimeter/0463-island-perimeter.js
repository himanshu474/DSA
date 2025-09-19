/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var rows=grid.length;
    var columns=grid[0].length;
    var count=0;
    
    for(var i=0;i<rows;i++){
        for(var j=0;j<columns;j++){
            if(grid[i][j] === 0) continue;
            if(i ===0 || grid[i-1][j]===0) count++;
            if(i === rows-1 || grid[i+1][j]===0) count++;

            if(j===0 || grid[i][j-1]===0) count++;
            if(j=== columns-1 || grid[i][j+1]===0) count++
        }
    }
    return count
};