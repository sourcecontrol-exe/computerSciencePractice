/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	if(x < 0) return false;
    let arr = String.split();
    let result = true, head = 0; tail = arr.length -1;
    while(head <= tail){
	if(arr[head] == arr[tail]){
		head ++; tail--;
	}
	else return false;
    }
    return result;
};
// @lc code=end

