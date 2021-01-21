/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 方式1:
 * 1、以空格为切分符，将字符串切分为数组
 * 2、过滤数组，去除空格
 * 3、取最后一个项目的长度
 *
 * 方式2:
 * 1、去除字符串首尾空格
 * 2、从后向前遍历，当遍历到空格时，停止，此时index+1即最后一个单词的长度
 */
// var lengthOfLastWord = function (s) {
//   let strArr = s.split(" ");
//   let filterArr = strArr.filter((item) => {
//     return !!item.trim();
//   });
//   if (!filterArr.length) {
//     return 0;
//   }
//   return filterArr[filterArr.length - 1].length;
// };
var lengthOfLastWord = function (s) {
  let noSpaceStr = s.trim();
  let len = noSpaceStr.length;
  if (noSpaceStr.indexOf(" ") === -1) {
    console.log(noSpaceStr.length);
    return noSpaceStr.length;
  }
  for (let i = len - 1; i >= 0; i--) {
    if (noSpaceStr[i] === " ") {
      console.log(len - i - 1);
      return len - i - 1; // 11 - 5 + 1
    }
  }
};
lengthOfLastWord(" ");
// @lc code=end
