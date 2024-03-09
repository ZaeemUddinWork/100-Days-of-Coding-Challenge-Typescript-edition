/*
Question 18: Seeing the World: Think of at least five places you’d like to visit.
*/
// saving cpountry name
let Countries: string[] = ['Pakistan','Japan','America','Sri Lanka','Turkey'];

// printing original list
console.log('\noriginal order list :'+Countries);

//printing in alphabetic order
console.log('\nalphabetic order :'+[...Countries].sort());

// printing original list
console.log('\noriginal order list :'+Countries);

//printing in alphabetic order in reverse
console.log('\nalphabetic order in reverse :'+[...Countries].sort((a,b) => b.localeCompare(a)));

// printing original list
console.log('\noriginal order list :'+Countries);

//printing in alphabetic order in reverse by using revers()
console.log('\nalphabetic order in reverse by using revers() :'+[...Countries].sort().reverse());

// printing original list
console.log('\noriginal order list :'+Countries);


// printing  reverse order list
console.log('\nreverse order list :'+Countries.reverse());


// printing  original order list
console.log('\noriginal order list :'+Countries.reverse());
