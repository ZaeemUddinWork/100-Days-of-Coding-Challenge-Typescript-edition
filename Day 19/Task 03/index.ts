/*
Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

Explain & TIP: 
We can sum up all the grades and divide by the number of grades to find the average, 
giving us an idea of how well someone did overall.

*/
//subject marks
let Subjects_marks:number[]= [70,60,70,78,90,65]

//sum of all marks
let total_marks:number =  Subjects_marks.reduce((total,number) => total + number,0 )
 
   //formula of average
let average:number = total_marks/Subjects_marks.length
//printing average answer
  console.log(average.toFixed(2))
