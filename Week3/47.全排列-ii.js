/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let result = [];
  let track = [];
  let used = {};
  let len = nums.length;
  nums.sort((a, b) => {
    return a - b;
  });
  const dfs = (track, nums) => {
    // 中止条件 index 小于nums.length
    if (track.length === len) {
      result.push(track.slice());
      return;
    }
    for (let index = 0; index < len; index++) {
      // 避免产生重复的排列
      /**
       * 从第二个元素开始，如果当前等于上一个，并且上一个没有使用过，则跳过
       */
      if (
        nums[index - 1] == nums[index] &&
        index - 1 >= 0 &&
        !used[index - 1]
      ) {
        continue;
      }
      if (used[index]) {
        continue;
      }
      used[index] = 1;
      track.push(nums[index]);
      dfs(track, nums);

      track.pop();
      used[index] = 0;
    }
  };
  dfs(track, nums);
  console.log(result);
  return result;
};
permuteUnique([1, 3, 2]);
// @lc code=end
