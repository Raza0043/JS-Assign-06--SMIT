// Question no 01

// var emptyArray = [[]]; 

// Question no 02
// Empty Multidimensional Array
// var emptyArray = [[]];
// console.log("Empty Array: ", emptyArray);


// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log("Matrix: ", matrix);


// Question no 03

// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }

// Question no 04



// var tableNumber = parseInt(prompt("Enter the number for the multiplication table:"));

// var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// document.write("<h3>Multiplication Table of " + tableNumber + ":</h3>");
// for (var i = 1; i <= tableLength; i++) {
//     var result = tableNumber * i;
//     document.write(tableNumber + " x " + i + " = " + result + "<br>")};


// Question no 05


        // var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

        // document.write("<h3>Fruits:</h3>");
        // for (var i = 0; i < fruits.length; i++) {
        //     document.write(fruits[i] + "<br>");
        // }

// Question no 06
   // a. Counting
//    document.write("<h3>Counting:</h3>");
//    for (var i = 1; i <= 15; i++) {
//        document.write(i + (i < 15 ? ", " : ""));
//    }

//    // b. Reverse counting
//    document.write("<h3>Reverse Counting:</h3>");
//    for (var j = 10; j >= 1; j--) {
//        document.write(j + (j > 1 ? ", " : ""));
//    }

//    // c. Even
//    document.write("<h3>Even:</h3>");
//    for (var k = 0; k <= 20; k += 2) {
//        document.write(k + (k < 20 ? ", " : ""));
//    }

//    // d. Odd
//    document.write("<h3>Odd:</h3>");
//    for (var l = 1; l < 20; l += 2) {
//        document.write(l + (l < 19 ? ", " : ""));
//    }

//    // e. Series
//    document.write("<h3>Series:</h3>");
//    for (var m = 2; m <= 20; m += 2) {
//        document.write((m * 2) + "k" + (m < 20 ? ", " : ""));
//    }

// Question no 07

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("What item are you searching for?");

// // Convert user input to lowercase for case-insensitive comparison
// var found = A.includes(userInput.toLowerCase());

// if (found) {
//     document.write("The item '" + userInput + "' is found in the list.");
// } else {
//     document.write("Sorry, the item '" + userInput + "' is not found in the list.");
// }
// Question no 08

// var A = [24, 53, 78, 91, 12];
// var largest = A[0]; 


// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i]; 
//     }
// }

// document.write("The largest number in the array is: " + largest);

// Question no 09

// var A = [24, 53, 78, 91, 12];
// var smallest = A[0]; 


// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i]; 
//     }
// }

// document.write("The smallest number in the array is: " + smallest);

// Question no 10

// document.write("Multiples of 5 from 1 to 100:<br>");

// for (var i = 1; i <= 100; i++) {
   
//     if (i % 5 === 0) {
//         document.write(i + "<br>"+"<br>");
//     }
// }