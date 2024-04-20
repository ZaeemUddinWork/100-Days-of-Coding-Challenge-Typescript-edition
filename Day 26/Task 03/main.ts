/*
Question 78: 
Function Expressions vs. Function Declarations: 
Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

Explain & TIP: 
JavaScript allows you to create functions in two ways:
 declarations that name the function and can be called before they're defined, 
 and expressions that are stored in variables and are called using the variable name.
*/

//function Declarations:
//function that will add two number
function addnumber(number1:number,number2:number):number
{
    return number1+number2;
}

//calling function and printing it 
console.log(addnumber(3,5))

//result will be 8


//function Expressions:
//function that will add two number
let additionofnumber = function (number1:number,number2:number):number
                        {
                            return number1+ number2
                        }

//calling function and printing it
console.log(additionofnumber(3,5))

//result will be similar 8