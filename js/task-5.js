class Car {
  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  static getSpecs(car) {
    return `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`;
  }

  get price() {
    return this.price;
  }

  set price(value) {
    // console.log(value);
    // console.log(this.price);
    this.price = value; // ? why 'Uncaught RangeError: Maximum call stack size exceeded' ???
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    this.speed + value <= this.maxSpeed ? this.speed + value : this.speed;
  }

  decelerate(value) {
    this.speed - value >= 0 ? this.speed - value : this.speed;
  }

  drive(hours) {
    this.isOn === true ? (this.distance = hours * this.speed) : this.distance;
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
