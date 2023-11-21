/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let a = x < 0 ? "-" : "";
    let b = x < 0 ? "-" : "";
    let n = x < 0 ? -x : x;
    while (n >= 10) {
        let m = n % 10;
        n = (n - m) / 10;
        a = a + m;
        b = m + b;
    }

    let m = n % 10;
    a = a + m;
    b = m + b;

    return a === b;
};
// @lc code=end
