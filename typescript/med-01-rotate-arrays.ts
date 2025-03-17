/**
 * 
 * 
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
    Example 1:

    Input: nums = [1,2,3,4,5,6,7], k = 3
    Output: [5,6,7,1,2,3,4]
    Explanation:
    rotate 1 steps to the right: [7,1,2,3,4,5,6]
    rotate 2 steps to the right: [6,7,1,2,3,4,5]
    rotate 3 steps to the right: [5,6,7,1,2,3,4]
    Example 2:

    Input: nums = [-1,-100,3,99], k = 2
    Output: [3,99,-1,-100]
    Explanation: 
    rotate 1 steps to the right: [99,-1,-100,3]
    rotate 2 steps to the right: [3,99,-1,-100]
 * 
 */

// const rotateArray = (nums: number[], k: number): void => {
//   for (let i = 0; i < k; i++) {
//     let popItem: number | undefined = nums.pop();
//     nums.splice(0, 0, popItem || 0);
//   }
// };

/**
 *
 *
 * Optimal Solution
 *
 * Steps:
 * 1. Reverse the entire array.
 * 2. Reverse the first k elements.
 * 3. Reverse the last n-k elements.
 */

const rotateArray = (nums: number[], k: number): void => {
  let n = nums.length;
  k = k % n; // To handle k > n

  // Helper function to reverse a portion of the array
  function reverse(start, end) {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }

  // Reverse the entire array
  reverse(0, n - 1);
  // Reverse the first k elements to restore order
  reverse(0, k - 1);
  // Reverse the last n-k elements to restore order
  reverse(k, n - 1);
};

let nums: number[] = [1, 2, 3, 4, 5, 6, 7];

rotateArray(nums, 3);
console.log(nums);
