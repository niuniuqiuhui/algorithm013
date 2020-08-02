/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * 方法一
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   if (nums.length <= 0) return 0;
//   let i = 0;
//   for (let j = 1; j < nums.length; j++) {
//     if (nums[i] !== nums[j]) {
//       i++;
//       nums[i] = nums[j];
//     }
//   }
//   return i+1;
// };

/**
 * 方法二：在方法一的基础上做了优化
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      if (i != j) {
        nums[i] = nums[j];
      }
    }
  }
  return i+1;
};
// @lc code=end