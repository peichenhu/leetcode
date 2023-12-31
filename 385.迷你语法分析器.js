/*
 * @lc app=leetcode.cn id=385 lang=javascript
 *
 * [385] 迷你语法分析器
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
    if (isNaN(Number(s))) {
        let hash = {};
        let lastValue = null;
        while (1) {
            let reg = /\[([^\[\]]*)\]/;
            let [match, g1] = s.match(reg) || [];
            if (match) {
                const values = g1.split(",");
                const key = "(" + values.join("_") + ")";
                const value = new NestedInteger();
                values.map((val) => {
                    if (val) {
                        if (hash[val]) {
                            value.add(hash[val]);
                        } else {
                            value.add(new NestedInteger(Number(val)));
                        }
                    }
                });
                hash[key] = value;
                lastValue = value;
                // "[123,[456,[789]]]" => "(123_(456_(789)))"
                s = s.replace(match, key);
            } else {
                break;
            }
        }
        return lastValue;
    } else {
        return new NestedInteger(Number(s));
    }
};
// @lc code=end
