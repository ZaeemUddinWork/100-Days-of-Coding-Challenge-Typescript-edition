/*
Question 67: 
Arithmetic with Mixed Types: Write a function that takes two parameters: 
a number and a string that represents a number (e.g., "5"). Return their sum as a number. 

Explain & TIP: 
JavaScript allows arithmetic operations between mixed types. 
When you add a number to a string that looks like a number, JavaScript converts the string to a number for the operation.
*/

//function that will ask number and string number
function addition(number:number,string:string):number
{      //answer will store sum of them
    let answer = number +Number(string)//Number() is a code that will conver string number into number
    return answer;

}

//prining 
console.log(addition(3,"5"))