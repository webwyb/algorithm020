/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 暴力递归 O(2的N次方)
// var fib = function (n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// };

// 带记事本的递归 O(N)
// var fib = function (n) {
//   if (n <= 1) {
//     return n;
//   }
//   let memo = [];
//   if (memo[n] == undefined) {
//     memo[n] = fib(n - 1) + fib(n - 2);
//   }
//   return memo[n];
// };

// DP数组的迭代 - 自底向上 O(n)
var fib = function (n) {
  let DP = {
    0: 0,
    1: 1,
  };
  for (let i = 2; i <= n; i++) {
    DP[i] = DP[i - 1] + DP[i - 2];
  }
  return DP[n];
};

// 状态压缩
var fib = function (n) {
  if (n <= 1) {
    return n;
  }
  let prev = 0,
    curr = 1;
  for (let i = 2; i <= n; i++) {
    let sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
};
// @lc code=end
