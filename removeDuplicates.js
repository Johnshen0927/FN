/**
 * @param {number[]} nums
 * @return {number}
 */

function removeDuplicates(nums) {
    var arr = [];
    for (var i = 0, l = nums.length; i < l; i++) {
        for (var j = i + 1; j < l; j++)
            if (nums[i] === nums[j]) {
                j = ++i;
            };
        arr.push(nums[i]);
    }
    console.log(arr);
    return arr.length;
}

let x = [1,1,2];
removeDuplicates(x);