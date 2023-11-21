/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let n_1 = 0;
    let n_2 = 1;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = n_1 + n_2;
        n_1 = n_2;
        n_2 = ans;
    }
    return ans;
};
// @lc code=end
