/* 
    Abstract
    ----------------
    Hide complexity and show simplicty


*/

class Car {
    //Variables
    color:string;
    horsePower: number;
    mileage: number;
    brand: string;
    model: string;
    private privatecode: string;

    constructor(cl,hp,ml,bd,md,pc){
        this.color = cl;
        this.horsePower = hp,
        this.mileage = ml;
        this.brand= bd;
        this.model = md;
        this.privatecode = pc;

    }
    
    private actuallyStart(){
        //Following happens when the car is 
        // turned but the user does not need to know this
        //Ignition,
        //  combustion,
        // drive transfer, 
        // exhaustion
        console.log('Car started.....')

    }


    //Methods
    start(key){
        if(key){
            console.log('Car is starting....');
            this.actuallyStart()
            
        }
        
    }
    break(){
        console.log("Car breaking.....")
    }
    stop(){
        console.log("Car stopping....")
    }
    getCardetails(){
        return{
            color:this.color,
            horsepower:this.horsePower,
            mileage:this.mileage,
            brand:this.brand,
            model:this.model,
            privatecode:this.privatecode

        }
    }
}

let car1 = new Car('white', 700, 1200, "Benz", "C-67", "pc456");

console.log(car1.getCardetails());

car1.start("right key")

car1.break();

car1.stop();