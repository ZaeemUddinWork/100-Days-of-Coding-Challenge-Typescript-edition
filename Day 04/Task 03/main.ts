/*
Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
*/

let my_friends_names: string[] = ['Zaeem uddin','Taha Ali','Shaheer Iqbal','Ali imran','Daniyal Khan'];


for (let i of my_friends_names)
{
    console.log(`${i} is one of my best friend.`);
}