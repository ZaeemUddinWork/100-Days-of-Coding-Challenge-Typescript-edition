/*
Question 60: 
Self-Running User Profile: Create a quick, 
self-setup profile for a user that can tell you the user's name and age.

Explain & TIP: This is like a self-building lego set. Once you start it, 
it builds a user profile by itself and can tell you about the user.
*/

//userprogfile
let userprofile = (
    function (){ //function for for saving name and age and than return it
        let username : string = 'Zaeem uddin'
        let age:number = 24

        return{  //return that will print function with name and age
            displayinformation: function(){
                console.log(`
                Name: ${username}
                Age: ${age}
                `)
            }
        }
    }
)();

//printing userprofile displayinformation
userprofile.displayinformation();