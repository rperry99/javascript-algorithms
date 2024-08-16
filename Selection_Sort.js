// Selection Sort Function
function selectionSort(inputArray) {
  // Selection Sort repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element of the unsorted part.

  // Only start swapping on arrays with 2 or more elements.
  if (inputArray.length > 1) {
    let firstUnsortedIndex; // Variable to hold the first index of the unsorted part of the array.
    let isSwapped;

    for (let i = 0; i < inputArray.length; i++) {
      firstUnsortedIndex = i; // Sets the index we are looking to change to the earliest unsorted index slot.
      isSwapped = false; // Sets up for if the function goes through an iteration without swapping, it can stop the swap. (Redusing number of swaps)

      // Loop through the remaining array.
      for (let j = i + 1; j < inputArray.length; j++) {
        // If the current number being looked at (j) is smaller than the number in the current lowest index, swap them.
        if (inputArray[j] < inputArray[firstUnsortedIndex]) {
          firstUnsortedIndex = j;
          isSwapped = true;
        }
      }

      if (isSwapped) {
        let tempNum = inputArray[i];
        inputArray[i] = inputArray[firstUnsortedIndex];
        inputArray[firstUnsortedIndex] = tempNum;
      }
    }
  }
  // Send the output to the tests
  return inputArray;
}

////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// Test Cases ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// Hold all of the test cases.
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
    const result = selectionSort([...input]); // Passing a copy to keep the original in tact.
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
