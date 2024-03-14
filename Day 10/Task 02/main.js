/*
Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
*/
//saving my favrite fruits in array
var favorite_fruit = ['Banana', 'Mango', 'Apple', 'Orange', 'Pineapple'];
//if else condition to check item is in array or not 
function checking_list(favorite_fruit) {
    if (favorite_fruit.includes('Banana')) {
        console.log("You really like banana");
    }
    else if (favorite_fruit.includes('Mango')) {
        console.log("You really like mango");
    }
    else if (favorite_fruit.includes('Orange')) {
        console.log("You really like orange");
    }
    else {
        console.log("You really like many fruits");
    }
}
//checking index 0 
checking_list(favorite_fruit[0]);
//checking index 1
checking_list(favorite_fruit[1]);
//checking index 2
checking_list(favorite_fruit[2]);
//checking index 3
checking_list(favorite_fruit[3]);
//checking index 4
checking_list(favorite_fruit[4]);
