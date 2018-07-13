/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    // 处理空格前缀
    str = str.replace(/\s/g, "");
    // 将传入字符转换为数组
    var arr = str.split("");
    // 先将首字符非数字的值筛掉
    var start = parseInt(arr[0]);
    // 先判断是否为前缀

    function last(val) {
        // 当满足转换条件
        // 变量存储转换值
        var temp = [];
        if (val[0] == "-" || val[0] == "+") {
            temp.push(val[0]);
            val.shift();
        }
        for (var i = 0; i < val.length; i += 1) {
            var num = parseInt(val[i]);
            if (!isNaN(num)) {
                temp.push(num);
            } else {
                // 当不符合时，退出循环
                break;
            }

        }
        // 判断值的大小是否符合范围值
        var resualt = temp.join("");
        if (resualt > (Math.pow(2, 31) - 1)) {
            resualt = Math.pow(2, 31) - 1;
        } else if (resualt < Math.pow(-2, 31)) {
            resualt = Math.pow(-2, 31);
        }
        resualt = Number(resualt);
        return resualt;
    }


    if (arr.length <= 1 && isNaN(start)) {
        return 0;
    }
    if (isNaN(start)) {
        if ((arr[0] != "-" && arr[0] != "+")) {
            return 0;
        } else {
            last(arr);
        }
    } else {
        last(arr);
    }
};

console.log(myAtoi("12323"));