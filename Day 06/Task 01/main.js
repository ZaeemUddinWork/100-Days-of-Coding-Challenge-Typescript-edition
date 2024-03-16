"use strict";
/*
Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import guest list from Question 15
const main_1 = __importDefault(require("../../Day 05/Task 03/main"));
console.log(`\nFortunately we found a bigger dinner table so I can invite more guest !!\n`);
//list of new 3 guest
let new_guest = ['Armin', 'Sasha', 'Levi'];
//adding guest at beginning to list
main_1.default.unshift(new_guest[0]);
//adding gest at middle of array
//finding middle number and round up it
let middle = Math.round(main_1.default.length / 2);
//puting name into middle of list
main_1.default.splice(middle, 0, new_guest[1]);
//addming guest at end of list
main_1.default.push(new_guest[2]);
// printing list of guests with new guests
main_1.default.forEach(list => {
    console.log(`Hello Mr/Mrs or Miss ${list}, We are inviting you to our dinner party!!`);
});
exports.default = main_1.default;
