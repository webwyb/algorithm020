/**
 * 选择排序
 * 从当前范围内寻找最小值，并将最小值放到头部，缩小范围继续执行此步骤
 * 1、遍历当前数组
 * @param {*} arr
 */
function selectSort(arr) {
  let minIndex = 0; // 声明一个最小值得索引
  let len = arr.length;
  // 外层循环控制左侧编辑范围
  for (let i = 0; i < len - 1; i++) {
    minIndex = i; // 将最小值设置为左侧第一个元素
    // j为右侧范围，遍历右侧是否有minIndex小的元素，有的话，将最小下标设置该值
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 判断最小下标是否为最左侧的元素，如果不是，和最左侧元素互换位置
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
