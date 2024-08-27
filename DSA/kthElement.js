function findKthElement(arr, k) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= (k + count)) {
            count++;
        }
    }

    return k + count;
}

let arr = [1, 3, 4, 6, 7, 8, 12]; // [2,5,9,10,11];

let result = findKthElement(arr, 3);

console.log("result :: ", result)

