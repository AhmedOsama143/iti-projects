// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// class UserDB {
//   save(user) {
//     console.log(`Saving ${user.name} to DB`);
//   }
// }

// class EmailService {
//   sendEmail(user) {
//     console.log(`Sending email to ${user.email}`);
//   }
// }

// const user = new User("Abanoub", "Abanoub@mail.com");
// new UserDB().save(user);
// new EmailService().sendEmail(user);

// ! The Single Responsibility Instead of putting everything inside one class we split responsibilities

// ! Open/Closed Principle

// class Shape {
//   calculateArea() {
//     throw new Error("calculateArea() must be implemented");
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }
//   calculateArea() {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// class Rectangle extends Shape {
//   constructor(width, height) {
//     super();
//     this.width = width;
//     this.height = height;
//   }
//   calculateArea() {
//     return this.width * this.height;
//   }
// }

// class AreaCalculator {
//   calculate(shape) {
//     return shape.calculateArea();
//   }
// }

// const calc = new AreaCalculator();
// const circle = new Circle(5);
// const rectangle = new Rectangle(4, 6);

// console.log(calc.calculate(circle));
// console.log(calc.calculate(rectangle));

// ! Open/Closed Principle Instead of modifying AreaCalculator every time we add a new shape we extend by creating new shape classes with their own calculateArea().

// ! Liskov Substitution Principle

// class Bird {
//   makeSound() {
//     console.log("bird sound");
//   }
// }

// class FlyingBird extends Bird {
//   fly() {
//     console.log("flying");
//   }
// }

// class Penguin extends Bird {
//   swim() {
//     console.log("swimming");
//   }
// }

// const bird1 = new FlyingBird();
// bird1.makeSound();
// bird1.fly();

// const penguin = new Penguin();
// penguin.makeSound();
// penguin.swim();
