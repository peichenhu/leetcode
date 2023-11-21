/*
 * @lc app=leetcode.cn id=292 lang=javascript
 *
 * [292] Nim 游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
    /**
     * 因为：
     *      1. 每回合我先拿
     *      2. 每回合每人只能拿 1 到 3 个
     *      3. 每回合开始是 4，我必输。
     *      4. 对方总能做到在一个回合中，两人总共拿 4 个
     * 所以只要是 4 的倍数，俩人每回合总共拿4个，那我一定输。
     *
     */
    return n % 4 !== 0;
};
// @lc code=end
