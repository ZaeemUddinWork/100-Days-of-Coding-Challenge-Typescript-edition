/*
Question 21: Think of something you could store in a TypeScript Object.
Write a program that creates Objects containing these items.

*/
//list of data of user 
var data_of_user_1 = {
    name: 'Eren yeager',
    age: 20,
    email: 'erenyeager@gmail.com',
    password: 'eren123'
};
var data_of_user_2 = {
    name: 'Mikasa Akerman',
    age: 21,
    email: 'MikasaAkerman@gmail.com',
    password: 'mikasa123'
};
var data_of_user_3 = {
    name: 'Armin Albert',
    age: 19,
    email: 'ArminAlbert@gmail.com',
    password: 'armin123'
};
var data_of_user_4 = {
    name: 'Levi Akerman',
    age: 20,
    email: 'LeviAkerman@gmail.com',
    password: 'Levi123'
};
//adding all data into array
var User_data = [];
//pushing all data into array
User_data.push(data_of_user_1);
User_data.push(data_of_user_2);
User_data.push(data_of_user_3);
User_data.push(data_of_user_4);
//printing titel
console.log("\t\tList of All User Data:");
//function for printing all data 
function data_list(User_data) {
    for (var _i = 0, User_data_1 = User_data; _i < User_data_1.length; _i++) {
        var data = User_data_1[_i];
        console.log("\n        -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-\n\n        Name: ".concat(data.name, "\n        Age: ").concat(data.age, "\n        Email: ").concat(data.email, "\n        Password: ").concat(data.password, "\n\n        -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-\n        "));
    }
}
// calling function
data_list(User_data);
