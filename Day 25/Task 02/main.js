/*
Question 74:
Swapping Variables: Demonstrate how to swap the values of two variables.
Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

Explain & TIP:
Swapping variables is a common task.
You can use a temporary variable to hold one value while you swap them around.
It's like juggling where you temporarily place one ball in a basket to free up your hand.
*/
var num1 = 4;
var num2 = 27;
var first_name = 'zaeem';
var second_name = 'uddin';
//function to swap any kind of data each other
function swap_variable(value1, value2) {
    var value3 = value1; //assigning temporary variable to store it for while
    value1 = value2;
    value2 = value3;
    return { value1: value1, value2: value2 };
}
//checking number
console.log(swap_variable(num1, num2));
//checking name
console.log(swap_variable(first_name, second_name));
