/*
Question 32: Checking Usernames: Ensure uniqueness in usernames.
*/
//old user data
var old_username = ['Zaeem', 'MaRiA', 'Aliyan', 'MARK'];
//new user data
var new_username = ['zAEEm', 'Alisa', 'maria', 'Goku', 'aliyan', 'Taha', 'MaRk'];
//for earch of new user to compare all data of new user to old user
new_username.forEach(function (element) {
    if (old_username.some(function (old_user) { return old_user.toLocaleLowerCase() === element.toLocaleLowerCase(); })) //by this it will convert both into lower case to compare
     { //if user name are similar than it will print this
        console.log("This username \"".concat(element, "\" is already takken by other user!!"));
    }
    else { // if username dosen't match than it will print this
        console.log("This username \"".concat(element, "\" is available."));
    }
});
