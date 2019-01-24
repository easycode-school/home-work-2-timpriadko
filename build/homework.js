// 1 
class Car {
}
// 2
class MethodsForCarClass extends Car {
    drive(kms) {
        if (kms < 0) {
            console.log("Incorrect value provided");
        }
        this.mileage = this.mileage + kms;
        this.fuel = this.fuel - kms;
        if (this.fuel <= 0) {
            console.log("Need a refuel");
        }
    }
    refuel(amount) {
        if (amount < 0) {
            console.log("Incorrect value provided");
        }
        return this.fuel + amount;
    }
    // 3
    get getfuel() {
        return this.mileage;
    }
    get getmileage() {
        return this.mileage;
    }
}
