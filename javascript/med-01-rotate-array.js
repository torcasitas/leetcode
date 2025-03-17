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

const rotateArray = (nums, k) => {
  for (let i = 0; i < k; i++) {
    let popItem = nums.pop();
    nums.splice(0, 0, popItem);
  }

  //   console.log('rotated ', rotatedItems);
  //   nums;
};

let nums = [1, 2, 3, 4, 5, 6, 7];
let nums2 = [-1, -100, 3, 99];

rotateArray(nums, 3);
rotateArray(nums2, 2);
console.log("After ", nums);
console.log("After ", nums2);
