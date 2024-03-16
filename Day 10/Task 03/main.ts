/*
Question 30: Hello Admin: Greet users differently, especially 'admin'.
*/

//Saving username in array
let user_data: string[] = ['admin','Zaeem','Admin','Ali','ADMIN','Mark'];

//for loop with condition to check all data 
for (let i = 0; i < user_data.length; i++)
{
    if (user_data[i].toLocaleLowerCase() == 'admin')//if username = admin 
    {
        console.log(`Hello ${user_data[i]}, Do want to see Control pannl.`)
    }
    else{
        console.log(`Hello ${user_data[i]}, Thank for logging again.`)//if username is not equal to admin
    }
}