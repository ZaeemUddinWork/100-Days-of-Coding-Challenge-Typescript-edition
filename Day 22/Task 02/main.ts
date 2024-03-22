/*
Question 65: 
Determine the Remainder: 
Make a function that gets two numbers and shows the leftover from dividing them using the % sign. 
For example, remainder(5, 2) should give 1.

Explain & TIP: 
The % (modulus) operator finds what's left after one number is divided by another. 
It's handy for figuring out if numbers are even, odd, and more.
*/

//function for reminder geting 2 number 
function remainder(number1:number,number2:number):number
{   //this will return remiander 
    return number1 % number2
}

//assigning remainder to variable
let remainder_number = remainder(10,3)

//printing variable
console.log(remainder_number)