/* Access control Modifiers
    Types
        - Private => It's scope is limited to the class where the variable is declared from.
        - Protected => the scope is limited to the class and (its child/subclasses) where the variable is declared from.
        - Public => the scope is limited to the module/package where the class from which it's defined
        - Package

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
var GrandParent = /** @class */ (function () {
    function GrandParent() {
        // private dna:string = "d7654";
        this.dna = "d7654";
        this.secretcode = "kjhsj";
        this.name = "Nekesa";
    }
    GrandParent.prototype.getDNA = function () {
        return this.dna;
    };
    return GrandParent;
}());
var Parent = /** @class */ (function (_super) {
    __extends(Parent, _super);
    function Parent() {
        return _super.call(this) || this;
    }
    Parent.prototype.getDNA = function () {
        return this.dna;
    };
    return Parent;
}(GrandParent));
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super.call(this) || this;
    }
    Child.prototype.getDNA = function () {
        return this.dna;
    };
    return Child;
}(Parent));
var parent1 = new Parent();
//Protected
console.log(parent1.getDNA());
//Public
console.log(parent1.name);
// Cannnot access private
console.log(parent1.secretcode);
var child1 = new Child();
//Protected
console.log(child1.getDNA());
//Public
console.log(child1.name);
//Cannot access private
console.log(child1.secretcode);
