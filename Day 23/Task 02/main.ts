/*
Question 68: 
Multiplying Decimals: 
Create a function that accepts two decimal numbers and returns their product. 
Round the result to two decimal places.

Explain & TIP: 
When working with decimals in JavaScript, results can be unexpectedly long. Rounding can help keep numbers manageable.
*/


//function that will Multiplying 2 decimal number

function Multiplying(number1:number,number2:number):number
{
    let answer = number1 * number2
    return  Math.round(answer);
}



//printing 
console.log(Multiplying(4.54,5.21))


