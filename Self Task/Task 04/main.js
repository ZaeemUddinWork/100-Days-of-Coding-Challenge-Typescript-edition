//Statement of Profit and Loss
//importing inquirer
import inquirer from "inquirer";
//taking campany data for Statement od Profit & loss
let Company_data = await inquirer.prompt([
    {
        name: "company_name", //company name
        type: "input",
        message: "Enter Company name:",
    },
    {
        name: "Revenue", //revenue
        type: "number",
        message: "Enter your company sale or Revenue: ",
    },
    {
        //cost_of_ssales_option if user want to find cos or he already have than no
        name: "cost_of_ssales_option",
        type: "list",
        message: "Do want to calculate Cost of sale or not ?",
        choices: ["Yes", "No"],
    },
]);
// stroding data of cost of sale
let cost_of_sale;
//cos for calculating cost of sale if user need to find it
let cos;
//if user want to find cost of sale so if condition will be selected
if (Company_data.cost_of_ssales_option == "Yes") {
    //Title  cost of sale
    console.log(`Add data to find Cost of sales: `);
    //taking data from user
    cost_of_sale = await inquirer.prompt([
        {
            name: "OpInventory", //OpInventory
            type: "number",
            message: "Opening Inventory:",
        },
        {
            name: "New_Inventory", //New_Inventory
            type: "number",
            message: "New Inventory:",
        },
        {
            name: "closing_inventroy", //closing_inventroy
            type: "number",
            message: "Closing Inventory: ",
        },
    ]);
    cos =
        cost_of_sale.OpInventory +
            cost_of_sale.New_Inventory -
            cost_of_sale.closing_inventroy;
}
else {
    console.log(`Add Cost of sales: `);
    cost_of_sale = await inquirer.prompt([
        {
            name: "Cost_of_sale", //cost of sale
            type: "number",
            message: "Cost of Sales: ",
        },
    ]);
    cos = cost_of_sale.cost_of_sale;
}
//Title for Income
console.log(`Income:`);
//taking income input from user
let income = await inquirer.prompt([
    {
        name: "Other_income", //other income
        type: "number",
        message: "Other Income: ",
    },
]);
//Title for expenses
console.log(`Expenses:`);
//taking Expenses from user there lot expenses but here some of them
let Expenses = await inquirer.prompt([
    {
        name: "wages", //wages expenses
        type: "number",
        message: "Wages: ",
    },
    {
        name: "rent", //rent expenses
        type: "number",
        message: "Rent: ",
    },
    {
        name: "depreciation", //depreciation expenses
        type: "number",
        message: "Depreciation",
    },
    {
        name: "utilities", //utilities expenses
        type: "number",
        message: "Utilities",
    },
    {
        name: "interest", //interest expenses
        type: "number",
        message: "Interest ",
    },
    {
        name: "marketing", //marketing expenses
        type: "number",
        message: "Marketing: ",
    },
    {
        name: "Administrative", //Administrative expenses
        type: "number",
        message: "Administrative: ",
    },
    {
        name: "Other_Expenses", //Other_Expenses expenses
        type: "number",
        message: "Other Expenses: ",
    },
]);
// for calculating Gross profit
let gross_profit = Company_data.Revenue - cos;
// for calculating net profit
let net_profit = gross_profit +
    income.Other_income -
    Expenses.wages -
    Expenses.rent -
    Expenses.depreciation -
    Expenses.utilities -
    Expenses.interest -
    Expenses.marketing -
    Expenses.Administrative -
    Expenses.Other_Expenses;
//analyzing company statemtnt is it in profit or loss
let statement;
if (net_profit > 0) {
    statement = "Your company is in Profit";
}
else {
    statement = "Your company is in Loss";
}
//printing statement of pofit and loss
console.log(`
    -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
    \t\t${Company_data.company_name}.Co
    \tStatement of Profit & Loss
    -------------------------------------------

    Revenue:        ${Company_data.Revenue}
    Cost of Sales:  ${cos}

    -------------------------------------------
    Gross Profit:   ${gross_profit}

    Income:
    Other Income:   ${income.Other_income}

    Expenses:
    Wages:          ${Expenses.wages}
    Rent:           ${Expenses.rent}
    Depreciation:   ${Expenses.depreciation}
    Utilities:      ${Expenses.utilities}
    Interest:       ${Expenses.interest}
    Marketing:      ${Expenses.marketing}
    Administrative: ${Expenses.Administrative}
    Other Expenses: ${Expenses.Other_Expenses}
    -------------------------------------------
    Net Profit      ${net_profit}

    -------------------------------------------
    Statement:      ${statement}

    -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
    `);
