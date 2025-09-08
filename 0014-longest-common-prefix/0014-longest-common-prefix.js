var longestCommonPrefix = function(strs) {
    // If the array is empty, no prefix exists
    if (strs.length === 0) return "";

    // Take the first string as the reference to compare others
    var FirstString = strs[0];

    // Length of the first string (how many characters to check)
    var lengthOfString = FirstString.length;

    // Total number of words in the array
    var numberOfElementInArray = strs.length;
    // This will hold the result (the prefix we are building)
    var newString = "";

    // Outer loop: go through each character of the first string
    for (var i = 0; i < lengthOfString; i++) {
        // Pick the current character from the first string
        var currentChar = FirstString[i];

        // Counter to count how many words matched this character
        var initialCharCount = 0;

        // Inner loop: check this character position in every string
        for (var j = 0; j < numberOfElementInArray; j++) {
            // If the j-th string also has the same character at index i
            if (strs[j][i] === currentChar) {
                initialCharCount++; // Count this as a match
            } else {
                // If not matching OR string is too short, return result so far
                return newString;
            }
        }

        // If all words matched this character → add it to the prefix
        newString += currentChar;
    }

    // After checking all characters, return the final prefix
    return newString;
};

// Example test:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));   // ""
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); // "inters"
