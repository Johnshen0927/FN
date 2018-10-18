/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    for (var i = 0; i < nums.length; i += 1) {
        for (var j = i + 1; j < nums.length - 1; j += 1) {
            if (nums[j] == nums[i]) {
                break;
            } else {
                continue;
            }
        }
    }
};