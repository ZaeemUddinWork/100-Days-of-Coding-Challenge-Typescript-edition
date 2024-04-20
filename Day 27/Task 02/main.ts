/*
Question 80: Updating Object Properties: 
Add a property named color to the existing car object, and then update the year property to 2021. 
Show how to perform these operations.

Explain & TIP: You can add new properties to an object or change existing ones after the object is created. 
This flexibility allows objects to be dynamically updated as needed.
*/

let car = {
    car_name:'Corolla',
    modle:'Xli',
    make:'Toyota',
    manufacture_year:2023,
};

//@ts-ignore
car.color = 'black';
car.manufacture_year = 2021

console.log(car)

//Result
/*
car: Carolla
modle: Xli
Make: Toyota
year: 2021
color: black
*/