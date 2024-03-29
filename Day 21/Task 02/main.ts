/*
Question 62: 
Making a Student Template: 
Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

Explain & TIP: 
This blueprint, called an interface, 
helps ensure all students have the same kind of information, 
making your code more organized.
*/

//interfarance of student
interface students{
    name:string;
    age:number;
    class_no:number;
    section:string;
}

//giving data of student
let student_data : students = {
    name : 'zaeem',
    age:27,
    class_no:7,
    section:'B'

}
//printing data
console.log(student_data)