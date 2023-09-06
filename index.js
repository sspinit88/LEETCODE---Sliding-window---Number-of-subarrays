/*

Given an array of positive integers nums and an integer k, 
return the number of contiguous subarrays where the product 
of all the elements in the subarray is strictly less than k.

For example, given the input nums = [10, 5, 2, 6], k = 100, 
the answer is 8. The subarrays with products less than k are:

[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]

*/

var numSubarrayProductLessThanK = function (nums, k) {
  const length = nums.length;
  let left = 0;
  let curr = 1;
  let res = 0;

  if (k <= 1) {
    return res;
  }

  for (let right = 0; right < length; right++) {
    curr *= nums[right];

    while (left <= right && curr >= k) {
      curr /= nums[left];
      left++;
    }

    res += right - left + 1;
  }

  return res;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100)); /// 8
