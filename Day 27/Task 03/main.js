/*
Question 81: Iterating Over Object Properties:
Write a function that takes an object as an argument and logs all of its properties and values.

Explain & TIP: You can loop through each property of an object using a for...in loop.
This is useful for when you need to examine or display all the information an object holds.

*/
//function that take and orint object with its property with help of loop
function object(obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property]));
    }
}
//giving object property 
object({ car: 'Carolla', modle: 'Xli', Make: 'Toyota', year: 2023, color: 'Black' });
// Result
/*
car: Carolla
modle: Xli
Make: Toyota
year: 2023
color: Black
*/ 
