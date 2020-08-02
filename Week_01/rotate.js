/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * 方法一
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//   let length = nums.length;
//   let n = k % length;
//   resever(nums, 0, length - 1);
//   resever(nums, 0 , n - 1);
//   resever(nums, n, length - 1);
// };

// // 反转数组
// var resever = function(nums, start, end) {
//   while(start < end) {
//     let temp = nums[start];
//     nums[start] = nums[end];
//     nums[end] = temp;
//     start++;
//     end--;
//   }
//   return nums;
// }

/**
 * 方法二
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const length = nums.length;
  const n = k % length;
  nums.splice(0, 0, ...nums.splice(length - n, length - 1));
};

// @lc code=end