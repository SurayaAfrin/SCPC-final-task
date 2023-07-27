// Task 3: Write a JavaScript program to find the most frequent 
// element in an array and return it. 

function findMostFrequentElement(array) {
    const frequencyCounter = {};
  
    for (const element of array) {
      frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
    }
  
    let mostFrequentElement;
    let maxFrequency = 0;
  
    for (const element in frequencyCounter) {
      if (frequencyCounter[element] > maxFrequency) {
        maxFrequency = frequencyCounter[element];
        mostFrequentElement = element;
      }
    }
    return mostFrequentElement;
  }
  
  const array = [2, 3, 1, 4, 5, 1, 2, 3, 3];
  const mostFrequent = findMostFrequentElement(array);
  console.log(`The most frequent element is:`, mostFrequent);
  
