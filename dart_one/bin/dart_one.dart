// Question 1
// void checkNumber(int number) {
//   if (number > 0) {
//     print("The number is Positive");
//   } else if (number < 0) {
//     print("The number is Negative");
//   } else {
//     print("The number is Zero");
//   }
// }

// void main() {
//   checkNumber(10);
//   checkNumber(-5);
//   checkNumber(0);
// }
// Question 1-2
// void checkEvenOdd(int number) {
//   if (number % 2 == 0) {
//     print("$number is Even");
//   } else {
//     print("$number is Odd");
//   }
// }

// void main() {
//   checkEvenOdd(4);
//   checkEvenOdd(7);
// }
// question 1-3
// void checkGrade(int grade) {
//   if (grade >= 90) {
//     print("Excellent");
//   } else if (grade >= 75) {
//     print("Good");
//   } else if (grade >= 50) {
//     print("Average");
//   } else {
//     print("Fail");
//   }
// }

// void main() {
//   checkGrade(95);
//   checkGrade(80);
//   checkGrade(60);
//   checkGrade(40);
// }

// question 2
// void printNumbers() {
//   for (int i = 1; i <= 10; i++) {
//     print(i);
//   }
// }

// void main() {
//   printNumbers();
// }
// question 2-2
// void sumNumbers(int n) {
//   int sum = 0;
//   int i = 1;

//   while (i <= n) {
//     sum += i;
//     i++;
//   }

//   print("The sum from 1 to $n is: $sum");
// }

// void main() {
//   sumNumbers(5);
//   sumNumbers(10);
// }
// question 2-3
// void multiplicationTable(int number) {
//   for (int i = 1; i <= 10; i++) {
//     print("$number × $i = ${number * i}");
//   }
// }

// void main() {
//   multiplicationTable(5);
// }

// Question 3 Functions
// void greetUser(String name) {
//   print("Hello, $name!");
// }

// void main() {
//   greetUser("Ahmed");
// }
// question 3-2
// double average(double num1, double num2) {
//   return (num1 + num2) / 2;
// }

// void main() {
//   print(average(10, 20));   // 15.0
// }
// Question 3-3
// int countEvenNumbers(List<int> numbers) {
//   int count = 0;
//   for (int num in numbers) {
//     if (num % 2 == 0) {
//       count++;
//     }
//   }
//   return count;
// }

// void main() {
//   print(countEvenNumbers([1, 2, 3, 4, 5, 6]));
// }

// Question 4 Recursion
// int factorial(int n) {
//   if (n == 0 || n == 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// void main() {
//   print(factorial(5));
// }

// question 4-2
// int sumToN(int n) {
//   if (n == 0) {
//     return 0;
//   } else {
//     return n + sumToN(n - 1);
//   }
// }

// void main() {
//   print(sumToN(5));
//   print(sumToN(10));
// }
