/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  /**
   * 贪心算法，优先给胃口大的小孩打的饼干
   * 1、将饼干和小孩从小到大排序
   * 2、反向遍历小孩，如果饼干有并且饼干大于小孩的胃口，满足小孩数+1， 饼干和小孩移动
   */
  g.sort((a, b) => {
    return a - b;
  });
  s.sort((a, b) => {
    return a - b;
  });
  let si = s.length - 1;
  let res = 0;
  for (let gi = g.length - 1; gi >= 0; gi--) {
    if (si >= 0 && s[si] >= g[gi]) {
      res++;
      si--;
    }
  }
  console.log(res);
  return res;
};
// @lc code=end
