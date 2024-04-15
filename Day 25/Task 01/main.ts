/*
Question 73: 
Assigning and Updating Variables: 
Create a function where you declare a variable using let and assign an initial value. 
Then, update its value within the same function and log both the initial and updated values.

Explain & TIP: 
In JavaScript, you can assign a value to a variable with = and later update it as needed. 
This is fundamental for keeping track of changing data within your programs.
*/

//function for assigning two number with a same variable number by number
function number_chacking()
{
    let number:number = 27;//assigning first time

    console.log(`Number before change ${number}`);//printing

    number = 4;//assigning second time

    console.log(`Number after change ${number}`);//printing
}

number_chacking()//calling function