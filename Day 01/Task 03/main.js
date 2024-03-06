// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//this will same person name
var person_name = 'ZaEeM uDdIn';
//printing  name in lower case
console.log(person_name.toLowerCase());
//printing name into uppercase
console.log(person_name.toUpperCase());
//making function for titel case
function titelcase(name) {
    var word = name.split(" ");
    var p_name = word[0].charAt(0).toUpperCase() + word[0].slice(1).toLowerCase() + ' ' + word[1].charAt(0).toUpperCase() + word[1].slice(1).toLowerCase();
    console.log(p_name);
}
//printing titel case 
titelcase(person_name);
