"use strict";
/*
Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time,
and you can only invite two guests.
*/
Object.defineProperty(exports, "__esModule", { value: true });
//import list from Question 16
var main_1 = require("../Task 01/main");
//printing that table will not arrive before dinner party
console.log("\n\nUnfortunately Table won\u2019t arrive in time !!");
// while loop for removing guest until 2 remain
while (main_1.default.length > 2) {
    var not_invited = main_1.default.pop();
    console.log("".concat(not_invited, " we are really sorry!! Due to some problem you are not invited _(- _ -')_"));
}
// invitation for remaing guests
main_1.default.forEach(function (list) {
    console.log("Hello Mr/Mrs or Miss ".concat(list, ", you are still invited to our dinner party!!"));
});
//now removing all guest from the list
main_1.default.splice(0, main_1.default.length);
//printing empty list
console.log(main_1.default);
