class Car {
    name: string;
    acceleration: number = 0;
    constructor(name:string) {
        this.name = name;
    }
    honk(): void {
        console.log(`${this.name} is saying Toooooot;`)
    }
    accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);