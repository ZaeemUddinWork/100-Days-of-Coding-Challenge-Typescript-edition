/*
Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
*/
var food = ['Apple', 'Mango', 'Banana'];
var banana = 'Banana';
var Mango = 'Mango';
var Apple = 'Apple';
var numstring = '25';
console.log("condition with normal comparision");
console.log(banana == 'banana'); //False
console.log(Apple == 'Apple'); //true
console.log("condition with lowercase");
console.log(Mango.toLocaleLowerCase() == 'mango'); //True
console.log(Mango.toLocaleLowerCase() == 'Banana'); //False
console.log("COnditoin with uppercase");
console.log(banana.toUpperCase() == 'Banana'); // False
console.log(banana.toUpperCase() == 'BANANA'); //true
console.log("Condition in Numbers");
console.log(numstring == '24+1'); //false
console.log(25 == 24 + 1); //true
console.log(100 - 1 * 0 > 90); //true
console.log((100 - 1) * 0 > 90); //false
