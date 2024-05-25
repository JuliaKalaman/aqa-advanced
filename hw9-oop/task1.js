// 3. Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. 
// В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.

// 4. Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання. Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)

// 5. Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як рядок **** та повертати екземпляр класу EBook


class Book {
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

        return oldestBook._name;
    };
}


class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year);
        this._fileFormat = fileFormat;
    }

    set fileFormat(fileFormat) {
        if (fileFormat === '') throw new Error('The file format cannot be an empty string')
        this._fileFormat = fileFormat
    }

    get fileFormat() {
        return this._fileFormat;
    }

    printInfo() {
        console.log(`Book: "${this._name}", author: ${this._author}, publication year: ${this._year}, file format: ${this._fileFormat}`)
    }

    static newBook(info, fileFormat) {
        let newBook = new EBook(info.name, info.author, info.year, fileFormat)
        return newBook
    }
}

let book1 = new Book('Book name 1', 'Some author 1', 1000);
book1.name = 'The Help';
book1.author = 'Kathryn Stockett';
book1.year = 2009;
book1.printInfo();
console.log(book1.name);
console.log(book1.author);
console.log(book1.year);

let book2 = new EBook('Book name 2', 'Some author 2', 2000, 'some');
book2.name = 'We the Living';
book2.author = 'Ayn Rand';
book2.year = 1936;
book2.fileFormat = 'epub';
book2.printInfo();
console.log(book2.name);
console.log(book2.author);
console.log(book2.year);
console.log(book2.fileFormat);

// Task 4
let book3 = new EBook('Nineteen Eighty-Four', 'George Orwell', 1949, 'fb2')
let library = [book1, book2, book3];
console.log(`The oldest book is: "${Book.showOldestBook(library)}"`)

// Task 5
let book4 = new Book('Invisible Monsters', 'Chuck Palahniuk', 1999)
let format = 'epub'
console.log(EBook.newBook(book4, format))