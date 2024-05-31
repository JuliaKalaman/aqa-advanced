// Завдання 4: Відбір парних чисел
// Вам потрібно створити програму, яка відфільтровує парні числа з масиву.
// Ось кроки, які вам потрібно виконати:
// Створіть масив чисел, наприклад, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
// Cтворіть новий масив, який міститиме лише парні числа.
// Виведіть отриманий масив парних чисел на консоль.

const someArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArry = someArry.filter((el) => el % 2 === 0);
console.log(evenArry);

// імплементування .filter() через .reduce()
const evenArry2 = someArry.reduce((accumulator, currentValue) => {
	if (currentValue % 2 === 0) {
		accumulator.push(currentValue);
	}
	return accumulator;
}, []);
console.log(evenArry2);
