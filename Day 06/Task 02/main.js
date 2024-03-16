"use strict";
/*
Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time,
and you can only invite two guests.
*/
Object.defineProperty(exports, "__esModule", { value: true });
//import list from Question 16
var main_1 = require("../Task 01/main");
//printing that table will not arrive before dinner party
console.log("Unfortunately Table won\u2019t arrive in time !!");
//list of them who will invite 
var new_list = ['Eren', 'Mikasa'];
// creating a condition if there not in new list they will remove from list
while (main_1.default.length > 2) {
    var not_invited = main_1.default.pop();
    console.log("".concat(not_invited, " we are really sorry!! Due to some problem you are not invited _(- _ -')_"));
}
console.log(main_1.default);
// invitation for remaing guests
main_1.default.forEach(function (list) {
    console.log("Hello Mr/Mrs or Miss ".concat(list, ", We are inviting you to our dinner party!!"));
});
//now removing all guest from the list
main_1.default.splice(0, main_1.default.length);
//printing empty list
console.log(main_1.default);
