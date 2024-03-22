/*
Question 58:
Average Score Calculator:
Write a simple program that can take lots of scores and find their average.

Explain & TIP:
This program can handle any number of scores you give it,
and it tells you the average score. Handy for seeing how well you did overall!
*/
//funtion that will take subject marks indefinite
function marks_list() {
    var subject = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        subject[_i] = arguments[_i];
    }
    var subjests = subject;
    var total_nmarks = subjests.reduce(function (total, number) { return total + number; }, 0); //this will add a all number in list
    var average = total_nmarks / subjests.length; //average formula
    return average.toFixed(2);
}
//printing 
console.log(marks_list(67, 89, 43, 67, 34, 67, 45, 78));
