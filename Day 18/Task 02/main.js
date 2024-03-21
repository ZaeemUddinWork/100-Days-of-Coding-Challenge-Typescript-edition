/*
Question 53: Pulling Apart a Nested Object:
Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks.
Find a way to get three specific skills from this list and show them.

Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.
*/
//nested object with programming language ,tools and frameworks
var programming_language = {
    codding_language: ['Python', 'Perl', 'Bash'],
    frameworks: ['Django', 'Flask', 'TurboGears'],
    tools: ['Atom', 'NetBeans', 'CodeCharge Studio']
};
//assigning seperately from nested object 
var codding_language = programming_language.codding_language, frameworks = programming_language.frameworks, tools = programming_language.tools;
//log printing list with only 1 items of earch list 
console.log("\n    Langeage: ".concat(codding_language[0], "\n    Framework: ").concat(frameworks[1], "\n    Tools: ").concat(tools[2], "\n"));
