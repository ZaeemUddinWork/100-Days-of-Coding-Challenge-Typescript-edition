/*
Question 13: Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/
//saving my favorite transpotation 
var favorite_car_brand = ['BMW', 'Toyota', 'Honda', 'Tesla'];
//printing titel 
console.log("\t!! My favorite car brands !!");
//loop for printing car array
for (var _i = 0, favorite_car_brand_1 = favorite_car_brand; _i < favorite_car_brand_1.length; _i++) {
    var i = favorite_car_brand_1[_i];
    console.log("\tI would like to own a ".concat(i, " brand car"));
}
