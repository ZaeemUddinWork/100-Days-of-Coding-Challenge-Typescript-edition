/*
Question 77: 
Default Parameters: 
Write a function that greets a user. 
It should take the user's name as a parameter and say hello. 
If no name is given, it should greet an anonymous user.

Explain & TIP: 
Default parameters allow your functions to have preset values for their parameters. 
These values are used if no other value is provided, making functions more flexible.
*/

//function that will take username and print hello msg with it but f user dosen't provide username than it will just print hello anonymous
function user(name = 'anonymous'):string
{
    return 'Hello'+' ' + name;//this will return msg 
}

//printing function with name given by user
console.log(user('Zaeem'))

//result will be "Hello Zaeem"

//printing function with default parameter
console.log(user())

//result will be "Hello anonymous"
