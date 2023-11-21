/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * 遍历
 * @param {string} s
 * @return {string}
 */
function decodeString(s) {
    let isNum = (c) => !isNaN(+c);

    function decode(prev, num, inner) {
        // console.log(prev, num, inner);
        let list = new Array(+num).fill(inner);
        let next = list.join("");
        return prev + next;
    }

    function loop(s, left) {
        if (!s.includes("[")) return s;
        let prev = "";
        let num = "";
        let inner = "";
        let sum = 0;
        let flag = false; // 是否正在匹配完整[]
        for (let i = left; i < s.length; i++) {
            let c = s[i];
            if (!flag) {
                if (isNum(c)) {
                    num += c;
                } else if (c === "[") {
                    flag = true;
                    inner += c;
                    sum++;
                } else {
                    prev += c;
                }
            } else {
                c === "[" && sum++;
                c === "]" && sum--;
                inner += c;
                if (sum === 0) {
                    // 处理 inner
                    inner = inner.slice(1, inner.length - 1);
                    let innerDecode = decode(prev, num, loop(inner, 0));
                    // 处理 outer
                    let outer = s.slice(i + 1);
                    let outerDecode = loop(outer, 0);
                    // 最终结果
                    return innerDecode + outerDecode;
                }
            }
        }
    }
    return loop(s, 0);
}

/**
 * 正则
 * @param {string} s
 * @return {string}
 */
var decodeString2 = function (s) {
    const [self, times, str] = s.match(/(\d*)\[([^\[\]]*)\]/) || [];
    if (self) {
        const inner = Array(+times).fill(str).join("");
        return decodeString(s.replace(self, inner));
    }
    return s;
};
// @lc code=end
