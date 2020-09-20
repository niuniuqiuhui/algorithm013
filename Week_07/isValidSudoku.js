/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const row = {};
  const column = {};
  const boxes = {};

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      if (num !== '.') {
        let boxIndex = parseInt((i/3)) * 3 + parseInt(j/3);
        if (row[i + '-' + num] || column[j + '-' + num] || boxes[boxIndex + '-' + num]) {
          return false;
        }
        row[i + '-' + num] = true;
        column[j + '-' + num] = true;
        boxes[boxIndex + '-' + num] = true;
      }
    }
  }
 return true;
};
// @lc code=end

