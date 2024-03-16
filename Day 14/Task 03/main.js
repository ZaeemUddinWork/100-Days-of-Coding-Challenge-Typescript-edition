"use strict";
/*
Question 42: Great Magicians: Add "the Great" to magician names.
*/
//array of magicians
let magicialns = ['Ali zafer', 'Zaeem uddin', 'Taha khan', 'Ali Jamal'];
//function for adding The great with array
function great_magician(magicialns) {
    //for each loop for printing array with The great
    magicialns.forEach(Element => {
        console.log(`The Great ${Element}.`);
    });
}
//printing magician name with the great 
great_magician(magicialns);
