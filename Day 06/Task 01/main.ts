/*
Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
*/

//import guest list from Question 15
import guest_list from "../../Day 05/Task 03/main";

console.log(`\nFortunately we found a bigger dinner table so I can invite more guest !!\n`);
//list of new 3 guest
let new_guest: string[] = ['Armin','Sasha','Levi']

//adding guest at beginning to list
guest_list.unshift(new_guest[0]);

//adding gest at middle of array
//finding middle number and round up it
let middle =Math.round(guest_list.length /2)
//puting name into middle of list
guest_list.splice(middle,0, new_guest[1]);



//addming guest at end of list
guest_list.push(new_guest[2])


// printing list of guests with new guests

guest_list.forEach(list => {
    console.log(`Hello Mr/Mrs or Miss ${list}, We are inviting you to our dinner party!!`)
})

export default guest_list;
