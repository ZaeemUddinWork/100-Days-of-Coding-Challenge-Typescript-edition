/*
Question 69: 
Dividing and Finding the Remainder: 
Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

Explain & TIP: 
Division can give you a whole part (quotient) and a leftover part (remainder). 
Returning both in an object is a neat way to keep them together.
*/
interface divides{remainder:number;answer:number}

function divides(number1:number,number2:number):divides
{
    let remainder:number = number1 % number2
    let answer:number = Math.floor(number1 / number2)
    return {remainder,answer}   
}


console.log(divides(5,3))