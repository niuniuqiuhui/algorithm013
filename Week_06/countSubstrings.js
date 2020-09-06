/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  const len = s.length;
  let count = 0;
  const dp = new Array(len);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= i; j++) {
      if (s[i] === s[j] && (i - j <= 1 || dp[j + 1])) {
        dp[j] = true;
        count++;
      } else {
        dp[j] = false;
      }
    }
  }
  return count;
};
// @lc code=end

