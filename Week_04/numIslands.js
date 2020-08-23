/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;
  let n = grid.length;
  if (n < 1) return 0;
  let m = grid[0].length;

  const dfs = (grid, i, j) => {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] !== '1') return 
    
    grid[i][j] = 0;
    dfs(grid, i - 1, j);
    dfs(grid, i + 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i, j + 1);

  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j);
        count++;
      }
    }
  }
  return count;
};
// @lc code=end

