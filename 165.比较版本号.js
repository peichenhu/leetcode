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
    const tempA = version1.split(".");
    const tempB = version2.split(".");
    const maxLen = Math.max(tempA.length, tempB.length);
    for (let i = 0; i < maxLen; i++) {
        const valueA = +tempA[i] || 0;
        const valueB = +tempB[i] || 0;
        if (valueA === valueB) continue;
        return valueA > valueB ? 1 : -1;
    }
    return 0;
};
// @lc code=end
