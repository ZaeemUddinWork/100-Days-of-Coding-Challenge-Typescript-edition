/*
Question 37: Large Shirts: Default values in make_shirt().
*/
//function for make_shirt
function make_shirt(size:string = 'large',color: string ='Red',message: string = 'I hate you')
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

make_shirt()//by default
make_shirt('Small','Green','Be a Cool not a Fool')//for small with message
make_shirt('Medium','Pink','I love Barbie')//for medium with message
