class Car {
  constructor({ price, maxSpeed }) {
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this.maxSpeed = maxSpeed;
    this._price = price;
  }

  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`,
    );
  }

  get price() {
    return this._price;
  }

  set price(value) {
    // console.log(value);
    // console.log(this.price);
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    this.speed =
      this.speed + value <= this.maxSpeed ? this.speed + value : this.speed;
  }

  decelerate(value) {
    this.speed = this.speed - value >= 0 ? this.speed - value : this.speed;
  }

  drive(hours) {
    this.isOn === true ? (this.distance += hours * this.speed) : this.distance;
  }
}

// ! ----------------- checking --------------------

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
