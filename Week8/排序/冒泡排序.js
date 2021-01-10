/**
 * 冒泡排序
 * 1、常规冒泡
 * 每一轮对比两个元素，将大的元素后移，小的前置，一轮下来，最大的元素会被移动到末尾
 * @param {*} arr
 */
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}
/**
 * 冒泡排序
 * 1、改进冒泡1
 * 每一轮对比两个元素，将大的元素后移，小的前置，一轮下来，最大的元素会被移动到末尾
 * @param {*} arr
 */
function bubbleSort2(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}
/**
 * 冒泡排序
 * 1、改进冒泡2
 * 每一轮对比两个元素，将大的元素后移，小的前置，一轮下来，最大的元素会被移动到末尾
 * @param {*} arr
 */
function bubbleSort3(arr) {
  let len = arr.length;
  let flag = true; // 设立一个flag
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        flag = false; // 如果有更改，说明数组无序，更改flag
      }
    }
    if (flag === true) {
      // 如果flag没有更改，说明数组无序，直接返回，无序再循环
      return arr;
    }
  }
  return arr;
}
