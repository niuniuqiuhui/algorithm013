/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (hash.has(diff)) {
          return [i, hash.get(diff)];
      }
      hash.set(nums[i], i);
  }
};
// @lc code=end

