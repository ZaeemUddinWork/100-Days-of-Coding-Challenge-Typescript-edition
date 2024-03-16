import inquirer from "inquirer";
let calculator = await inquirer.prompt([
    {
        name: 'num1',
        type: "number",
        message: 'number 1:'
    },
    {
        name: 'num2',
        type: "number",
        message: 'number 2:'
    },
    {
        name: 'operator',
        type: "list",
        message: 'number 1:',
        choices: ['+', '-', '*', '/']
    }
]);
if (calculator.operator === '+') {
    console.log(calculator.num1 + calculator.num2);
}
else if (calculator.operator === '-') {
    console.log(calculator.num1 - calculator.num2);
}
else if (calculator.operator === '*') {
    console.log(calculator.num1 * calculator.num2);
}
else if (calculator.operator === '/') {
    console.log(calculator.num1 / calculator.num2);
}
else {
    console.log(`invalide operator`);
}
