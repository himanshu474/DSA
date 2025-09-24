/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    return score
        .map((s, i) => [s, i])                // pair score with index
        .sort((a, b) => b[0] - a[0])          // sort by score desc
        .map(([, i], rank) => [i, medals[rank] || (rank + 1).toString()]) // assign ranks
        .sort((a, b) => a[0] - b[0])          // restore original order
        .map(([, r]) => r);                   // extract only ranks
};
