/*
Question 13: Your Own Array: Think of your favorite mode of transportation, 
such as a motorcycle or a car, and make a list that stores several examples. 
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/

//saving my favorite transpotation 
let favorite_car_brand: string[] = ['BMW','Toyota','Honda','Tesla'];

//printing titel 
console.log(`\t!! My favorite car brands !!`);

//loop for printing car array
for(let i of favorite_car_brand)
{
    console.log(`\tI would like to own a ${i} brand car`)
}
