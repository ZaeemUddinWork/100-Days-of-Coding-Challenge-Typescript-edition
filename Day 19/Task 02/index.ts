/*
Question 56: Keep Only Strings: 
Given a mix of different types of items, make a new list that has only the words.

Explain & TIP: 
We can pick out just the words from a mixed bag of items, creating a list that includes only those words.
*/
//list of mix array
let mixed_items_list: any[]= ['zaeem',27,true,'AI',2574,false,'Anime']

//filtering only list of list of words
let list_of_wrods = mixed_items_list.filter(item=>  typeof item === "string" )

//printing list of words
console.log(list_of_wrods);