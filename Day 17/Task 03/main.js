/*
Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.
*/
//simple function to calculate are of rectangle
function Area_of_rectangle(Width, Length) {
    console.log("\n    -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-\n    The Problem is to find Area of Rectangle:\n            -----------------------------------------\n            |                                       |\n            |            Are of Rectangle           |\n            |                                       |\n            |                                       |\n            -----------------------------------------\n                             \n    Formula:\n    Area of Rectangle = Width x Length\n    Area of Rectangle = ".concat(Width, " x ").concat(Length, "\n    Area of REctangle = ") + Width * Length + "\n    \n    -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-\n    ");
}
//arrow function to calculate area of rectangle 
var Area_rectangle = function (Width, Length) {
    console.log("\n    -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-\n    The Problem is to find Area of Rectangle:\n            -----------------------------------------\n            |                                       |\n            |            Are of Rectangle           |\n            |                                       |\n            |                                       |\n            -----------------------------------------\n                             \n    Formula:\n    Area of Rectangle = Width x Length\n    Area of Rectangle = ".concat(Width, " x ").concat(Length, "\n    Area of REctangle = ") + Width * Length + "\n    \n    -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-\n    ");
};
//title 1
console.log("with Simple Fuction");
//calling simple function with width and height
Area_of_rectangle(12, 5);
//title 2
console.log("with arrow Fuction");
//calling arrow function with width and height
Area_rectangle(30, 4);
