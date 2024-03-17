/*
Question 47: Advanced Array Destructuring: Given an array of objects
representing different laptops, each with properties make, model, and year,
use array destructuring to assign the first and second laptops to variables.
Then, log these variables.

Explain &
TIP: Destructuring can also be used to quickly extract elements from arrays of objects,
simplifying access to complex data structures.
*/
//laptop1
var laptop_1 = {
    make: "Dell",
    model: "E16",
    year: "2018",
};
//laptop2
var laptop_2 = {
    make: "Apple",
    model: "Macbook Pro",
    year: "2020",
};
//laptop3
var laptop_3 = {
    make: "Toshiba",
    model: "Z30-B",
    year: "2019",
};
//assigning laptop array for putting all laptop data
var laptops = [];
//pushing all laptop data into laptops
laptops.push(laptop_1);
laptops.push(laptop_2);
laptops.push(laptop_3);
//assigning  new name of all variables from array of laptop
var lp1 = laptops[0], lp2 = laptops[1], lp3 = laptops[2];
//printing laptop data
console.log(lp1);
console.log(lp2);
console.log(lp3);
