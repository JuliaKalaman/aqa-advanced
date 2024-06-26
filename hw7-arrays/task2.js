// Завдання 2: Копіювання з мутацією
// Вам потрібно створити програму, яка мутує значення кожного елемента в масиві за допомогою методу map.
// Ось кроки, які вам потрібно виконати:
// Створіть початковий масив, наприклад, [1, 2, 3, 4, 5].
// Створіть новий масив, де кожне значення - це елемент вихідного масиву, помножений на значення індексу відповідного елемента початкового масиву.
// Виведіть новий масив на консоль.

const firstArray = [1, 2, 3, 4, 5];
const secondArray = firstArray.map((num, index) => num * index);
console.log(secondArray);

// імплементування .map() через .reduce()
const secondArray2 = firstArray.reduce((accu, curr, index) => {
	accu.push(curr * index);
	return accu;
}, []);

console.log(secondArray2);
