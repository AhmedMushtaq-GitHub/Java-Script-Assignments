// Step 1: User se email aur password maangna
var userEmail = prompt("Enter your email:");
var userPassword = prompt("Enter your password:");

// Assume karein ke aapka initial balance 1000 hai
var initialBalance = 1000;

// Step 2: User se amount maangna
var enteredAmount = prompt("Enter the amount you want to withdraw:");

// Parse the enteredAmount as a number
enteredAmount = parseFloat(enteredAmount);

// Step 3: Calculate remaining balance
var remainingBalance = initialBalance - enteredAmount;

// Step 4: Display remaining balance
alert("Remaining Balance: " + remainingBalance);
