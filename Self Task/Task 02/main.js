"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importing inquirer
const inquirer_1 = __importDefault(require("inquirer"));
//BMI calculator with option user can select in Kilograms or Pounds
let BMI_calculator = await inquirer_1.default.prompt({
    name: 'Option',
    type: "list",
    message: "Select Measurement Units :",
    choices: ['Kilograms and meters', 'Pounds and inches']
});
//Title of program
console.log(`!! BMI Claculator !!`);
if (BMI_calculator.Option == 'Kilograms and meters') //if user select in kilogram so this program will work
 {
    let BMI_calculator_Kilogram = await inquirer_1.default.prompt([
        {
            name: 'Age',
            type: "number",
            message: 'Enter your age:'
        },
        {
            name: 'Kilogram',
            type: "number",
            message: 'Enter Weight(kg):'
        },
        {
            name: 'Meter',
            type: 'number',
            message: "Enter Height(m):"
        }
    ]);
    let answer = BMI_calculator_Kilogram.Kilogram / (BMI_calculator_Kilogram.Meter) ** 2; //formula to calculate BMI in kilogram 
    console.log(answer.toFixed(2) + ' kg/m^2'); // answer will print ans with round up to 2 decimal place
    //if else condition for checking bmi result with your age and than give you a result in under /normal/over weight
    if (BMI_calculator_Kilogram.Age > 19 && BMI_calculator_Kilogram.Age < 50) //for age from 20 to 49
     {
        if (answer > 18.5 && answer <= 24.9) {
            console.log(`Weight Status: Normal`);
        }
        else if (answer > 24.9) {
            console.log(`Weight Status: Over weight`);
        }
        else {
            console.log(`Weight Status: Under Weight`);
        }
    }
    else if (BMI_calculator_Kilogram.Age > 49 && BMI_calculator_Kilogram.Age < 65) //for age from 50 to 65
     {
        if (answer >= 19 && answer <= 24.9) {
            console.log(`Weight Status: Normal`);
        }
        else if (answer > 24.9) {
            console.log(`Weight Status: Over weight`);
        }
        else {
            console.log(`Weight Status: Under Weight`);
        }
    }
    else if (BMI_calculator_Kilogram.Age > 65) // for age above 65
     {
        if (answer >= 20 && answer <= 24.9) {
            console.log(`Weight Status: Normal`);
        }
        else if (answer > 24.9) {
            console.log(`Weight Status: Over weight`);
        }
        else {
            console.log(`Weight Status: Under Weight`);
        }
    }
    else {
        console.log(`Not applicable (refer to growth charts specific to age)`); //this will print if age is under 19 
    }
}
else if (BMI_calculator.Option == "Pounds and inches") // if user select pounds so this program will work
 {
    let BMI_calculator_Pounds = await inquirer_1.default.prompt([
        {
            name: 'Age',
            type: "number",
            message: 'Enter your age:'
        },
        {
            name: "Pounds",
            type: "number",
            message: 'Enter Weight(lbs):'
        },
        {
            name: "Inches",
            type: "number",
            message: "Enter Height(in):"
        }
    ]);
    let answer = 703 * BMI_calculator_Pounds.Pounds / (BMI_calculator_Pounds.Inches) ** 2; //formula to calculate BMI in pounds but it will convert it into kg/m^2 by multiplying 703 
    console.log(answer.toFixed(2) + ' kg/m^2'); // answer will print ans with round up to 2 decimal place
    //if else condition for checking bmi result with your age and than give you a result in under /normal/over weight
    if (BMI_calculator_Pounds.Age > 19 && BMI_calculator_Pounds.Age < 49) //for age from 20 to 49
     {
        if (answer > 18.5 && answer <= 24.9) {
            console.log(`Weight Status: Normal`);
        }
        else if (answer > 24.9) {
            console.log(`Weight Status: Over weight`);
        }
        else {
            console.log(`Weight Status: Under Weight`);
        }
    }
    else if (BMI_calculator_Pounds.Age > 49 && BMI_calculator_Pounds.Age < 65) //for age from 50 to 65
     {
        if (answer >= 19 && answer <= 24.9) {
            console.log(`Weight Status: Normal`);
        }
        else if (answer > 24.9) {
            console.log(`Weight Status: Over weight`);
        }
        else {
            console.log(`Weight Status: Under Weight`);
        }
    }
    else if (BMI_calculator_Pounds.Age > 64) // for age above 65
     {
        if (answer >= 20 && answer <= 24.9) {
            console.log(`Weight Status: Normal`);
        }
        else if (answer > 24.9) {
            console.log(`Weight Status: Over weight`);
        }
        else {
            console.log(`Weight Status: Under Weight`);
        }
    }
    else {
        console.log(`Not applicable (refer to growth charts specific to age)`); //this will print if age is under 19 
    }
}
