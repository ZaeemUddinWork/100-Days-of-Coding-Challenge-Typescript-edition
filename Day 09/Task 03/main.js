/*
Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
*/
//saving aliens with their colors
var G_Alien = 'Green';
var R_Alien = 'Red';
var Y_Alien = 'Yellow';
var B_Alien = 'Blue';
//function for Comparing color of alien than give points according to them
function points(alien_color) {
    if (alien_color == 'Green') {
        console.log("You shot down ".concat(alien_color, " alien, You got 50 points\n"));
    }
    else if (alien_color == 'Red') {
        console.log("You shot down ".concat(alien_color, " alien, You got 25 points\n"));
    }
    else if (alien_color == 'Yellow') {
        console.log("You shot down ".concat(alien_color, " alien, You got 10 points\n"));
    }
    else {
        console.log("You shot down wrong alien, You got 0 points\n");
    }
}
//printing When color is Green
console.log("Conditional Statement when color is green \n");
points(G_Alien); //Calling points function
//printing When color is Red
console.log("Conditional Statement when color is Red \n");
points(R_Alien); //Calling points function
//printing When color is Yellow
console.log("Conditional Statement when color is Yellow \n");
points(Y_Alien); //Calling points function
//printing When color is Blue
console.log("Conditional Statement when color is Blue \n");
points(B_Alien); //Calling points function
