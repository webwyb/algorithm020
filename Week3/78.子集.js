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
   * 递归-回溯
   * 对于每一个数，我们都有两种选择，选择它或者不选择它
   * 1、定义一个数组，用于接收最终的结果
   * 2、DFS中，以index小于数组的长度为边界，作为递归的中止条件
   * 3、未中止时每，对个数字执行选择和不选择的操作
   */
  let res = [];
  const dfs = (index, list) => {
    if (index === nums.length) {
      //指针越界
      res.push(list.slice()); //加入子集
      return; // 返回
    }
    list.push(nums[index]); // 选择当前元素
    dfs(index + 1, list); //基于该选择，继续向下

    list.pop(); //上面递归结束，撤销该选择
    dfs(index + 1, list); //不选择这个数，继续向下
  };
  dfs(0, []);
  return res;
};
// @lc code=end
