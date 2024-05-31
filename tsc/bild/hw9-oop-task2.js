import { Book } from './hw9-oop-task1.js';
export class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year);
        this.fileFormat = fileFormat;
    }
    set bookFormat(fileFormat) {
        if (fileFormat === '')
            throw new Error('The file format cannot be an empty string');
        this.fileFormat = fileFormat;
    }
    get bookFormat() {
        return this.fileFormat;
    }
    printInfo() {
        console.log(`Book: "${this.name}", author: ${this.author}, publication year: ${this.year}, file format: ${this.fileFormat}`);
    }
    static newBook(info, fileFormat) {
        let newBook = new EBook(info.bookName, info.authorName, info.publishedYear, fileFormat);
        return newBook;
    }
}
//# sourceMappingURL=hw9-oop-task2.js.map