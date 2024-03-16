/*
Q1:create a program to provide multiplication of table from 1 to 5
*/
//saving number 5 for table 1 to 5  
// creating nested loop for table
for (let table_no =1 /*saving table no*/; table_no <= 5; table_no++ /* it will increase table no after every loop*/)
{   //printing titel for all tables 
    console.log(`\n\tMultiplication Table of No.: ${table_no}`)
    for(let number=1; number <=10; number++ )
    {   //printing table like 1 x 1 = 1 
        console.log(`\t${table_no} x ${number} = ` +(table_no*number))
    }

}