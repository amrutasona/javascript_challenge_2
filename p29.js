function isSumLessThanThird(num1, num2, num3) {
    let sum = num1 + num2;
    return sum < num3;
}

// Example with print statement
let num1 = 5;
let num2 = 7;
let num3 = 15;
let result = isSumLessThanThird(num1, num2, num3);
console.log("First number:", num1);
console.log("Second number:", num2);
console.log("Third number:", num3);
console.log("Sum of first two numbers:", num1 + num2);
console.log("Is sum less than third number?", result);