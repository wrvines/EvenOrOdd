//alert("hello!");

//prompt number and store it
let userNumber = prompt("Please enter a number to see if it is Even or Odd.");

//do the math to find out the remainder
let result = userNumber % 2;

//compare results
if (result === 0) {
    console.log("Your number of " + userNumber + ", is even.");
} else {
    console.log("Your number of " + userNumber + ", is odd.");
}