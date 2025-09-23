/**
 * @param {string[]} words
 * @return {string[]}
 */

  var findWords = function(words) {
    const rows = [
        new Set("qwertyuiop"),
        new Set("asdfghjkl"),
        new Set("zxcvbnm")
    ];

    return words.filter(word => {
        const lower = word.toLowerCase();
        const row = rows.find(r => r.has(lower[0]));
        return [...lower].every(c => row.has(c));
    });
};