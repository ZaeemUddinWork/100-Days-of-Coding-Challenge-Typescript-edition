/*
Question 58: 
Average Score Calculator: 
Write a simple program that can take lots of scores and find their average.

Explain & TIP: 
This program can handle any number of scores you give it, 
and it tells you the average score. Handy for seeing how well you did overall!
*/
//funtion that will take subject marks indefinite
function marks_list(...subject:number[])
{
    let subjests:number[]=subject
    
    let total_nmarks:number = subjests.reduce((total ,number) => total +number ,0 )//this will add a all number in list
    let average:number = total_nmarks/subjests.length //average formula
    return average.toFixed(2);
}

//printing 
console.log(marks_list(67,89,43,67,34,67,45,78))
