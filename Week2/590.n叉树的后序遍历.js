/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    let result = []
    const postOrder = (root)=>{
        if(root === null) return;
        root.children.forEach((item)=>{
            postOrder(item)
        })
        result.push(root.val)
    }
    postOrder(root)
    return result;
};
// @lc code=end

