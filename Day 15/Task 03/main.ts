/*
Question 45: Cars: Create detailed car objects with flexible properties.

Explain & TIP: Functions accepting a mix of fixed and arbitrary parameters let you create detailed and flexible objects. 
This is ideal for data with a few required fields and many optional fields.
*/
//function for car detail
function Car_detail(name: string, Brand: string, ...options: [string, any][]) {
  let car = { name, Brand };
  options.forEach(([key, value]) => (car[key] = value));
  return car;
}

//printing car details

console.log(Car_detail("Toyota", "E50", ["Color", "Red"]));
console.log(Car_detail("Honda", "E5", ["color", "Green"], ["Wheel", 5]));
console.log(
  Car_detail("Toyota", "Corolla Xli", ["color", "Blue"], ["year", 2001])
);
