/*
Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
*/


//saving aliens with their colors
let G_Alien : string = 'Green';
let R_Alien : string = 'Red';
let Y_Alien : string = 'Yellow';

//printing Condition when we shot green alien
console.log(`Conditional Statement when we shot green alien \n`)

if(G_Alien == 'Green')
{
    console.log(`You shot down ${G_Alien} alien,You got 50 points\n`)
}

else
{
    console.log(`You got 0 points\n`)
}


//printing Condition when we shot other alien
console.log(`Conditional Statement when we shot other alien\n`)



if(G_Alien == 'Red')
{
    console.log(`You shot down ${G_Alien} alien,You got 50 points\n`)
}

else
{
    console.log(`You got 0 points\n`)
}