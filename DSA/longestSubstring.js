function findLongestSubstring(word) {

    let start = 0;
    let maxLength = 0;
    let charMap = {};
    for (let i=0; i<word.length; i++) {
        let currentChar = word[i];

        if (charMap[currentChar] >= start) {
            start = charMap[currentChar] + 1;
        }
        charMap[currentChar] = i;
        maxLength = Math.max(maxLength, i-start+1);
    }
    return { maxLength, charMap};
}

let result = findLongestSubstring('abcdeabcdefbb');
console.log("result :: ", result);