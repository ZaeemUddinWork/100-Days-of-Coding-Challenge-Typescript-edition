/*
Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

Explain & TIP: Utilizing rest parameters allows functions to accept an indefinite number of arguments, useful for handling lists of data like sandwich ingredients.
*/
//function for maing sandwich
function make_sandwich(...items: string[]) {
  console.log(`\nSandwich ingredients:`); //title
  items.forEach((item) => {
    //for each loop for list
    console.log(item);
  });
}

make_sandwich("Tomato", "Chease"); // 1

make_sandwich("Bread", "Tomato", "Leamon", "Meat", "Bread"); // 2

make_sandwich("Bread", "Leamon", "Meat", "Bread"); //3
