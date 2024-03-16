"use strict";
/*
Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.
*/
Object.defineProperty(exports, "__esModule", { value: true });
//list of Guests
var guest_list = ['John', 'Mark', 'Lisa', 'Mikasa'];
//function for printing list 
function print_list(array_name) {
    array_name.forEach(function (t) {
        console.log("Hello Mr/Mrs or Miss ".concat(t, ", We are inviting you to our dinner party!!"));
    });
}
//calling function
print_list(guest_list);
//exporting guest list for another programs
exports.default = guest_list;
