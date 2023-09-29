// console.log("Hello Ahmed");



// // let age = 25;
// // let age = 27;
// // let age = "25";
// // let age = "27";
// // var name = "Ahmed";
// // var name = "Ahmed";
// // const number = 25;
// // const number = 50;
// // const name = "Ahmed";
// // const name = "Ahmed";


// let Stu = ["Ahmed","ALi","Raza"]; //string Arry with Let

// for (let index = 0; index <= Stu.length; index++) {
    
//     console.log(Stu[index]); //Console ma Show krwany k liey
//     document.write(Stu); //Screen pr show krwany k liwy
//     break;
// }
// document.write("<br>");//Line 


// const numbArr = [1,34,"Ali",true]; //String Array With Const
// numbArr.push('Ahmad qadri'); //Push Add New Element To The End Of String Array
// document.write("Arry is"+numbArr); //Length Of String Array

// document.write("<br>"); //Line break


// var Stu1 = ["Ahmed","ALi","Raza"]; //string Arry with Var

// for (var index = 0; index <= Stu.length; index++) {
    
//     document.write(Stu1[2]); //Screen pr show krwany k liwy
//     break;
// } 
// document.write("<br>"); //Line break

// const Arry =[43,43,543,534,6,43643,64,36,346,43];
// for (let index = 0; index < Arry.length; index++) {
// document.write(Arry);
// break;
    
// }

// console.error("Error");
// console.warn("Warning");
// console.clear();
// //--------data types

// document.write("<br>"); //Line break

// let yourname = "Ahmed";
// document.write(typeof yourname);

// document.write("<br>"); //Line break  

// let yournumber = 534543576457657;
// document.write(typeof yournumber);
// document.write("<br>"); //Line break

// let fname ="Ahmed";
// let lname = "Mushtaq";
// let fullname= fname +" "+ lname;
// document.write(fullname);

// document.write("<br>"); //Line break

// let cars = ["Audi", "Audi", "Audi ","Audi "];

// cars.push("City");
// cars.pop();
// document.write(cars);
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
