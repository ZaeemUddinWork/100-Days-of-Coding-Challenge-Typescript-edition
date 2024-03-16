/*
Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
*/

//saving name of person
let person_name : string = "Zaeem Uddin";

//saving age of person
let age : number = 22;

//printing name of person and age of person and it will tell how many year the person will take to become 60
console.log(`Mr ${person_name}, your age is ${age} and your age will be 60 after ` +(60-age)+` years!!`);


//program that  will print the multiplication table of  number 5


let num: number= 5;

console.log(`\t!!Multiplication Tabe of ${num} !! \n`);
for(let i =0; i<=10; i++)
{
    console.log(`\t${num} x ${i} = `+(i*num));
}