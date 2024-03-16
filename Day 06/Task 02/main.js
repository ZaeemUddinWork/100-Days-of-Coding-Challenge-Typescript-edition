"use strict";
/*
Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time,
and you can only invite two guests.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import list from Question 16
const main_1 = __importDefault(require("../Task 01/main"));
//printing that table will not arrive before dinner party
console.log(`Unfortunately Table won’t arrive in time !!`);
// while loop for removing guest until 2 remain
while (main_1.default.length > 2) {
    let not_invited = main_1.default.pop();
    console.log(`${not_invited} we are really sorry!! Due to some problem you are not invited _(- _ -')_`);
}
// invitation for remaing guests
main_1.default.forEach(list => {
    console.log(`Hello Mr/Mrs or Miss ${list}, you are still invited to our dinner party!!`);
});
//now removing all guest from the list
main_1.default.splice(0, main_1.default.length);
//printing empty list
console.log(main_1.default);
