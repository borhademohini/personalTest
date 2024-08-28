// const twoSum = (arr, num) => {
//     let obj = {};
//     let res = [];
//     arr.map(item => {
//       let com = num - item; 
//       if (obj[com]) {
//         res.push([obj[com], item]);
//       } else {
//         obj[item] = item;
//       }
//     });
//     return res;
//   };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let find;
  let char = {};
  let charIndex = {};
  for (let i=0; i < nums.length; i++) {
      let compliment = (target - nums[i]);
      if (typeof char[compliment] !== 'undefined') {
          find = [charIndex[compliment], i];
          return find;
      } else {
          char[nums[i]] = nums[i];
          charIndex[nums[i]] = i;
      }
      
  }
  return find;
};

  let result = twoSum([-3,4,3,90], 0);
  console.log("result :: ", result)