/*
Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, 
and you can only invite two guests.
*/

//import list from Question 16
import guest_list from '../Task 01/main';

//printing that table will not arrive before dinner party
console.log(`Unfortunately Table won’t arrive in time !!`);


// while loop for removing guest until 2 remain
while (guest_list.length > 2)
{    
      let not_invited = guest_list.pop()
        console.log(`${not_invited} we are really sorry!! Due to some problem you are not invited _(- _ -')_`)
     
   
    
}

// invitation for remaing guests
guest_list.forEach(list => {
console.log(`Hello Mr/Mrs or Miss ${list}, you are still invited to our dinner party!!`)

})

//now removing all guest from the list
guest_list.splice(0,guest_list.length)

//printing empty list
console.log(guest_list)