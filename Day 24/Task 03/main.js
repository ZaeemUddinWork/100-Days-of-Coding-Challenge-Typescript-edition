/*
Question 72:
Block Scope with let and const:
Demonstrate block scope by creating a code block with {} that uses both let and const.

Show how variables declared inside the block are not accessible outside of it.

Explain & TIP: Block scope, created by {} in JavaScript,
confines let and const variables to that block, enhancing code organization and preventing accidental access from outside the block.
*/
{
    var names = 'zaeem';
    var age = 22;
    var nic_no = '42101-1296993-96';
    console.log("\n    ".concat(names, ",\n    ").concat(age, ",\n    ").concat(nic_no, ",\n    ")); //this will work fine 
}
try {
    console.log("\n    ".concat(names, ",\n    ").concat(age, ",\n    ").concat(nic_no, ",\n    ")); //this will give error because You can't declear block code in another place
}
catch (error) {
    console.log("You can't declear block code in another place");
}
