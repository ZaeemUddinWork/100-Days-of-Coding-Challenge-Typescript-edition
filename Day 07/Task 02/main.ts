/*
Question 20: Think of something you could store in an array. 
For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
Write a program that creates a list containing these items.
*/

//saving countries name
let countries: string[] = ['Pakistan','Japan','America','UK','UAE','Turkey']

console.log(`List of Countries That I want to visit:`)
//function to print any array as a list 
function list(name_of_array)
{
    name_of_array.forEach(element => {
        console.log('> '+element)
    });
}

//calling function
list(countries);