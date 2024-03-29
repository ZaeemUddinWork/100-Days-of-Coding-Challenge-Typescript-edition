/*
Question 63:
Shape Shifter:
Write a program that can describe either a circle or a rectangle using a special type alias,
including properties unique to each shape.

Explain & TIP: A type alias lets you create a custom type.
It's like a shortcut for describing more complex information,
such as the details of different shapes.
*/
//for rectangle
var rectangle = {
    // name : 'zaeem', if we declare name other than which include in shape it will give error
    kind: 'rectangle',
    height: 25,
    width: 10
};
//for circle
var circle = {
    kind: "circle",
    radius: 25
};
//prinint 
console.log(rectangle);
console.log(circle);
