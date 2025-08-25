// first
// class Ceo {
//   constructor(name, age, address) {
//     if (Ceo.instance) {
//       throw new Error("Ceo already exist");
//     }
//     this.name = name;
//     this.age = age;
//     this.address = address;

//     Ceo.instance = this;
//   }
// }

// const ceo = new Ceo("Abanoub", 23, "Alexandria");

// console.log(ceo.name, ceo.age, ceo.address);

// Second
// class Vehicle {
//   constructor(type, brand, model) {
//     this.type = type;
//     this.brand = brand;
//     this.model = model;
//   }
// }

// class VehicleFactory {
//   static createVehicle(type, brand, model) {
//     return new Vehicle(type, brand, model);
//   }
// }

// const car1 = VehicleFactory.createVehicle("Car", "BMW", "M4");
// const car2 = VehicleFactory.createVehicle("Bike", "BMW", "A3");

// console.log(car1);
// console.log(car2);

// Third

// class ToyDuck {
//   constructor(color, price) {
//     this.color = color;
//     this.price = price;
//   }
// }

// class ToyCar {
//   constructor(color, price, name) {
//     this.color = color;
//     this.price = price;
//     this.name = name;
//   }
// }

// class ToyFactory {
//   static createToy(toyType, options) {
//     if (toyType === "duck") {
//       return new ToyDuck(options.color, options.price);
//     } else if (toyType === "car") {
//       return new ToyCar(options.color, options.price, options.name);
//     } else {
//       throw new Error("wrong toy type");
//     }
//   }
// }

// const duck = ToyFactory.createToy("duck", { color: "yellow", price: 10 });
// const car = ToyFactory.createToy("car", {
//   color: "blue",
//   price: 20,
//   name: "car1",
// });

// console.log(duck);
// console.log(car);

// fourth

// class ConfigureVals {
//   constructor(xPoint = 0, yPoint = 0, shape = null) {
//     if (ConfigureVals.instance) {
//       throw new Error("ConfigureVals already exist");
//     }
//     this.xPoint = xPoint;
//     this.yPoint = yPoint;
//     this.shape = shape;

//     ConfigureVals.instance = this;
//   }
// }

// const config = new ConfigureVals(10, 20, "circle");

// console.log(config);
