//Inheritance : extends

class Parents {

}



// Implementation

interface LivingThing{
    eat();
    breath();
    die();
    reproduce();

}
class Children extends Parents implements LivingThing{
    eat(){};
        breath(){};
        die(){};
        reproduce(){};
}
class Human implements LivingThing{
    eat(){};
    breath(){};
    die(){};
    reproduce(){};
}


