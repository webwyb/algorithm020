/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 * 方法1：DFS
 * 1、遍历给定的二维数组 grid
 * 2、对于当前点 grid[i][j] 搜索他的上下左右是否有相邻的1，
 *   - 如果有，递归的遍历,并将当前点设置为 0
 *   - 如果没有，则当前构成一个岛屿，return， res+1
 */
function helper(grid, row, col, i, j) {
  if (i < 0 || j < 0 || i > row - 1 || j > col - 1 || grid[i][j] === "0") {
    return;
  }
  grid[i][j] = "0";
  helper(grid, row, col, i + 1, j);
  helper(grid, row, col, i, j + 1);
  helper(grid, row, col, i - 1, j);
  helper(grid, row, col, i, j - 1);
}

var numIslands = function (grid) {
  let res = 0;
  let row = grid.length;
  let col = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        helper(grid, row, col, i, j);
        res += 1;
      }
    }
  }
  return res;
};
// @lc code=end
