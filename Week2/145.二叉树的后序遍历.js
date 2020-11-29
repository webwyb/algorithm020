/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * 递归
 */
// var postorderTraversal = function(root) {
//     let result =[]
//     const postorder = (root)=>{
//         if(!root)return;
//         postorder(root.left);
//         postorder(root.right);
//         result.push(root.val)
//     }
//     postorder(root);
//     return result;
// };
/**
 * 
 * @param {*} root
 * 迭代
 * 左 - 右 - 根
 * |   |
 * |   |
 * ——————
 */
var postorderTraversal = function(root) {
    let result =[]
    if(!root){return result}
    let stack = []
    stack.push(root)
    while(stack.length){
        let cur = stack.pop();
        result.unshift(cur.val);
        if(cur.left){
            stack.push(cur.left)
        }
        if(cur.right){
            stack.push(cur.right)
        }
    }
    return result;
};
// @lc code=end

