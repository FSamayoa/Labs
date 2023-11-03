// function subsetSum(nums, n) {
//   // Your code here:
//   let sums = new Set([0]);
​
//   for (let num of nums) {
//     const sumsCopy = [...sums];
​
//     for (let sum of sumsCopy) {
//       const newSum = num + sum;
//       if (newSum === n) return true;
//       //SIN USAR SET PARA EVITAR SUMAS REPETIDAS
//       // if (!sums.includes(newSum)) {
//       //   if (newSum < n) sums.push(newSum);
//       // }
//       if (newSum < n) sums.add(newSum);
//     }
//   }
//   return false;
// }
​
// CON RECURSION
function subsetSum(nums, n, index = 0) {
  //caso de corte
​
  if (n === 0) return true;
  if (n < 0) return false;
  if (index > nums.length) return false;
​
  return (
    subsetSum(nums, n - nums[index], index + 1) || subsetSum(nums, n, index + 1)
  );
}
​
// Recursion con memoization
​
const subsetSumRecMemo = (nums, target, index = 0, memo = {}) => {
  if (memo.hasOwnProperty(target)) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;
  if (index > nums.length) return false;
  const whenIncluded = subsetSumRec(nums, target - nums[index], index + 1);
  const whenExcluded = subsetSumRec(nums, target, index + 1);
  memo[target] = whenExcluded;
  memo[target - nums[index]] = whenIncluded;
  return whenExcluded || whenIncluded;
};
​
console.log(subsetSum([1, 2, 10, 5, 3], 9)); //(true);
console.log(subsetSum([1, 10, 5, 3], 19)); //(true);
console.log(subsetSum([1, 10, 5, 3], 2)); //(false);
console.log(subsetSum([1, 10, 5, 3], 10)); //(true);
​
module.exports = subsetSum;