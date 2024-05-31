// Завдання 2
// 1.Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: число, представляє рік видання книги.
// 2.Деструктуризуйте назву та автора книги з об'єкта book.
// 3.Виведіть деструктуризовані змінні в консоль

const book = {
	title: 'Hard-boiled Wonderland and the End of the World',
	author: 'Murakami Haruki',
	year: 1985,
};

const { title: bookTitle } = book;
const { author: bookAuthor } = book;
console.log(bookTitle);
console.log(bookAuthor);
