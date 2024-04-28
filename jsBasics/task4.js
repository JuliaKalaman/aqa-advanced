// Завдання 4: Обчислення площі та об'єму

// Завдання 4.1
// π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа
// 1. Створіть змінну radius і присвойте їй числове значення радіуса кола.
// 2. Обчисліть площу кола за формулою π * radius^2 і виведіть результат.

// Завдання 4.2
// 1. Створіть змінну length і присвойте їй числове значення довжини прямокутника.
// 2. Створіть змінну width і присвойте їй числове значення ширини прямокутника.
// 3. Обчисліть площу прямокутника за формулою length * width і виведіть результат.

// Завдання 4.3
// 1. Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// 2. Створіть змінну height і присвойте їй числове значення висоти циліндра.
// 3. Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.

// Округліть кожне отримане значення до 2 значень після крапки


//Рішення 4.1
let radius = 8;
let circleArea = Math.PI * Math.pow(radius, 2);
console.log(Number(circleArea.toFixed(2))) //перший спосіб: toFixed() можна задати потрібну кількість знаків після коми, але повертає рядок, тому треба приводити назад до числа


//Рішення 4.2
let length = 32.19;
let width = 10.13;
let rectangleArea = length * width;
console.log(Math.round(rectangleArea * 100) / 100) //другий спосіб

//Рішення 4.3
let radiusCylinder = 5;
let heightCylinder = 12;
let volumeCylinder = Math.PI * Math.pow(radiusCylinder, 2) * heightCylinder;
console.log(Math.round(volumeCylinder * 100) / 100) 