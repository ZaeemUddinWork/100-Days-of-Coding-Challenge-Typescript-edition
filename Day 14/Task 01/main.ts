/*
Question 40: Album: Create objects for music albums.
*/
//function for artest with titel 
function make_album(name:string,Title:string,Track?:number) 
{
    let Album 
   
    if (Track)//if it has track number than it will go here
    {
         Album = 
        {
            name,
            Title,
            Track
        }
        return Album;
    }
    else { //if it has no track it will og here
        Album =
        {
            name,
            Title
        }
        return Album;
    }
}
//printing artest 
console.log(make_album('ali zafer','Psl',9))
console.log(make_album('Zaeem uddin','Break the world'))
console.log(make_album('Taha khan','Into new world',5))
console.log(make_album('Ali jamal','End of the world',2))


