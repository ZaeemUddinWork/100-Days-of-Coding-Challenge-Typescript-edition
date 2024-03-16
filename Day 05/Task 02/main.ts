/*
Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner.
*/

//list of Guests
let guest_list: string [] = ['John','Mark','Lisa','Mikasa']
//function for printing list 
function print_list(array_name){
        array_name.forEach(t => {
        console.log(`Hello Mr/Mrs or Miss ${t}, We are inviting you to our dinner party!!`)
})}
//calling function
print_list(guest_list)
//exporting guest list for another programs
export default guest_list;