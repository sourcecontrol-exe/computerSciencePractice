/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
	let seta = new Set(nums1);
	let ans = new Set();
	for (ele of nums2){
	    if (seta.has(ele)) ans.add(ele);
	}
	return [...ans];
};
// @lc code=end

