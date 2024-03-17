/*
Question 48: Combining Arrays with Spread Operator: 
Suppose you're comparing prices of two different sets of laptops. 
Use the spread operator to combine these arrays into a single array 
sorted in ascending order, then log the result.

Explain & TIP: 
The spread operator can be used in conjunction with array methods like sort() to 
combine and manipulate arrays efficiently. */

//1st price sets 
let laptops_set_1: number[] = [20000,10000,23000,14000];

//2nd Price set
let laptops_set_2:number[] = [40000,34000,60000,34500];

//
let Combine_all_set: number[] = [...laptops_set_1,...laptops_set_2].sort( (a,b)=> a-b);

console.log(Combine_all_set);