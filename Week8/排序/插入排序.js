/**
 * 插入排序
 * "元素在他前面序列中的正确位置"
 * 1、遍历数组，判断当前元素对于前面的序列应该处于的位置
 * 2、从后向前遍历当前元素前面的序列 ==>
 *    1、当前序列的元素为该元素让出合理的位置
 * @param {*} arr
 */
function insertStort(arr) {
  let len = arr.length;
  let temp; // 声明临时变量，存储需要移动的元素arr[i]
  for (let i = 1; i < len; i++) {
    temp = arr[i];
    let j = i; // 声明临时变量j, 用于保存当前元素的索引，避免污染外层的循环i
    // 为当前元素寻找在前面序列中的位置
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]; // 前面的序列让出位置
      j--;
    }
    arr[j] = temp; // 当前元素应该在的正确位置
  }
  return arr;
}
