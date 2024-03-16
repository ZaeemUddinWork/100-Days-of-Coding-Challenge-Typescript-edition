"use strict";
/*
Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
*/
//function for age analyse 
function ager_analyse(age) {
    if (age == 0) // condition for age = 0 
     {
        console.log(`This person is not born yet!!`);
    }
    else if (age > 0 && age <= 1) // condition for age greater 0 and smaller and equal 1
     {
        console.log(`This person is Baby`);
    }
    else if (age > 1 && age < 3) // condition for age greater than 1 and smaller than 3
     {
        console.log(`This person is Toddler`);
    }
    else if (age > 3 && age < 5) // condition for age greater than 3 and smaller than 5
     {
        console.log(`This person is Perschooler`);
    }
    else if (age > 5 && age < 12) // condition for age greater than 5 and smaller than 12
     {
        console.log(`This person is Primary school boy`);
    }
    else if (age > 12 && age < 19) // condition for age greater than 12 and smaller than 19
     {
        console.log(`This person is Teenager`);
    }
    else if (age > 19 && age < 65) // condition for age greater than 19 and smaller than 65
     {
        console.log(`This person is Adult`);
    }
    else if (age > 65 && age < 150) // condition for age greater than 65 and smaller than 150
     {
        console.log(`This person is Old person`);
    }
    else if (age > 150) // condition for age greater than 150
     {
        console.log(`This person is Legend`);
    }
    else { // if it dosent meet all above condition so it mean this person dosenot exists
        console.log(`This person is not exists`);
    }
}
//now printing all ages 
//when age = 0
ager_analyse(0);
//when age = 1
ager_analyse(1);
//when age = 2
ager_analyse(2);
//when age = 4
ager_analyse(4);
//when age = 10
ager_analyse(10);
//when age = 15
ager_analyse(15);
//when age = 30
ager_analyse(30);
//when age = 70
ager_analyse(70);
//when age = 100
ager_analyse(100);
//when age = 200
ager_analyse(200);
//when age = -10
ager_analyse(-10);
