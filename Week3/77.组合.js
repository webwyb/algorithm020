/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 基于选择了当前数以后，剩下的备选项有几个可以选择
 */
var combine = function (n, k) {
  let res = [];
  const recursion = (n, k, start, track) => {
    if (track.length === k) {
      res.push(track.slice());
      return;
    }
    for (let i = start; i <= n; i++) {
      track.push(i);
      recursion(n, k, i + 1, track);
      track.pop();
    }
  };
  recursion(n, k, 1, []);
  return res;
};
// @lc code=end
