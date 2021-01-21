/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 * 方法1
 * 维护26个字母的Map，遍历数组，如果遇到大写的，更改为对应的小写
 *
 * 方法2
 * 1、遍历字符串，得到每个字符串的charCodeAt()
 * 2、如果当前字符串的str.charCodeAt() > 97 则为大写
 * 3、利用规律将该字符串转为对应的小写字符
 * 'a'.charCodeAt() = 97     'b'.charCodeAt() = 98  ...   'z'.charCodeAt() = 122   (-32)
 * 'A'.charCodeAt() = 65     'B'.charCodeAt() = 66  ...   'Z'.charCodeAt() = 90
 *--------------------------------------------------
 * 小写字符 a-z 97--122
 * 大写字符 A-Z 65--90
 * 大写和小写相差32
 * 字符串转ASCII 'xx'.charCodeAt()
 * ASCII转字符串 String.fromCharCode(xx)
 *
 * toLowerCase() 转大写
 * toUpperCase() 转小写
 */
var toLowerCase = function (str) {
  for (let i = 0; i < str.length; i++) {
    if (65 <= str[i].charCodeAt() && str[i].charCodeAt() <= 90) {
      let lowerStr = String.fromCharCode(str[i].charCodeAt() + 32);
      str = str.replace(str[i], lowerStr);
    }
  }
  return str;
};
// @lc code=end
