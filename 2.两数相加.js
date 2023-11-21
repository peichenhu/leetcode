/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let l3 = null;
    let root = null;
    let n = 0;
    while (l1 || l2) {
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;
        let sum = v1 + v2 + n;
        let num = sum;
        n = 0;

        if (sum >= 10) {
            num = sum - 10;
            n = 1;
        }

        if (l3) {
            l3.next = new ListNode(num, null);
            l3 = l3.next;
        } else {
            root = new ListNode(num, null);
            l3 = root;
        }

        l1 = l1.next;
        l2 = l2.next;
    }

    return root;
};
// @lc code=end
