/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const m = grid.length - 1;
  const n = grid[0].length - 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 && j !== 0) {
        grid[i][j] = grid[i][j - 1] + grid[i][j];
      } else if (i !== 0 && j === 0) {
        grid[i][j] = grid[i - 1][j] + grid[i][j]; 
      } else if (i !== 0 && j !== 0) {
        grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
      }
    }
  } 

  return grid[m][n];

};
// @lc code=end

