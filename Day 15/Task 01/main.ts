/*
Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data. 
This exercise demonstrates array copying and manipulation.
*/
//saving magician name
let Magicians: string[] = [
  "Ali khan",
  "Zaeem Uddin",
  "Taha Najam",
  "Waleed Jamal",
];

//function to make great magician
function great_magician(Magicians: string[]): string[] {
  let great_magicians: string[] = [];
  Magicians.forEach((element) => {
    great_magicians.push(`Great ${element}`);
  });
  return great_magicians;
}

//saving name with great in variable
let great_magicians = great_magician(Magicians);

//original Magician name
console.log(Magicians);

// name with great
console.log(great_magicians);
