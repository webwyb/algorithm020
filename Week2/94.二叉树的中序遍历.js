/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 *
 * 递归式
 * 递归边界
 *
 * 递归
 */
// var inorderTraversal = function(root) {
//     let result = []
//     const inOrder = (root)=>{
//         if(root === null) return;
//         inOrder(root.left)
//         result.push(root.val)
//         inOrder(root.right)
//     }
//     inOrder(root)
//     return result;
// };
/**
 * ----------------------------------
 * 前序
 * 根 - 左 - 右
 * ----------------------------------
 * 后序
 * 左 - 右 - 根
 * ----------------------------------
 * 中序
 * 左 - 根 - 右
 * ----------------------------------
 */
var inorderTraversal = function (root) {
  let result = [];
  if (root === null) return result;
  let stack = [];
  let cur = root;
  while (cur || stack.length) {
    // 找cur的左节点，路经的节点全部入栈
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop(); // 当前节点
    result.push(cur.val);
    cur = cur.right;
  }
  return result;
};
// @lc code=end
