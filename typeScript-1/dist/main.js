"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// task-1
const myName = "Ahmed";
let myAge = 25;
let learningTS = true;
console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Are you learning TypeScript?", learningTS);
// task-2
function processInput(input) {
    if (typeof input === "string") {
        return input.repeat(2);
    }
    else {
        return input * 2;
    }
}
console.log(processInput("Hello"));
console.log(processInput(7));
// task-3
let weekDays = [
    "saturday",
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
];
//  اليوم الثالث
console.log("day 3 is:", weekDays[2]);
// لو ضيفن رقم للمصفوفة هنا هيطلع error عشان انا محددها انها كسترينج
// weekDays.push(123);
weekDays.push("saturday");
console.log("weekDays:", weekDays);
// task-4
function greetUser(username, rank, lang = "ar", ...extraInfo) {
    let message;
    if (lang === "ar") {
        message = `مرحبًا ${rank ? rank + " " : ""}${username} (اللغة: ${lang})`;
    }
    else {
        message = `Welcome ${rank ? rank + " " : ""}${username} (lang: ${lang})`;
    }
    if (extraInfo.length > 0) {
        message += ` - extra: ${extraInfo.join(", ")}`;
    }
    return message;
}
console.log(greetUser("أحمد"));
console.log(greetUser("نورا", "مشرفة"));
console.log(greetUser("John", "Admin", "en", "active", "premium"));
function isPositivePoint(point) {
    return point[0] >= 0 && point[1] >= 0;
}
function calculateDistance(p1, p2) {
    if (!isPositivePoint(p1) || !isPositivePoint(p2)) {
        throw new Error("جميع الإحداثيات يجب أن تكون موجبة.");
    }
    const dx = p2[0] - p1[0];
    const dy = p2[1] - p1[1];
    return Math.sqrt(dx * dx + dy * dy);
}
const pointA = [0, 0];
const pointB = [3, 4];
console.log(`المسافة بين النقطتين: ${calculateDistance(pointA, pointB)}`);
const pointC = [-1, 5];
try {
    console.log(calculateDistance(pointA, pointC));
}
catch (error) {
    console.error(error);
}
// task-6
function sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Both arguments must be numbers.");
    }
    return a + b;
}
console.log(sum(5, 3));
const student = {
    name: "أحمد",
    grade: "الثاني",
    subjects: ["رياضيات", "علوم", "تاريخ"],
};
console.log(student);
// task-8
function calculateArea(width, height = width) {
    return width * height;
}
console.log(calculateArea(5));
console.log(calculateArea(5, 10));
