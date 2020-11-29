/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 * 递归
 */

/**
 * 迭代
 * 前序： 根 - 左 - 右
 * 入栈： 右 左
 */
var preorder = function (root) {
  let result = [];
  if (!root) return result;
  let stack = [];
  stack.push(root);
  while (stack.length) {
    let cur = stack.pop();
    result.push(cur.val);
    if (cur.children) {
      for (let index = cur.children.length - 1; index >= 0; index--) {
        const element = cur.children[index];
        stack.push(element);
      }
    }
  }
  return result;
};
// @lc code=end
