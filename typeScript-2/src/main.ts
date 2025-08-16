// task-1
type Product = {
  name: string;
  price: number;
  quantity: number;
};

function printProduct(product: Product) {
  console.log(
    `product: ${product.name}، price: ${product.price}، quantity: ${product.quantity}`
  );
}

printProduct({ name: "لابتوب", price: 2500, quantity: 5 });

// task-2
type Point = readonly [number, number];

function distanceFromOrigin(point: Point): number {
  const [x, y] = point;
  return Math.sqrt(x ** 2 + y ** 2);
}

console.log(distanceFromOrigin([3, 4] as Point));

const p: Point = [3, 4];
// p[0] = 5; error

// task-3
type User = {
  readonly id: number;
  readonly name: string;
  readonly email: string;
};

function printUser(user: User) {
  console.log(`user: ${user.name}، email: ${user.email}، id: ${user.id}`);
}

const user: User = { id: 1, name: "Ahmed", email: "ahmed@example.com" };
printUser(user);

// user.name = "محمد"; error.

// task-4
function logMessage(message: string): void {
  console.log(message);
}

function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

function infiniteLoop(): never {
  while (true) {}
}

logMessage("Hello World");

// throwError("error!");

// infiniteLoop();

// task-5
enum OrderStatus {
  Pending = "قيد الانتظار",
  Processing = "قيد المعالجة",
  Shipped = "تم الشحن",
  Delivered = "تم التوصيل",
  Cancelled = "ملغي",
}

function updateOrderStatus(orderId: number, status: OrderStatus) {
  console.log(`تم تحديث الطلب ${orderId} إلى الحالة: ${status}`);
}

updateOrderStatus(101, OrderStatus.Shipped);

// task-6
// 1. تعريف نوع employee basic
type EmployeeBasic = {
  id: number;
  name: string;
};

// 2. تعريف نوع employee contact
type EmployeeContact = {
  email: string;
  phone: string;
};

// 3. إنشاء نوع full employee باستخدام intersection
type FullEmployee = EmployeeBasic & EmployeeContact;

// 4. إنشاء دالة الطباعة جميع معلومات الموظف
function printEmployee(employee: FullEmployee) {
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
// printEmployee({ id: 2, name: "محمد" }); error

// task-1 Object & Intersection Types
// هيشته عشان ميتعارضش مع اول example
// // 1. تعريف الـ Interface باسم Product
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   category?: string;
// }

// // 2. إنشاء دالة لإضافة منتج
// function addProduct(product: Product): void {
//   console.log("تمت إضافة المنتج:", product);
// }

// // 3. إنشاء دالة للحصول على معلومات المنتج
// function getProductInfo(product: Product): string {
//   return `المنتج: ${product.name}
// المعرف: ${product.id}
// السعر: ${product.price}
// التصنيف: ${product.category ?? "غير محدد"}`;
// }

// // 4. اختبار صحيح
// addProduct({ id: 1, name: "هاتف", price: 1500, category: "إلكترونيات" });
// console.log(getProductInfo({ id: 1, name: "هاتف", price: 1500, category: "إلكترونيات" }));

// // 5. اختبار خاطئ (هيعطي خطأ في TypeScript - ناقص id و name)
// // addProduct({ price: 500 });

// task-2  Extend Types
interface Employee {
  id: number;
  name: string;
  department: string;
}
interface Manager extends Employee {
  teamSize: number;
  reportsTo?: string;
}
function printManagerInfo(manager: Manager): void {
  console.log(`المعرف: ${manager.id}`);
  console.log(`الاسم: ${manager.name}`);
  console.log(`القسم: ${manager.department}`);
  console.log(`حجم الفريق: ${manager.teamSize}`);
  console.log(`يرفع التقارير إلى: ${manager.reportsTo ?? "غير محدد"}`);
}
const manager1: Manager = {
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
  private balance: number;
  private phoneNumber: string;

  constructor(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
    this.balance = 0;
  }

  public deposit(amount: number): void {
    if (amount <= 0) {
      console.log("المبلغ يجب أن يكون أكبر من صفر");
      return;
    }
    this.balance += amount;
    console.log(`تم إيداع ${amount} جنيه الرصيد الحالي: ${this.balance} جنيه`);
  }

  public withdraw(amount: number): void {
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

  public sendMoney(amount: number, recipientPhone: string): void {
    if (amount <= 0) {
      console.log("المبلغ يجب أن يكون أكبر من صفر");
      return;
    }
    if (amount > this.balance) {
      console.log("رصيد غير كافي للتحويل");
      return;
    }
    this.balance -= amount;
    console.log(
      `تم تحويل ${amount} جنيه إلى ${recipientPhone}. الرصيد الحالي: ${this.balance} جنيه`
    );
  }

  public getBalance(): number {
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

// محاولة تعديل الرصيد مباشرة ❌
// myWallet.balance = 10000; // خطأ: Property 'balance' is private

// task-4 Polymorphism
// 1. تعريف الـ Interface
interface PaymentMethod {
  pay(amount: number): void;
}

// 2. إنشاء كلاسات تطبّق الـ Interface

class CreditCardPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(` تم دفع ${amount} جنيه باستخدام البطاقة الائتمانية.`);
  }
}

class VodafoneCashPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(` تم دفع ${amount} جنيه من خلال محفظة فودافون كاش.`);
  }
}

class PayPalPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(` تم دفع ${amount} جنيه عبر PayPal.`);
  }
}

function processPayment(method: PaymentMethod, amount: number): void {
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
abstract class Shape {
  abstract getArea(): number;
  abstract getPerimeter(): number;

  printInfo(): void {
    console.log(`Area: ${this.getArea().toFixed(2)}`);
    console.log(`Perimeter: ${this.getPerimeter().toFixed(2)}`);
  }
}

// 2. Circle
class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// 3. Rectangle
class Rectangle extends Shape {
  constructor(
    private width: number,
    private height: number
  ) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
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
class Box<T> {
  private content: T | null = null;

  getContent(): T | null {
    return this.content;
  }

  setContent(newContent: T): void {
    this.content = newContent;
  }

  isEmpty(): boolean {
    return this.content === null;
  }
}

function printBoxContent<T>(box: Box<T>): void {
  if (box.isEmpty()) {
    console.log(" الصندوق فارغ");
  } else {
    console.log(" محتوى الصندوق:", box.getContent());
  }
}

// check
const textBox = new Box<string>();
textBox.setContent("مرحبًا");
printBoxContent(textBox);

const numberBox = new Box<number>();
numberBox.setContent(42);
printBoxContent(numberBox);

type Person = { name: string };
const objectBox = new Box<Person>();
objectBox.setContent({ name: "أحمد" });
printBoxContent(objectBox);
// error
// numberBox.setContent("نص"); // ❌ خطأ: Argument of type 'string' is not assignable to parameter of type 'number'.
