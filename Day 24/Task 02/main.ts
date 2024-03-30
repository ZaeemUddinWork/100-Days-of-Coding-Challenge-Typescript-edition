/*
Question 71: 
Compare let and const: 
Create two examples where let allows reassignment but const does not. 
Try to reassign a const-declared variable and catch the error.

Explain & TIP: 
let allows you to declare variables that can be reassigned, 
while const is for variables that should not change once set. 
Using const helps make your code safer and more predictable.*/


//before  reassigning 
let num1 = 5;
let num2 = 9;
const answer = num1 + num2 
console.log(answer)

//after reassigning 
num1 = 6;
num2 = 10;
try
{ 
    console.log(answer = num2 - num1)//this will show error
      
}catch(error) 
{console.error(`You can't not assign 2 answer in one answer`);
   // console.log("You can't not assign 2 answer in one answer" )
} 



