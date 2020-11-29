/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// var preorderTraversal = function(root) {
//     let result = []
//     const preOrder = (root)=>{
//         if(root === null){return}
//         result.push(root.val)
//         preOrder(root.left)
//         preOrder(root.right)
//     }
//     preOrder(root)
//     return result;
// };
/**
 * 迭代
 * 1、声明一个栈，遍历栈，如果栈不为空，将栈头元素出栈
 * 2、如果出栈的元素有左右孩子结点，先将右孩子入栈，再将孩子入栈
 * 3、循环上述过程，知道栈为空
 * @param {*} root 
 */
var preorderTraversal = function(root) {
    let result = []
    let stack = []
    if(root === null) return result;
    stack.push(root) // 入栈
    while(stack.length){
        let cur = stack.pop() // 出栈 栈顶 元素
        result.push(cur.val) // 存储出栈元素
        if(cur.right){ // 如果当前 出栈节点 有右孩子，右孩子入栈
            stack.push(cur.right)
        }
        if(cur.left){ // 如果当前 出栈节点 有左孩子，左孩子入栈
            stack.push(cur.left)
        }
    }
    return result;
};
// @lc code=end

