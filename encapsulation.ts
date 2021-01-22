/* Encapsulation, from the word capsule. 
It maeans to hold information in a certain package. 
The inside components of  the capsule are what matters
*/
/* Basic Programming 

let username = "Kesa";
let password = "45689";
let fullname = "Patricia Nekesa";

function login (uname, pword){     console.log("You are logged in!") }

 login("mary", "567");
 console.log(username);


*/
 
/* Object literal {}
    Template
        Object Factory
        Object Constructor

let rhoda = {name: "Patricia"}

function Person(){
    this.name = "jim"
    this.age = 56;
}

let kesa = new Person()
*/

/* Encapsulation is as follows */

class user {
    // Variables
     username = "Kesa";
    //  Private hides the data from users and only available to class user so we can only access it through methods
     private password = "45689";
     fullname = "Patricia Nekesa";

    //Operations/Methods
     login (uname, pword){
        if(uname===this.username, pword===this.password){
        console.log("You are logged in!");
    }
        else{
            console.log("Invalid credentials");
        }
     }
     setPassword(newPassword){
         this.password = newPassword;
         console.log("Password changed successfully")
     }
     talk(){}
     logout(){}
}


let rhoda= new user();
console.log(rhoda.username)

rhoda.login("Kesa", "45689");
rhoda.setPassword("1234");
rhoda.login("Kesa", "45689");
rhoda.login("Kesa", "1234");





// By default, variables in typescript are public