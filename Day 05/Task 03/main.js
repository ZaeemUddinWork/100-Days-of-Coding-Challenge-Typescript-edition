"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Question 15: Changing Guest List: One of your guests can't make it to the dinner,
so you need to send out a new set of invitations with a replacement guest.
*/
//import data from question 14
var main_1 = require("../Task 02/main");
// this guest cannot come to dinner
var cannot_come_to_dinner = 'Lisa';
//new guest that we are going to invite
var new_guest = 'Eren';
//printing that he/she will not come to dinner
console.log("\n\nUnfortunately ".concat(cannot_come_to_dinner, " will not come to dinner!!\n\n"));
//changing guest list with he/she who can't come with new guest
main_1.default[main_1.default.indexOf(cannot_come_to_dinner)] = new_guest;
//printing invitation of new list of guest
main_1.default.forEach(function (list) {
    console.log("Hello Mr/Mrs or Miss ".concat(list, ", We are inviting you to our dinner party!!"));
});
exports.default = main_1.default;
