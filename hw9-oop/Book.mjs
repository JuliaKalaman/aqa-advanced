// 1. Створіть клас "Книга"(Book) з властивостями, такими як "назва", "автор" і "рік видання".
// Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo.
// Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.

// 3. Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. 
// В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.

// 4. Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання. Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)

export class Book {
    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    }

    set name(name) {
        if (name === '') throw new Error('The book name cannot be an empty string')
        this._name = name
    }

    set author(author) {
        if (author === '') throw new Error('Author name cannot be an empty string')
        this._author = author
    }

    set year(year) {
        if (typeof year !== 'number' || isNaN(year)) throw new Error('The year the book was written must be a number')
        this._year = year
    }

    get name() {
        return this._name;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    printInfo() {
        console.log(`Book: "${this._name}", author: ${this._author}, publication year: ${this._year}`)
    }

    static showOldestBook(array) {
        let oldestBook = array[0];

        for (let i = 1; i < array.length; i++) {
            if (array[i]._year < oldestBook._year) {
                oldestBook = array[i];
            }
        }

        return oldestBook;
    };
}