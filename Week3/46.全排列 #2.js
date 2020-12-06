/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  const backtrack = (index, track) => {
    // 中止条件
    if (index === nums.length) {
      res.push(track.slice());
      return;
    }
    // 当前层处理
    for (let i = 0; i < nums.length; i++) {
      if (track.includes(nums[i])) {
        continue;
      }
      track.push(nums[i]);
      backtrack(index + 1, track);
      track.pop();
    }
    // 下一层处理逻辑
    // 清楚状态
  };
  backtrack(0, []);
  return res;
};
// @lc code=end
