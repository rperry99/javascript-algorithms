// Bubble Sort Function
function bubbleSort(inputArray) {
  let hasSwapped; // Boolean to check to see if a swap happened during the inner loop.

  // Check if the inputArray has more than one element. If so, begin sorting, if not, skip it.
  if (inputArray.length > 1) {
    // Loop through the array (keeps track of how many times the array needs to be gone through).
    for (let i = 0; i < inputArray.length; i++) {
      // Resets hasSwapped.
      hasSwapped = false;
      // For every loop of the array, loop again, comparing the current number to the following number.
      for (let j = 0; j < inputArray.length - i - 1; j++) {
        // If the current number is larger than the next number, then the numbers swap.
        if (inputArray[j] > inputArray[j + 1]) {
          const tempNum = inputArray[j];
          inputArray[j] = inputArray[j + 1];
          inputArray[j + 1] = tempNum;
          hasSwapped = true;
        }
      }

      // If it goes through all options for J, and a swap didn't happen, it means the sort is done.
      // Handles edge case of when the array is sorted before the i loop has a chance to finish.
      if (!hasSwapped) {
        break; // Exit early
      }
    }
  }
  return inputArray;
}

////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// Test Cases ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// Hold all of the test cases for the bubble sort.
const TESTCASES = {
  array1: {
    input: [5, 12],
    expected: [5, 12],
  },
  array2: {
    input: [9, 3, 14],
    expected: [3, 9, 14],
  },
  array3: {
    input: [22, 7, 22, 15],
    expected: [7, 15, 22, 22],
  },
  array4: {
    input: [1, 8, 13, 2, 9],
    expected: [1, 2, 8, 9, 13],
  },
  array5: {
    input: [31, 44, 17, 8, 31, 2],
    expected: [2, 8, 17, 31, 31, 44],
  },
  array6: {
    input: [6, 13, 7, 6, 18, 4, 13],
    expected: [4, 6, 6, 7, 13, 13, 18],
  },
  array7: {
    input: [20, 11, 9, 3, 15, 6, 2, 8],
    expected: [2, 3, 6, 8, 9, 11, 15, 20],
  },
  array8: {
    input: [14, 27, 14, 5, 32, 18, 14, 9, 11],
    expected: [5, 9, 11, 14, 14, 14, 18, 27, 32],
  },
  array9: {
    input: [45, 29, 13, 45, 7, 22, 3, 11, 45, 29],
    expected: [3, 7, 11, 13, 22, 29, 29, 45, 45, 45],
  },
  array10: {
    input: [19, 23, 5, 8, 13, 5, 21, 34, 5, 10, 19],
    expected: [5, 5, 5, 8, 10, 13, 19, 19, 21, 23, 34],
  },
  array11: { input: [5], expected: [5] },
  array12: { input: [], expected: [] },
};

// Function to run the tests
function runTests(testCases) {
  for (const [key, { input, expected }] of Object.entries(testCases)) {
    const result = bubbleSort([...input]); // Passing a copy to keep the original in tact.
    const isPassed = JSON.stringify(result) === JSON.stringify(expected);

    console.log(`Test ${key}: ${isPassed ? 'PASSED' : 'FAILED'}`);
    console.log('Original: ', input);
    console.log('Expected: ', expected);
    console.log('Actual: ', result);
    console.log('--------------------');
  }
}

// Run the tests when you run the program.
runTests(TESTCASES);
