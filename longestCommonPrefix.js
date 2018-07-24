/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // 先判断数组长度
    if (strs.length == 1) {
        // 长度为1则公共前缀为strs[0]
        return strs[0]
    }
    // 用result存储公共前缀
    let result = ""
    // 用store存储对比字母
    let store = "";
    for (let i = 0; i < strs[0].length; i += 1) { // 第一层遍历首字符串的每一个字符
        for (let j = 1; j < strs.length; j += 1) { //第二层遍历数组中除了第一个字符串的其他字符串
            // 如果其他非首字符串的第i位与首字符串的第i位不相等
            if (strs[j][i] != strs[0][i]) {
                // 清空store
                store = "";
                //不相等则跳出二层循环
                break;
            }
            // 用store记录该字母
            store = strs[0][i];
        }
        // 为空，则对比不同,跳出
        if (store == "") {
            break;
        }
        result += strs[0][i];
    }
    return result;
};

// let param = ["fuck", "fun","fly"]
// console.log(longestCommonPrefix(param))