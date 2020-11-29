/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    /**
     * 辅助队列
     * 1、定义一个辅助队列 queue
     * 2、将树中的根元素推入队列中
     * 3、遍历队列元素是否为空，
     *      如果不为空：弹出第一个元素，如果当前元素有子树，字数入队列
     *      如果为空：不用处理
     */
    let result = [];
    if(root === null){return result}
    let queue = []; // 定义队列
    queue.push(root);
    while(queue.length > 0){
        let queue_len = queue.length
        let temp = []
        for (let i = 0; i < queue_len; i++) {
            let cur = queue.shift()
            temp.push(cur.val)
            cur.children && queue.push(...cur.children)
        }
        result.push(temp)
    }
    return result;
};
// @lc code=end

