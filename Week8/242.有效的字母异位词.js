/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//     // 1、将两个字符串按照从小到达排序并拼接成字符串
//     // 2、如果两个字符串完全相等，则是有效的字母异位词
//     if(s.length !== t.length) return false
//     let sort_s = s.split('').sort()
//     let sort_t = t.split('').sort()
//     return sort_s.join('') === sort_t.join('');
// };
var isAnagram = function(s, t) {
    /**
     * 对比两个字符串每个字母出现的单词数是否相等
     * 1、遍历字符串s,将每个单词出现的次数存入到 Map中
     * 2、遍历字符串t,将t中的出现的字符在Map中，减去对应的次数
     * 3、如果Map中字符串长度都为0，则是有效的字母异位词
     */
    if(s.length !== t.length) return false;
    let strMap = new Map();
    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        strMap.set(ch, strMap.has(ch) ? strMap.get(ch)+1 : 1)
    }
    for (let i = 0; i < t.length; i++) {
        let ch = t.charAt(i);
        strMap.set(ch, strMap.get(ch) ? strMap.get(ch)-1 : 1)
    }
    return [...strMap.values()].every((item)=>{
        return item === 0;
    });
}
// @lc code=end

