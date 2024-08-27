function reverseString(s) {
    if (typeof s === 'string') {
        let splitStringValue = s.split(""); 
        let reversedStringValue = splitStringValue.reverse();
        let finalOutput = reversedStringValue.join('')
        console.log(finalOutput);
    } else {
        console.log("s.split is not a function");
        console.log(s);
    }
}