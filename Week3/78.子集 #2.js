/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  /**
   * 子集问题
   * 每一次选择数据时，查看备选数组中，有那几个可以选择选项
   */
  let res = [];
  const recursion = (start, track, nums) => {
    res.push(track.slice());
    for (let i = start; i < nums.length; i++) {
      track.push(nums[i]);
      recursion(i + 1, track, nums); // 递归看，基于上述选择后，剩下的可选择数据
      track.pop();
    }
  };
  recursion(0, [], nums);
  return res;
};
// @lc code=end
