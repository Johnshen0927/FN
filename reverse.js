/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    // 多次转换将数字转为数组以便操作
    var str = x.toString();
    var arr = [];
    arr = str.split("");
    var newArr = [];
    var sign = '';
    arr.forEach(function (ele) {
        // 如果是NaN，则将值存入sign
        if (isNaN(ele)) {
            sign = ele;
        } else {
            // 如果可以转换为数字，则由开头往末尾推入该值
            newArr.unshift(ele);
        }
    });

    var newStr = sign;
    newArr.forEach(function (val) {
        newStr += val;
    });
    // 将拼接完毕的字符串转换为数字
    newStr = parseInt(newStr);

    // 32位大小，所以需要做一个数字区间
    if (newStr >= (Math.pow(2, 31) - 1) || newStr <= (Math.pow(-2, 31))) {
        return 0;
    } else {
        return newStr;
    }
};

