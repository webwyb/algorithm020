/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    /**
     * 1、按照列求，求第i列能够存储多少水
     * 需对比当前列左右两端最小的 - 当前列的高度 即为当前列能够容纳的水
     * （左右两端最小的 小于/等于 当前列的情况下，无法存储水）
     * 1、从 1< i < height.length-2遍历数组
     * 2、遍历当前 i 左侧最大的
     * 3、遍历当前 i 右侧最大的
     * 4、取出左右侧最小的
     * 5、只有最小的列比当前列大，才能存储水
     */
    let result = 0;
    for (let i = 1; i < height.length-1; i++) {
        // 2、遍历当前 i 左侧最大的
        let left_max = 0;
        for (let j = i-1; j >=0; j--) {
            left_max = Math.max(height[j], left_max)            
        }
        // 3、遍历当前 i 右侧最大的
        let right_max = 0;
        for (let k = i+1; k < height.length; k++) {
            right_max = Math.max(height[k], right_max)
        }
        let side_min = Math.min(left_max, right_max)
        if(height[i]<side_min){
            result += side_min-height[i]
        }
    }
    return result;
};
// @lc code=end

