/*
Q1:create a program to provide multiplication of table from 1 to 5
*/
//saving number 5 for table 1 to 5  
// creating loop for table
for (var table_no = 1; table_no <= 5; table_no++) {
    console.log("\n\tMultiplication Table of No.: ".concat(table_no));
    for (var number = 1; number <= 10; number++) {
        console.log("\t".concat(table_no, " x ").concat(number, " = ") + (table_no * number));
    }
}
