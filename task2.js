// Task 2 : Create a function that takes an array of numbers as
// input and returns the sum of all positive numbers in the array. 

function sumOfPositiveNumbers(numbers){
    let sum = 0;
    for(i = 0; i <= numbers.length; i++){
        if(numbers[i] >= 0){
            sum = sum + numbers[i]
        }
    }
    return sum
}

const array = [2, -5, 10, -3, 7]
const sum = sumOfPositiveNumbers(array)
console.log(sum);