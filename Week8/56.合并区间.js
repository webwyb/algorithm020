/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 1、先按照数组的第一项从小到大排序
 * 2、遍历数组，对比数组中的项目最后一个值是否比数组中的第一项的最后一个值大
 *    如果大，则合并两项，并继续对比后面的项目
 *    如果不大，说明没有重合，直接推入结果数组
 */
var merge = function (intervals) {
  let res = [];
  // 按照数组的第一项从小到大排序
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  // 取数组第一项作为对比项
  let prev = intervals[0];
  // 遍历数组
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];
    // 有重合项
    if (prev[1] >= cur[0]) {
      prev[1] = Math.max(cur[1], prev[1]);
    } else {
      res.push(prev);
      prev = cur;
    }
  }
  res.push(prev); // 当考察完最后一个区间，后面没区间了，遇不到不重合区间，最后的 prev 没推入 res。要单独补上
  return res;
};
// @lc code=end
