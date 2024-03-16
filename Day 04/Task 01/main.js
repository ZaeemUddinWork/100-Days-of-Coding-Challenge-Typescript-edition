/*
Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
*/
//saving name of person
var person_name = "Zaeem Uddin";
//saving age of person
var age = 22;
//printing name of person and age of person and it will tell how many year the person will take to become 60
console.log("Mr ".concat(person_name, ", your age is ").concat(age, " and your age will be 60 after ") + (60 - age) + " years!!");
//program that  will print the multiplication table of  number 5
var num = 5;
console.log("\t!!Multiplication Tabe of ".concat(num, " !! \n"));
for (var i = 0; i <= 10; i++) {
    console.log("\t".concat(num, " x ").concat(i, " = ") + (i * num));
}
