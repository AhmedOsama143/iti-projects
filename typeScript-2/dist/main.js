"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printProduct(product) {
    console.log(`product: ${product.name}، price: ${product.price}، quantity: ${product.quantity}`);
}
printProduct({ name: "لابتوب", price: 2500, quantity: 5 });
function distanceFromOrigin(point) {
    const [x, y] = point;
    return Math.sqrt(x ** 2 + y ** 2);
}
console.log(distanceFromOrigin([3, 4]));
const p = [3, 4];
function printUser(user) {
    console.log(`user: ${user.name}، email: ${user.email}، id: ${user.id}`);
}
const user = { id: 1, name: "Ahmed", email: "ahmed@example.com" };
printUser(user);
// user.name = "محمد"; error.
// task-4
function logMessage(message) {
    console.log(message);
}
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
function infiniteLoop() {
    while (true) { }
}
logMessage("Hello World");
// throwError("error!");
// infiniteLoop();
// task-5
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631";
    OrderStatus["Processing"] = "\u0642\u064A\u062F \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629";
    OrderStatus["Shipped"] = "\u062A\u0645 \u0627\u0644\u0634\u062D\u0646";
    OrderStatus["Delivered"] = "\u062A\u0645 \u0627\u0644\u062A\u0648\u0635\u064A\u0644";
    OrderStatus["Cancelled"] = "\u0645\u0644\u063A\u064A";
})(OrderStatus || (OrderStatus = {}));
function updateOrderStatus(orderId, status) {
    console.log(`تم تحديث الطلب ${orderId} إلى الحالة: ${status}`);
}
updateOrderStatus(101, OrderStatus.Shipped);
// 4. إنشاء دالة الطباعة جميع معلومات الموظف
function printEmployee(employee) {
    console.log(`المعرف: ${employee.id}`);
    console.log(`الاسم: ${employee.name}`);
    console.log(`البريد الإلكتروني: ${employee.email}`);
    console.log(`رقم الهاتف: ${employee.phone}`);
}
printEmployee({
    id: 1,
    name: "أحمد",
    email: "ahmed@example.com",
    phone: "0100000000",
});
function printManagerInfo(manager) {
    console.log(`المعرف: ${manager.id}`);
    console.log(`الاسم: ${manager.name}`);
    console.log(`القسم: ${manager.department}`);
    console.log(`حجم الفريق: ${manager.teamSize}`);
    console.log(`يرفع التقارير إلى: ${manager.reportsTo ?? "غير محدد"}`);
}
const manager1 = {
    id: 1,
    name: "أحمد",
    department: "المبيعات",
    teamSize: 10,
    reportsTo: "المدير العام",
};
printManagerInfo(manager1);
// error
// const manager2: Manager = {
//   teamSize: 5
// };
// task-3 Class and Encapsulation
class VodafoneCash {
    balance;
    phoneNumber;
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber;
        this.balance = 0;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("المبلغ يجب أن يكون أكبر من صفر");
            return;
        }
        this.balance += amount;
        console.log(`تم إيداع ${amount} جنيه الرصيد الحالي: ${this.balance} جنيه`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("المبلغ يجب أن يكون أكبر من صفر");
            return;
        }
        if (amount > this.balance) {
            console.log("رصيد غير كافي");
            return;
        }
        this.balance -= amount;
        console.log(`تم سحب ${amount} جنيه. الرصيد الحالي: ${this.balance} جنيه`);
    }
    sendMoney(amount, recipientPhone) {
        if (amount <= 0) {
            console.log("المبلغ يجب أن يكون أكبر من صفر");
            return;
        }
        if (amount > this.balance) {
            console.log("رصيد غير كافي للتحويل");
            return;
        }
        this.balance -= amount;
        console.log(`تم تحويل ${amount} جنيه إلى ${recipientPhone}. الرصيد الحالي: ${this.balance} جنيه`);
    }
    getBalance() {
        return this.balance;
    }
}
// check
const myWallet = new VodafoneCash("01012345678");
myWallet.deposit(100);
myWallet.withdraw(50);
myWallet.withdraw(100);
myWallet.sendMoney(20, "01098765432");
console.log(`الرصيد الحالي: ${myWallet.getBalance()} جنيه`);
// 2. إنشاء كلاسات تطبّق الـ Interface
class CreditCardPayment {
    pay(amount) {
        console.log(` تم دفع ${amount} جنيه باستخدام البطاقة الائتمانية.`);
    }
}
class VodafoneCashPayment {
    pay(amount) {
        console.log(` تم دفع ${amount} جنيه من خلال محفظة فودافون كاش.`);
    }
}
class PayPalPayment {
    pay(amount) {
        console.log(` تم دفع ${amount} جنيه عبر PayPal.`);
    }
}
function processPayment(method, amount) {
    method.pay(amount);
}
// check
const payment1 = new CreditCardPayment();
const payment2 = new VodafoneCashPayment();
const payment3 = new PayPalPayment();
processPayment(payment1, 100);
processPayment(payment2, 100);
processPayment(payment3, 100);
// task-5 Abstract Class
class Shape {
    printInfo() {
        console.log(`Area: ${this.getArea().toFixed(2)}`);
        console.log(`Perimeter: ${this.getPerimeter().toFixed(2)}`);
    }
}
// 2. Circle
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
// 3. Rectangle
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
// check
const circle = new Circle(5);
console.log(" circle radius = 5:");
circle.printInfo();
const rectangle = new Rectangle(4, 6);
console.log("\n rectangle width = 4, height = 6:");
rectangle.printInfo();
// error
// const shape = new Shape();
// task-6 Generics
class Box {
    content = null;
    getContent() {
        return this.content;
    }
    setContent(newContent) {
        this.content = newContent;
    }
    isEmpty() {
        return this.content === null;
    }
}
function printBoxContent(box) {
    if (box.isEmpty()) {
        console.log(" الصندوق فارغ");
    }
    else {
        console.log(" محتوى الصندوق:", box.getContent());
    }
}
// check
const textBox = new Box();
textBox.setContent("مرحبًا");
printBoxContent(textBox);
const numberBox = new Box();
numberBox.setContent(42);
printBoxContent(numberBox);
const objectBox = new Box();
objectBox.setContent({ name: "أحمد" });
printBoxContent(objectBox);
// error
// numberBox.setContent("نص"); // ❌ خطأ: Argument of type 'string' is not assignable to parameter of type 'number'.
