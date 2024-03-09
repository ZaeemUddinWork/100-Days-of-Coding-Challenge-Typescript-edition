/*
Question 21: Think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.

*/
//list of data of user 
let data_of_user_1  = {
    name:'Eren yeager',
    age: 20,
    email:'erenyeager@gmail.com',
    password: 'eren123'
}

let data_of_user_2  = {
    name:'Mikasa Akerman',
    age: 21,
    email:'MikasaAkerman@gmail.com',
    password: 'mikasa123'
}
let data_of_user_3  = {
    name:'Armin Albert',
    age: 19,
    email:'ArminAlbert@gmail.com',
    password: 'armin123'
}
let data_of_user_4  = {
    name:'Levi Akerman',
    age: 20,
    email:'LeviAkerman@gmail.com',
    password: 'Levi123'
}

//adding all data into array
let User_data: Array<typeof data_of_user_1> =[]

//pushing all data into array
User_data.push(data_of_user_1);
User_data.push(data_of_user_2);
User_data.push(data_of_user_3);
User_data.push(data_of_user_4);

//printing titel
console.log(`\t\tList of All User Data:`)
//function for printing all data 
function data_list(User_data: Array<typeof data_of_user_1>)
{
    for(let data of User_data)
    {
        console.log(`
        -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-

        Name: ${data.name}
        Age: ${data.age}
        Email: ${data.email}
        Password: ${data.password}

        -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
        `)
    }
}

// calling function
data_list(User_data);