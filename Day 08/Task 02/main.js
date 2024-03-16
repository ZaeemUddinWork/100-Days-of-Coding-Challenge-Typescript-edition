"use strict";
/*
Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
*/
let color = 'Green';
let my_favorite_number = 27;
let age_above_18 = true;
//Conditional test for color
console.log(`Conditional test for color`);
console.log(color == 'Red'); //False
console.log(color == 'Green'); //True
//Conditional test for number
console.log(`Conditional test for number`);
console.log(3 * 9 !== my_favorite_number); //False
console.log(3 * 10 !== my_favorite_number); //True
console.log(20 > my_favorite_number); //False
console.log(50 > my_favorite_number); //True
console.log(30 < 33); //True
console.log(30 < 20); //False
//Conditional test for Boolean
console.log(`Conditional test for Boolean`);
console.log(age_above_18 == true); //True
console.log(age_above_18 !== true); //False
