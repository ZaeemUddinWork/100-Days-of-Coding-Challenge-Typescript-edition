/*
Question 15: Changing Guest List: One of your guests can't make it to the dinner, 
so you need to send out a new set of invitations with a replacement guest.
*/
//import data from question 14
import guest_list from "../Task 02/main";
// this guest cannot come to dinner
let cannot_come_to_dinner : string = 'Lisa';
//new guest that we are going to invite
let new_guest: string = 'Eren';

//printing that he/she will not come to dinner
console.log(`\n\nUnfortunately ${cannot_come_to_dinner} will not come to dinner!!\n\n`);


//changing guest list with he/she who can't come with new guest
guest_list[guest_list.indexOf(cannot_come_to_dinner)]= new_guest;

//printing invitation of new list of guest
guest_list.forEach(list => {
    console.log(`Hello Mr/Mrs or Miss ${list}, We are inviting you to our dinner party!!`)
})

export default guest_list;