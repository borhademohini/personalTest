console.log("Test ");

var removeDuplicates = function(nums) {
    return [...new Set(nums)]; 
 };

let arr = [1, 1, 2]
let result = removeDuplicates(arr);

console.log("Result :: ", result);