/*
Question 22: Intentional Error: Try to produce an array index error in one of your programs.
Correct the error before finishing.
*/
//saving countries name
var countries = ['Pakistan', 'Japan', 'Italy', 'Turkey', 'Afghanistan'];
//index error 
console.log("Index error => " + countries[6]);
//printing array
countries.forEach(function (list) {
    console.log(list);
});
