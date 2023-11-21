/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 递增哈希表
    let hash = {};
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (hash[num] === undefined) {
            hash[target - num] = i;
        } else {
            ans = [hash[num], i];
            break;
        }
    }
    return ans;
};
// @lc code=end
