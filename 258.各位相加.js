/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    if (num < 10) return num;

    let ans = 0;

    while (num >= 10) {
        let sum = 0;

        while (num >= 10) {
            let rest = num % 10;
            num = (num - rest) / 10;
            sum = sum + rest;
        }

        sum += num;

        if (sum < 10) {
            ans = sum;
            break;
        }

        num = sum;
    }

    return ans;
};
// @lc code=end
