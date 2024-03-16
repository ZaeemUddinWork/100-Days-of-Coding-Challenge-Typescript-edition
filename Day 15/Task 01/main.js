/*
Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data.
This exercise demonstrates array copying and manipulation.
*/
//saving magician name
var Magicians = [
    "Ali khan",
    "Zaeem Uddin",
    "Taha Najam",
    "Waleed Jamal",
];
//function to make great magician
function great_magician(Magicians) {
    var great_magicians = [];
    Magicians.forEach(function (element) {
        great_magicians.push("Great ".concat(element));
    });
    return great_magicians;
}
//saving name with great in variable
var great_magicians = great_magician(Magicians);
//original Magician name
console.log(Magicians);
// name with great
console.log(great_magicians);
