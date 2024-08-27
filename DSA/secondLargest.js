function getSecondLargest(nums) {
    // Complete the function
    let sortedNumbers = nums.sort((a, b) => b-a );
    let sortedSets = new Set([...sortedNumbers]);
    let convertToArray = [...sortedSets];
    return convertToArray[1];
}