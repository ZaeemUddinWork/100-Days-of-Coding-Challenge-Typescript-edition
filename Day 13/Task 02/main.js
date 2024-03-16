"use strict";
/*
Question 38: Cities: Describing cities with a function.
*/
//function for city
function cities(name, landmark, famous_for) {
    console.log(`
    -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
    The city with their popularity
    Name: ${name}
    Landmark: ${landmark}
    Famous for: ${famous_for}
    -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
    `);
}
cities('Karachi', 'Mazar e Quaid', 'City of Light'); //city 1
cities('Paris', 'Eiffel Tower', 'gastronomy'); //city 2
cities('Agra', 'Taj Mahal', 'historic city'); //city 3
