// Task 7: Implement a function that converts a Roman numeral 
// to an integer. The function should take a Roman numeral string 
// (e.g., "IX" or "XXI") 
// as input and return the corresponding integer value.

function romanToInt(romanNumber) {
    const romanNumbers = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNumber.length; i++) {
      const currentNumber = romanNumber[i];
      const currentValue = romanNumbers[currentNumber];
      const nextNumber = romanNumber[i + 1];
      const nextValue = romanNumbers[nextNumber];
  
      if (nextValue > currentValue) {
        result += nextValue - currentValue;
        i++;
      } else {
        result += currentValue;
      }
    }
  
    return result;
  }
  
  console.log(romanToInt("X"));
  console.log(romanToInt("XX"));
  