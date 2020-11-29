/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 * {
 *      'eat': ['eat', 'tea'],
 *      'tan': ['tan', 'nat']
 * }
 */
// var groupAnagrams = function(strs) {
//     /**
//      * 排序法
//      * 1、声明一个map， 遍历数组
//      * 2、以item的排序作为map 的key， 如果后续的item 是当前key的字母异位词，存放到当前key 的数组中
//      * 3、如果不是，另存为一个map 的key
//      * 4、遍历map的values
//      */
//     let strMap = new Map()
//     for(str of strs){
//         let key = str.split('').sort().join('')
//         if(strMap.has(key)){
//             let arr = strMap.get(key)
//             arr.push(str);
//             strMap.set(key, arr)
//         }else{
//             strMap.set(key, [str])
//         }
//     }
//     return [...strMap.values()];
// }
var groupAnagrams = function(strs) {
    /**
     * 质数法
     */
    let strMap = new Map()
    var prime = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101]
    for(str of strs){
        let key = Array.from(str).reduce(function(prev,curr){
            return prev * prime[curr.charCodeAt()-97]
        },1)
        if(strMap.has(key)){
            let arr = strMap.get(key)
            arr.push(str);
            strMap.set(key, arr)
        }else{
            strMap.set(key, [str])
        }
    }
    return [...strMap.values()];
}
// @lc code=end

