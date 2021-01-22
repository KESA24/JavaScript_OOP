/*
    Abstract
    ----------------
    Hide complexity and show simplicty


*/
var Car = /** @class */ (function () {
    function Car(cl, hp, ml, bd, md, pc) {
        this.color = cl;
        this.horsePower = hp,
            this.mileage = ml;
        this.brand = bd;
        this.model = md;
        this.privatecode = pc;
    }
    Car.prototype.actuallyStart = function () {
        //Following happens when the car is 
        // turned but the user does not need to know this
        //Ignition,
        //  combustion,
        // drive transfer, 
        // exhaustion
        console.log('Car started.....');
    };
    //Methods
    Car.prototype.start = function (key) {
        if (key) {
            console.log('Car is starting....');
            this.actuallyStart();
        }
    };
    Car.prototype["break"] = function () {
        console.log("Car breaking.....");
    };
    Car.prototype.stop = function () {
        console.log("Car stopping....");
    };
    Car.prototype.getCardetails = function () {
        return {
            color: this.color,
            horsepower: this.horsePower,
            mileage: this.mileage,
            brand: this.brand,
            model: this.model,
            privatecode: this.privatecode
        };
    };
    return Car;
}());
var car1 = new Car('white', 700, 1200, "Benz", "C-67", "pc456");
console.log(car1.getCardetails());
car1.start("right key");
car1["break"]();
car1.stop();
