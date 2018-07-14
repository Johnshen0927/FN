/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var arr = [];
    // 将字符串转换为数组以便后续操作
    arr = s.split("");
    // target存放符合条件返回值，默认为-1,即没有找到
    var target = -1;
    for (var i = 0; i < arr.length; i += 1) {
        for (var j = 0; j < arr.length; j += 1) {
            // 两层循环，以每一个值来跟数组中所有值进行对比
            if (j == i) {
                // 当对比对象为自己时，跳过此次内循环
                continue;
            }
            if (arr[i] == arr[j]) {
                // 如果出现下标不同但是值相同，则跳过此次外循环
                break;
            }

        }
        if (j > arr.length - 1) {
            // 当j为数组长即 内 循环完毕，还未找到相同值，则该i值为第一个唯一值下标
            target = i;
            break;
        }
    }
    return target;
};