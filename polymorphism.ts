/*
    Polymorhism
    Poly - multi, many
    morph - change
    ism - actively
    ---------------------
    - overloading (object methods)
    - overriding (object methods)
    - subtyping(object)

    The ability of an object or its methods/attributes to exist in more than one form 
*/

// Overriding
    class Persons {
        //Methods
        talk(){
            console.log('I am a person with whole feelings');
            
        }
    }

    class Staff extends Persons{
        //Methods
        talk(){
            console.log('I am a staff member');
            
        }
    }

    class Student extends Persons {
        //Methods
        talk(){
            console.log('I am a hardworking student');
            
        }
    }

    // Each time we create a class in OOP it becomes a type of like integers and strings that is subtyping
    //Subtyping

    // let person:Person = new Person()
    // person.talk();

    // let staff:Staff = new Staff();
    // staff.talk();

    // let student: Student = new Student()
    // student.talk()

    // Here we show that person can change through subtyping nto different forms
    let person: Persons = new Persons();
    person.talk();

    person = new Staff()
    person.talk();

    person = new Student()
    person.talk();


    class Animal {
        communicate(){
            console.log('I am an animal');
            
        }
    }

    class Cow extends Animal{
        communicate(){
            console.log("booooo");
            
        }
    }

    class Cat extends Animal{
            communicate(){
                console.log('meeewwww');
                
            }
    }

    class Sheep extends Animal {
        communicate(){
            console.log('bleattt');
            
        }
    }

    //Normal non polymorphism
    let cow:Cow = new Cow();
    cow.communicate();

    let cat: Cat = new Cat();
    cat.communicate();

    let sheep: Sheep = new Sheep();
    sheep.communicate();

    //Polymorhism here as animal changes
    let animal: Animal;

    animal = new Cow();
    animal.communicate();

    animal = new Sheep();
    animal.communicate();

    animal = new Cat;
    animal.communicate();