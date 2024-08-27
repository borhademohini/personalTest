function binarySearch (arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end ) {
        let middle = Math.floor((start + end) / 2); 

        if (arr[middle] === target) {
            return middle;
        } else if (arr[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return -1;
}

let arr = [1, 5, 9, 12, 30, 57];

let result = binarySearch(arr, 11);

console.log("result :: ", result)