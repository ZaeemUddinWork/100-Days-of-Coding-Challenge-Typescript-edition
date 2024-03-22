/*
Question 55: Double Numbers in an Array: Make a list of numbers.
Then, use a trick to make a new list where each number is twice its original value.

Explain & TIP:
We can use a special tool to go through each number in our list and make a new list with each number doubled.

*/
//saving number to get their twice value 2 to 9
var numbers = [2, 3, 4, 5, 6, 7, 8, 9];
var twice_number = [];
//here we can user both foreach and map to make numbers twice
//with the help of map 
numbers.map(function (number, key) { twice_number[key] = Math.pow(number, 2); });
console.log(twice_number);
// with the help of for each
var twice_number_2 = [];
numbers.forEach(function (number, key) {
    twice_number_2[key] = Math.pow(number, 2);
});
console.log(twice_number_2);
