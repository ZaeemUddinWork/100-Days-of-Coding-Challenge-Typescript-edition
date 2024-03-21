/*
Question 54: Making Flexible Object Keys: 
Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.

Explain & TIP: 
This is like having labels you can rewrite anytime, which is great for when you need to adjust your list based on new information.
*/

let flex_obj = (key:string,value:any)=>{
    //flexible array
    let Flexible_object ={};
    //key will be name of value
    Flexible_object[key] =value;
    return Flexible_object;
}
//printing different of object in string ,number ,boolean
 console.log(  flex_obj('Fruit','Apple'))
 console.log(  flex_obj('Lucky_number',27))
 console.log(  flex_obj('Merried',false))


    