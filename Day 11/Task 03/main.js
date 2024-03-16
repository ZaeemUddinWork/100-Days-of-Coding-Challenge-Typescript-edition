/*
Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes
*/
//loop for assign 1 to 10 with the help of loop
for (var num = 1; num <= 10; num++) {
    if (num === 1) {
        console.log("".concat(num, "st")); //if num ==1 than it will print 1st
    }
    else if (num === 2) {
        console.log("".concat(num, "nd")); //if num ==2 than it will print 2nd
    }
    else if (num === 3) {
        console.log("".concat(num, "rd")); //if num ==3 than it will print 3rd
    }
    else {
        console.log("".concat(num, "th")); //if num == any number than it will print any number with "th"
    }
}
