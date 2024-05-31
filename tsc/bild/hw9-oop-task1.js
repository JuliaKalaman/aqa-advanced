export class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }
    set bookName(name) {
        if (name === '')
            throw new Error('The book name cannot be an empty string');
        this.name = name;
    }
    set authorName(author) {
        if (author === '')
            throw new Error('Author name cannot be an empty string');
        this.author = author;
    }
    set publishedYear(year) {
        if (typeof year !== 'number' || isNaN(year))
            throw new Error('The year the book was written must be a number');
        this.year = year;
    }
    get bookName() {
        return this.name;
    }
    get authorName() {
        return this.author;
    }
    get publishedYear() {
        return this.year;
    }
    printInfo() {
        console.log(`Book: "${this.name}", author: ${this.author}, publication year: ${this.year}`);
    }
    static showOldestBook(array) {
        let oldestBook = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i].year < oldestBook.year) {
                oldestBook = array[i];
            }
        }
        return oldestBook.name;
    }
    ;
}
//# sourceMappingURL=hw9-oop-task1.js.map