/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    const v1 = version1.split(".");
    const v2 = version2.split(".");
    for (let i = 0; i < v1.length || i < v2.length; i++) {
        let num1 = +v1[i] || 0;
        let num2 = +v2[i] || 0;
        if (num1 === num2) continue;
        return num1 > num2 ? 1 : -1;
    }
    return 0;
};
// @lc code=end
