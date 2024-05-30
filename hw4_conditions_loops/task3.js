// Завдання 3: Генерація таблиці множення

// Створіть програму, яка генерує таблицю множення для обраного числа за допомогою кожного з циклів for, while .

// Виберіть число, для якого потрібно згенерувати таблицю множення.
// Використовуючи цикл for, створіть таблицю множення для обраного числа від 1 до 10. Виведіть результат в консоль.
// Використовуючи цикл while створіть аналогічну таблицю множення та виведіть її в консоль.

console.log('Виведення за допомогою for:');

const number = 5

for (let i = 1; i <= 10; i++) {
	let result = number * i;
	console.log(`${number} x ${i} = ${result}`);
}

console.log('\n Виведення за допомогою while:');

let j = 1;
while (j <= 10) {
	let result = number * j;
	console.log(`${number} x ${j} = ${result}`);
	j++;
}
