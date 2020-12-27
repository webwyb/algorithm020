/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 自顶向下 - 备忘录
var coinChange = function (coins, amount) {
  let memo = [];
  return dp(coins, amount, memo);
};
var dp = function (coins, amount, memo) {
  if (memo[amount]) {
    return memo[amount];
  }
  if (amount == 0) {
    return 0;
  }
  if (amount < 0) {
    return -1;
  }

  let res = Infinity;
  for (let coin of coins) {
    subproblem = dp(coins, amount - coin, memo);
    if (subproblem == -1) continue;
    res = Math.min(res, 1 + subproblem);
  }
  memo[amount] = res;
  return res != Infinity ? res : -1;
};

// var coinChange = function (coins, amount) {
//   let dpMap = new Map();
//   dpMap.set(0, 0);
//   for (let i = 0; i < dpMap.size; i++) {
//     for (const coin of coins) {
//       if (i - coin < 0) {
//         continue;
//       }
//       dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
//     }
//   }
//   return dp[amount] === amount + 1 ? -1 : dp[amount];
// };
// @lc code=end
