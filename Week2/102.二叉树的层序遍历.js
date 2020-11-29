/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = [];
  if (root === null) {
    return result;
  }
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let curQueueLen = queue.length;
    let temp = [];
    for (let i = 0; i < curQueueLen; i++) {
      let cur = queue.shift();
      temp.push(cur.val);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    result.push(temp);
  }
  return result;
};
// @lc code=end
