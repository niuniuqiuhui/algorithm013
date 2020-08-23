/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = 0, ten = 0;

  for (let i = 0; i <= bills.length - 1; i++) {
    if (bills[i] === 5) {
      five++;
    }
    if (bills[i] === 10) {
      if (five < 1) return false;
      ten++;
      five--;
    }
    if (bills[i] === 20) {
      if (ten > 0 && five > 0) {
        ten--;
        five--;
      } else if (five >= 3) {
        five = five - 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end

