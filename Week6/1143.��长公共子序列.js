/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  // 如果text1 或text2为空的，return 0
  let m = text1.length;
  let n = text2.length;
  if (m === 0 || n === 0) {
    return 0;
  }
  // 将text1 和 text2 转化为2维数组
  let dp = new Array(m + 1).fill(0).map(() => {
    return new Array(n + 1).fill(0);
  });
  console.log(dp);
  // 状态转移方程
  /**
   * 1、如果text1[i-1] === text2[j-1]: dp[i][j] = 1 + dp[i-1][j-1]
   * 2、如果不相等， dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
   */
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
};
longestCommonSubsequence("abcde", "ace");
// @lc code=end
