// 1.Write a function that takes an input of item prices and returns the total bill.
function calculateTotalBill(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
    console.log("total")
  }
}




// 2.Convert Temperature (Celsius to Fahrenheit).
  function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log("Fahrenheit") 
  }




  
  //3.	Find the Largest Number in an Array.
  function findLargestNumber(arr) {

    const numbers = [3, 5, 7, 2, 8, 1];
    const largest = findLargestNumber(numbers);
    console.log("The largest number is:", largest);
  }
    




//9.	Write a JavaScript function that checks whether a number is prime.
  function isPrime(num) {
    if (num < 2) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
      console.log(isPrime(5));   // Output: true
      console.log(isPrime(15));  // Output: false
      }
    }
  }
  





//10.	Write a program to print pattern.
	function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }
        console.log(row);
    }
}

    




//11.	Write a function that assigns grades based on marks using nested if-else.
function assignGrade(marks) {
if (marks >= 90) {
  return 'A';
} else if (marks >= 80) {
  return 'B';
} else if (marks >= 70) {
  return 'C';
} else if (marks >= 60) {
  return 'D';
} else {
  return 'Fail';
}
}
