/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * 方法一
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//   if (s.length !== t.length) return false;
//   const hash = new Map();

//   for (const i in s) {
//     if (hash.has(s[i])) {
//       hash.set(s[i], hash.get(s[i]) + 1);
//     } else {
//       hash.set(s[i], 1);
//     }
//   }
//   for (const j in t) {
//     const str = hash.get(t[j]);
//     if (!hash.has(t[j])) {
//       return false;
//     } else {
//       if (str > 1) {
//         hash.set(t[j], hash.get(t[j]) - 1);
//       } else {
//         hash.delete(t[j]);
//       }
//     }
//   }
//   return true;
// };

/**
 * 方法二
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  return s.split('').sort().join('') === t.split('').sort().join('');
}
// @lc code=end

