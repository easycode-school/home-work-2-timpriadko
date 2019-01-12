// 1 

abstract class Car {
    public abstract drive(kms: number): void;
    public abstract refuel(amount: number): number;
    protected mileage: number;
    protected fuel: number;
}

// 2

class MethodsForCarClass extends Car {
    protected mileage: number;
    protected fuel: number;

    public drive(kms: number): void {
        if (kms < 0) {
            console.log("Incorrect value provided");
        }

        this.mileage = this.mileage + kms;
        this.fuel = this.fuel - kms;

        if (this.fuel <= 0) {
            console.log("Need a refuel");
        }
    }

    public refuel(amount: number): number {
        if (amount < 0) {
            console.log("Incorrect value provided");
        }
        return this.fuel + amount;
    }

// 3

    public get getfuel(): number {
        return this.mileage
    }

    public get getmileage(): number {
        return this.mileage
    }
}