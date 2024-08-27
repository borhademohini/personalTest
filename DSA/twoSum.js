const twoSum = (arr, num) => {
    let obj = {};
    let res = [];
    arr.map(item => {
      let com = num - item;
      if (obj[com]) {
        res.push([obj[com], item]);
      } else {
        obj[item] = item;
      }
    });
    return res;
  };

  let result = twoSum([10, 15, 20, 30, 40, 25, 15], 40);
  console.log("result :: ", result)