/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  /**
   * 如果遍历10， 则数组中减少一个5
   * 如果遍历到20， 则数组中减少 10，5 或者 3个5
   */

  let five = 0,
    ten = 0,
    twenty = 0;
  for (let index = 0; index < bills.length; index++) {
    const element = bills[index];
    if (element === 5) {
      five++;
    }
    if (element === 10) {
      if (five >= 1) {
        five--;
        ten++;
      } else {
        return false;
      }
    }
    if (element === 20) {
      if (five >= 1 && ten >= 1) {
        five--;
        ten--;
      } else if (five >= 3) {
        five -= 3;
        twenty++;
      } else {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end
