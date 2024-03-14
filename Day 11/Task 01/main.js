/*
Question 31: No Users: Ensure your user list isn’t empty.
*/
//saving user name
var username = [];
//loop for checking array all index with if else condition
for (var i = 0; i <= username.length; i++) {
    if (username[i] == 'admin') {
        console.log("Welcome Back ".concat(username[i], "."));
    }
    else if (username.length == 0) //if array is empty than it will print this
     {
        console.log("We need to find some user!!");
    }
    else {
        console.log("Hello ".concat(username, ",Thanks for Logging again."));
    }
}
