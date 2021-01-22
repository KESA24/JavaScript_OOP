class Person {
    // Whenever you create a class, make sure u have variables and methods. A method is a function within a class

    //Variables
    name: string; 
    gender: string;

    //Method
    constructor (nameArg, genderArg){
        this.name = nameArg;
        this.gender = genderArg;
    }

    talk(){
        console.log(`I am a person called ${this.name}`)
    }
}

class Parent extends Person {
    //Variables
    numberOfChildren = 4

    //Methods
    // We can also use the "setvalue" method instead of constructor but would require more lines of code
    constructor(nameArg, genderArg, numberOfChildrenArg){
        super(nameArg, genderArg)
        this.numberOfChildren = numberOfChildrenArg
    }

    talk(){
        console.log (`I am a parent called ${this.name} with ${this.numberOfChildren} children`)
    }

}

let person1 = new Person("Nekesa", "Male")
person1.talk();

let person2 = new Parent ("Rhoda", "Female", 435)
person2.talk();


