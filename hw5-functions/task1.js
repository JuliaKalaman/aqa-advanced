// Завдання 1
// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

// 1. function declaration
function getRectangleArea1(width, height) {
	let square = width * height;
	return square;
}
console.log(getRectangleArea1(5, 10));

// 2. function expression
let getRectangleArea2 = function (width, height) {
	return width * height;
};
console.log(getRectangleArea2(15, 20));

// 3. arrow function
let getRectangleArea3 = (width, height) => width * height;
console.log(getRectangleArea3(25, 50));
