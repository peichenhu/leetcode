/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let root = null;
    let node = head;
    while (node) {
        let next = node.next;
        node.next = null;
        if (root) node.next = root;
        root = node;
        node = next;
    }
    return root;
};
// @lc code=end
