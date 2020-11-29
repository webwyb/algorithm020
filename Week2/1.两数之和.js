/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     // 0、声明一个map用于存储数据，如果map没有当前数据：key 为数组值，value为下标 存储
//     // 1、遍历数组，map 中查找当前是否有 (target - nums[i]) 为Key存在
//     // 2、如果(target - nums[i]) 在map中，返回数组的下标和当前map 对应key 的value
//     let diffMap = new Map();
//     let len = nums.length;
//     for(let i=0; i<len; i++){
//         if(diffMap.has(target-nums[i])){
//             return [diffMap.get(target-nums[i]), i]
//         }else{
//             diffMap.set(nums[i], i)
//         }
//     }
// };
var twoSum = function (nums, target) {
  // 0、用while从后向前便利数组
  // 1、每次遍历先pop最后一个值，再通过indexOf来查找是否有差值，pop的好处是防止有连个数相等
  // 2、如果有对应的值，下标就是对应的indexOf和数组的长度
  let i = nums.length;
  while (i > 1) {
    let last = nums.pop();
    if (nums.indexOf(target - last) !== -1) {
      return [nums.indexOf(target - last), nums.length];
    }
    i--;
  }
};
// @lc code=end
