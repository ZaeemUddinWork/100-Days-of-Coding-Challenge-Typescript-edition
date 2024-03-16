/*
Question 36: T-Shirt: Create a function for customizing t-shirts.
*/

function shirt_maker(size:string,color:string,message:string)
{
    console.log(`\n
    -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
    The new order of shirt contain following information:
    Size: ${size}
    Color: ${color}
    Message: ${message}
    -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
    `)
}

shirt_maker('Large','red',"I hate You!!")//for shirt 1
shirt_maker('Small','Blue',"Be a Cool not a fool")//for shirt 2
shirt_maker('Extra Large','Green',"You might be not a hero but you are also not a zero!!")//for shirt 3