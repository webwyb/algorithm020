/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 * 1、双层循环
 * 遍历数组Arr2，对于Arr2中的每一个元素，如果存在且在Arr1中，移动到数组前面
 * 2、
 * 声明一个长度为1000 的counts数组，用于统计每个数组出现的次数及是否出现，
 * 遍历Arr1，将数组及出现次数统计到counts中
 * 遍历Arr2，如果存在counts中Arr2中的元素，将counts中的元素推入到结果数组中
 * 遍历counts，将剩余的元素推入到结果数组中
 *
 */
var relativeSortArray = function (arr1, arr2) {
  let counts = new Array(1001).fill(0);
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    counts[arr1[i]]++;
  }
  console.log(counts);
  for (let i = 0; i < arr2.length; i++) {
    while (counts[arr2[i]]) {
      res.push(arr2[i]);
      counts[arr2[i]]--;
    }
  }
  for (let i = 0; i < counts.length; i++) {
    while (counts[i] > 0) {
      res.push(i);
      counts[i]--;
    }
  }
  return res;
};
// @lc code=end
