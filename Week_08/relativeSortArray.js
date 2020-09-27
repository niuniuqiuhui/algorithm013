/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  return arr1.sort((a, b) => {
    const a1 = arr2.indexOf(a)
    const b1 = arr2.indexOf(b)

    if (a1 === -1 && b1 === -1) {
      return a - b
    } else if (a1 === -1) {
      return 1
    } else if (b1 === -1) {
      return -1
    } else {
      return a1 - b1
    }

  })
};
// @lc code=end

