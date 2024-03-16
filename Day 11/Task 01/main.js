"use strict";
/*
Question 31: No Users: Ensure your user list isn’t empty.
*/
//saving user name
let username = [];
//loop for checking array all index with if else condition
for (let i = 0; i <= username.length; i++) {
    if (username[i] == 'admin') {
        console.log(`Welcome Back ${username[i]}.`);
    }
    else if (username.length == 0) //if array is empty than it will print this
     {
        console.log(`We need to find some user!!`);
    }
    else {
        console.log(`Hello ${username},Thanks for Logging again.`);
    }
}
