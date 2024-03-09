/*
Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
*/
var my_friends_names = ['Zaeem uddin', 'Taha Ali', 'Shaheer Iqbal', 'Ali imran', 'Daniyal Khan'];
for (var _i = 0, my_friends_names_1 = my_friends_names; _i < my_friends_names_1.length; _i++) {
    var i = my_friends_names_1[_i];
    console.log("".concat(i, " is one of my best friend."));
}
