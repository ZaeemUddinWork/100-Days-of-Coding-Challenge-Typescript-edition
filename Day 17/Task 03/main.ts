/*
Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.
*/

//simple function to calculate are of rectangle
function Area_of_rectangle(Width:number,Length:number)
{
    console.log(`
    -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
    The Problem is to find Area of Rectangle:
            -----------------------------------------
            |                                       |
            |            Are of Rectangle           |
            |                                       |
            |                                       |
            -----------------------------------------
                             
    Formula:
    Area of Rectangle = Width x Length
    Area of Rectangle = ${Width} x ${Length}
    Area of REctangle = `+Width * Length+`
    
    -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
    `
    )
}

//arrow function to calculate area of rectangle 
let Area_rectangle = (Width:number, Length:number)=>{
    console.log(`
    -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
    The Problem is to find Area of Rectangle:
            -----------------------------------------
            |                                       |
            |            Are of Rectangle           |
            |                                       |
            |                                       |
            -----------------------------------------
                             
    Formula:
    Area of Rectangle = Width x Length
    Area of Rectangle = ${Width} x ${Length}
    Area of REctangle = `+Width * Length+`
    
    -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
    `
    )
}
//title 1
console.log(`with Simple Fuction`)
//calling simple function with width and height
Area_of_rectangle(12,5)


//title 2
console.log(`with arrow Fuction`)
//calling arrow function with width and height
Area_rectangle(30,4)