//Bmi calculator v2.O
//importing inquirer
import inquirer from "inquirer";
//
//Title
console.log(`BMI Calculator v2.O`)
//
//this will ask question According to BMI
let BMI_calculator = await inquirer.prompt([
    {
        name:"Age",
        type: 'number',
        message: 'Enter your age:'
    },
    {
        name: 'Option',
        type: "list",
        message: "Please select measurement option:",
        choices: ['Kilograms & Meters','Pounds & Inches']
    },
    {
        name:'weight',
        type: 'number',
        message: 'Enter your weight: '
    },
    {
        name: 'Height',
        type: "number",
        message: 'Enter your height: '
    }
])

// variable for storing answers

let answer:number;

if (BMI_calculator.Age >19)//if ager is above 19 so this all function will work other wise it will go to else
{
    if (BMI_calculator.Option == 'Kilograms & Meters') 
    {
        answer = BMI_calculator.weight / (BMI_calculator.Height)**2 //calculation for kilogram
    }
    else
    {
        answer = 703 * BMI_calculator.weight / (BMI_calculator)**2 //calculation for pronds but it will convert it into kg/m^2
    }
    //Results
    console.log(`Results of BMI:`)//Title

    console.log(answer.toFixed(2)+' kg/m^2')//BMI Answer

    //If else Condition for weight under/normal / over 

    if (BMI_calculator.Age <49)//for age from 20 to 49
    {
        if (answer > 18.5 && answer <=24.9)
        {
            console.log(`Weight Status: Normal`)//if BMI above 18.5 and under 24.9 it is normal 
        }
        else if (answer > 24.9 )
        {
            console.log(`Weight Status: Over weight`)//if BMI above  24.9 it is over 
        }
        else {
            console.log(`Weight Status: Under Weight`)//if BMI unser 18.5 it is under
        }
    }
    
    else if (BMI_calculator.Age <65)//for age from 50 to 65
    {
        if (answer >= 19 && answer <=24.9)
        {
            console.log(`Weight Status: Normal`)//if BMI above 19 and under 24.9 it is normal 
        }
        else if (answer > 24.9 )
        {
            console.log(`Weight Status: Over weight`)//if BMI above  24.9 it is over
        }
        else {
            console.log(`Weight Status: Under Weight`)//if BMI unser 19 it is under
        }
    }
    else if (BMI_calculator.Age >64 )// for age above 65
    {
        if (answer >= 20 && answer <= 24.9)
        {
            console.log(`Weight Status: Normal`)//if BMI above 20 and under 24.9 it is normal 
        }
        else if (answer > 24.9 )
        {
            console.log(`Weight Status: Over weight`)//if BMI above  24.9 it is over
        }
        else {
            console.log(`Weight Status: Under Weight`)//if BMI unser 20 it is under
        }
    }
    
    
}

//if user age is under 19 so it will print this
else
{
    console.log(`Not applicable (refer to growth charts specific to age)`)
}


