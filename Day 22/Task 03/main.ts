/*
Question 66: 
Logical AND Verification: 
Create a function that checks two boolean (true or false) values. 
It should only say true if both are true, using the && operator.
 For instance, checkBothTrue(true, false) should be false.

Explain & TIP: The && operator in JavaScript checks if both sides are true. 
It's great for confirming several things are true all at once.
*/

//function for and operator that will check two boolean statement 
function checkBothTrue(boolean1:boolean,boolean2:boolean):boolean
{   //this will retun brfore check if both are true than true other wise false 
    return boolean1 && boolean2;
}

//assign to variable
let true_or_false = checkBothTrue(false,true)
//printing variable
console.log(true_or_false)