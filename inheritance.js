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
var Person = /** @class */ (function () {
    //Method
    function Person(nameArg, genderArg) {
        this.name = nameArg;
        this.gender = genderArg;
    }
    Person.prototype.talk = function () {
        console.log("I am a person called " + this.name);
    };
    return Person;
}());
var Parent = /** @class */ (function (_super) {
    __extends(Parent, _super);
    //Methods
    function Parent(nameArg, genderArg, numberOfChildrenArg) {
        var _this = _super.call(this, nameArg, genderArg) || this;
        //Variables
        _this.numberOfChildren = 4;
        _this.numberOfChildren = numberOfChildrenArg;
        return _this;
    }
    Parent.prototype.talk = function () {
        console.log("I am a parent called " + this.name + " with " + this.numberOfChildren + " children");
    };
    return Parent;
}(Person));
var person1 = new Person("Nekesa", "Male");
person1.talk();
var person2 = new Parent("Rhoda", "Female", 435);
person2.talk();
