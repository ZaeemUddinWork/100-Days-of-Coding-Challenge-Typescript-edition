/*
Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments as an array, providing a way to handle multiple inputs gracefully.
*/
//fuction that take name with indefinite hobbies
function like_hobbies(name) {
    var hobbies = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        hobbies[_i - 1] = arguments[_i];
    }
    //this log will print name
    console.log("My name is ".concat(name));
    //for earch for printing all hobbies
    hobbies.forEach(function (list) {
        console.log("I enjoy ".concat(list));
    });
}
//caliing function that will print alll hobbies with person name
like_hobbies('zaeem', 'football', 'gamming', 'reading');
