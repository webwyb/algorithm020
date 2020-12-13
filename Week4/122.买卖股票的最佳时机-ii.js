/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 * 贪心算法：只注重于眼下的最优解
 */
var maxProfit = function (prices) {
  let res = 0;
  if (prices.length < 2) {
    return res;
  }
  for (let i = 0; i < prices.length; i++) {
    let diff = prices[i + 1] - prices[i];
    if (diff > 0) {
      res += diff;
    }
  }
  return res;
};
// @lc code=end
