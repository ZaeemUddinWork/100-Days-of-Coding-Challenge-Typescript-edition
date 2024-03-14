/*
Question 39: City Names: Formatting city-country pairs.
*/

//function for taking city and country

function City(country:string,city: string,landmark:string)
{
    console.log(`
   -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
   City: ${city}
   Landmark: ${landmark}
   Country: ${country}
   -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
    `)
}

console.log(`City with its landmark and Country name:`)//titel 

//calling funtion

City('Pakistan','Karachi','Mazar e Quaid')//city 1

City('France','Paris','Eiffel Tower')//city 2

City('India','Agra','Taj Mahal')//city 3

