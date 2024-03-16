"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18.
 to print a message indicating the number of people you are inviting to dinner.
*/
//importing guest_list from question 16
const main_1 = __importDefault(require("../../Day 06/Task 01/main"));
//printing number of guest that we are inviting
console.log(`\n\n\nWe are inviting ${main_1.default.length} guests in our dinner.`);
