/*
Question 75: 
Compound Assignment Operators: 
Use compound assignment operators to simplify arithmetic operations. 
Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.

Explain & TIP: 
Compound assignment operators combine an arithmetic operation with assignment, 
making your code cleaner and more concise. Instead of writing x = x + 2, you can simply write x += 2.
*/

//assigning variables
let numb1:number = 24
let numb2:number = 7

//checking with addition
    numb1 += numb2  //add 24 with 7 
    console.log(numb1)

//checking with subtraction
    numb1 -= numb2 // 31 - 7 =24
    console.log(numb1)

//checking with multiplication
    numb1 *= numb2  //24 *7 = 168
    console.log(numb1)

//checking with division
    numb1 /= numb2  //168 / 7 = 24
    console.log(numb1)
