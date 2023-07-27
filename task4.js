// Task 4: Create a function that takes a sorted array 
// of numbers and a target value as input. The function 
// should find two numbers in the array that add up to the 
// target value. Return an array 
// containing the indices of the two numbers.

function findIndicesOfTwoNumbersWithSum(sortedArray, target) {
    let before = 0;
    let after = sortedArray.length - 1;
  
    while (before < after) {
      const sum = sortedArray[before] + sortedArray[after];
  
      if (sum === target) {
        return [before, after];
      } else if (sum < target) {
        before++;
      } else {
        after--;
      }
    }
  
    return [];
  }
  
  const sortedArray = [1, 3, 6, 8, 11, 15];
  const target = 9;
  const indices = findIndicesOfTwoNumbersWithSum(sortedArray, target);
  console.log(`Indices of the two numbers: `, indices);
  