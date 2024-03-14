/*
Question 41: Magicians: Display magician names from an array.
*/
//array of magicians
let magicialns : string[] = ['Ali zafer','Zaeem uddin','Taha khan','Ali Jamal']

//function for print magicians list
function print_magician(magicialns: string[])
{
    //for each loop of array of magician
    magicialns.forEach(Element =>{
        console.log(Element)
    })
}

console.log(`List of Magiciaans`)
//calling print magician function
print_magician(magicialns);