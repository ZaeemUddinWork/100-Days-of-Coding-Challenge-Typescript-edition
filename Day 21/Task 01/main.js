/*
Question 61:
Making Enums for Vehicles:
Let's create categories for vehicles like
cars, trucks, and motorcycles using enums, and show one example.

Explain & TIP:
Enums are like special lists in your code that help you categorize things.
They make your code cleaner and easier to understand.*/
//enum list
var vehicles;
(function (vehicles) {
    vehicles[vehicles["car"] = 0] = "car";
    vehicles[vehicles["truck"] = 1] = "truck";
    vehicles[vehicles["motorcycles"] = 2] = "motorcycles";
    vehicles[vehicles["aeroplane"] = 3] = "aeroplane";
})(vehicles || (vehicles = {}));
//printing list 
console.log(vehicles.car);
