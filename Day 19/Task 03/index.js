/*
Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

Explain & TIP:
We can sum up all the grades and divide by the number of grades to find the average,
giving us an idea of how well someone did overall.

*/
//subject marks
var Subjects_marks = [70, 60, 70, 78, 90, 65];
//sum of all marks
var total_marks = Subjects_marks.reduce(function (total, number) { return total + number; }, 0);
//formula of average
var average = total_marks / Subjects_marks.length;
//printing average answer
console.log(average.toFixed(2));
