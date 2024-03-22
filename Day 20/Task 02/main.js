/*
Question 59:
Add a Special Number: Make a program that creates custom adders.
These adders can add a specific number to any other number you give them later.

Explain & TIP:
Imagine you have a magic box that can add a specific number to any number you put in it.
This program makes that magic box for you!
*/
// function for magic number that will take number 
function magic_box(value) {
    return function (number) {
        // function number 2 that will add another number with it
        return number += value;
    };
}
// giving magic box number
var suprise_number = magic_box(6);
// now it will print number with suprise number
console.log(suprise_number(10));
