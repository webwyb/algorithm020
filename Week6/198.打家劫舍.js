/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * dp方程：dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i])
 */
// var rob = function (nums) {
//   if (nums === null || nums.length === 0) {
//     return 0;
//   }
//   let len = nums.length;
//   let dp = new Array(nums.length);
//   dp[0] = nums[0];
//   dp[1] = Math.max(nums[0], nums[1]);
//   for (let i = 2; i < len; i++) {
//     dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
//   }
//   return dp[len - 1];
// };
var rob = function (nums) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  let len = nums.length;
  let first = nums[0],
    second = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len; i++) {
    let temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
};
// @lc code=end
