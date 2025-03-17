/**
 * 
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
  Example 1:

  Input: nums = [0,1,0,3,12]
  Output: [1,3,12,0,0]
  Example 2:

  Input: nums = [0]
  Output: [0]
  } nums 
 */

var moveZeroes = (nums) => {
  // brute force solution
  /*
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            result.push(nums[i]);
        }
    }

    // substract the length of the new array minus the original array to obtain the number of zeroes to be added
    const zeroCount = nums.length - result.length;

    // add zeroes to the new array
    for (let i = 0; i < zeroCount; i++) {
        result.push(0);
    }

    // copy the values to the original array
    for(let i =0 ; i < result.length; i++) {
        nums[i] = result[i];
    }*/
  // Optimal solution
  // position to place the next non-zero element
  let lastNonZeroFoundAt = 0;

  // iterate through the array
  for (let current = 0; current < nums.length; current++) {
    // check if the current element is non-zero
    console.log("current : ", current);
    console.log("lastNonZeroFoundAt : ", lastNonZeroFoundAt);
    if (nums[current] !== 0) {
      // console.log('before A ' + nums)
      // swap the elements at current position with the last non-zero position
      [nums[lastNonZeroFoundAt], nums[current]] = [
        nums[current],
        nums[lastNonZeroFoundAt],
      ];
      console.log("after B    " + nums);
      // move to the next position for non-zero element
      lastNonZeroFoundAt++;
    }
  }
};

//   var nums = [4, 0, 12, 3, 7, 0];
var nums = [0, 1, 0, 3, 12, 0, 634, 9];
console.log("Original " + nums);
//   console.log("before " + nums.shift());
moveZeroes(nums);

console.log("after " + nums);
