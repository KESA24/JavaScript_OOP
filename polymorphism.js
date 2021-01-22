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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Overriding
var Person = /** @class */ (function () {
    function Person() {
    }
    //Methods
    Person.prototype.talk = function () {
        console.log('I am a person with whole feelings');
    };
    return Person;
}());
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Methods
    Staff.prototype.talk = function () {
        console.log('I am a staff member');
    };
    return Staff;
}(Person));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Methods
    Student.prototype.talk = function () {
        console.log('I am a hardworking student');
    };
    return Student;
}(Person));
// Each time we create a class in OOP it becomes a type of like integers and strings that is subtyping
//Subtyping
// let person:Person = new Person()
// person.talk();
// let staff:Staff = new Staff();
// staff.talk();
// let student: Student = new Student()
// student.talk()
// Here we show that person can change through subtyping nto different forms
var person = new Person();
person.talk();
person = new Staff();
person.talk();
person = new Student();
person.talk();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.communicate = function () {
        console.log('I am an animal');
    };
    return Animal;
}());
var Cow = /** @class */ (function (_super) {
    __extends(Cow, _super);
    function Cow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cow.prototype.communicate = function () {
        console.log("booooo");
    };
    return Cow;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.communicate = function () {
        console.log('meeewwww');
    };
    return Cat;
}(Animal));
var Sheep = /** @class */ (function (_super) {
    __extends(Sheep, _super);
    function Sheep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sheep.prototype.communicate = function () {
        console.log('bleattt');
    };
    return Sheep;
}(Animal));
// let cow:Cow = new Cow();
// cow.communicate();
// let cat: Cat = new Cat();
// cat.communicate();
// let sheep: Sheep = new Sheep();
// sheep.communicate();
var animal;
animal = new Cow();
animal.communicate();
animal = new Sheep();
animal.communicate();
animal = new Cat;
animal.communicate();
