import inquirer from "inquirer";

//calculator
let calculator = await inquirer.prompt([
  {
    name: "num1",
    type: "number",
    message: "number 1:",
  },
  {
    name: "num2",
    type: "number",
    message: "number 2:",
  },
  {
    name: "operator",
    type: "list",
    message: "number 1:",
    choices: ["+", "-", "*", "/"],
  },
]);

if (calculator.operator === "+") {
  console.log(calculator.num1 + calculator.num2); //if user select  +
} else if (calculator.operator === "-") {
  console.log(calculator.num1 - calculator.num2); //if user select -
} else if (calculator.operator === "*") {
  console.log(calculator.num1 * calculator.num2); //if user select *
} else if (calculator.operator === "/") {
  console.log(calculator.num1 / calculator.num2); //if user select /
} else {
  console.log(`invalide operator`); //if user provide invalide operator
}
