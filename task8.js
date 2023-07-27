// Task 8: Implement a JavaScript function to find the second 
// smallest element in an array of numbers. 
// The function should return the second smallest number.

function findSecondSmallest(array) {
    if (array.length < 2) {
      console.log('Array should have at least two elements.');
    }
  
    array.sort((a, b) => a - b);
  
    if (array[0] === array[1]) {
      console.log('No second smallest element found in the array.');
    }
    return array[1];
  }
  
  const array = [5, 10, 2, 7, 9];
  const secondSmallest = findSecondSmallest(array);
  console.log(`The second smallest element is:`, secondSmallest);
  