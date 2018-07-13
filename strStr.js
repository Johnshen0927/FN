/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
// 当 needle 是空字符串时我们应当返回 0 
var strStr = function (haystack, needle) {
    var arr1 = haystack.split("");
    var arr2 = needle.split("");
    // 判断是否为空字符
    if (!arr2.length) {
        return 0;
    } else {
        // needle长度需要小于等于前者
        if (arr2.length <= arr1.length) {
            for (var i = 0; i < arr1.length; i += 1) {
                // 循环长数组
                // j来定位和判断
                var j = 0;
                if (arr1[i] == arr2[j]) {
                    // 存储i值
                    var tmp = i;
                    // 循环比较
                    while (arr1[tmp] == arr2[j]) {
                        tmp += 1;
                        j += 1;
                        // 当j的长度等于arr2长度时，说明完全相等，比较结束
                        if (j == arr2.length) {
                            console.log(i);
                            return i;
                        }
                    }
                }
            }
            return -1;
        } else {
            return -1;
        }
    }
};
