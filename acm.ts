/* Access control Modifiers
    Types
        - Private => It's scope is limited to the class where the variable is declared from.
        - Protected => the scope is limited to the class and (its child/subclasses) where the variable is declared from.
        - Public => the scope is limited to the module/package where the class from which it's defined
        - Package

*/

class GrandParent {
    // private dna:string = "d7654";
    protected dna:string = "d7654";
    private secretcode: string ="kjhsj";
    public name:string = "Nekesa";

    getDNA(){
        return this.dna;
    }
}

class Parent extends GrandParent {
    constructor (){
        super()
    }
    getDNA(){
        return this.dna;
    }
    
}

class Child extends Parent {
    constructor (){
        super()
    }
    getDNA(){
        return this.dna;
    }
    
}

let parent1 = new Parent();
//Protected
console.log(parent1.getDNA());

//Public
console.log(parent1.name);

// Cannnot access private
// console.log(parent1.secretcode);



let child1 = new Child();

//Protected
console.log(child1.getDNA());

//Public
console.log(child1.name);

//Cannot access private
// console.log(child1.secretcode);




