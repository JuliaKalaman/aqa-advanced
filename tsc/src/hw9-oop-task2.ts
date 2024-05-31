import { Book } from './hw9-oop-task1.js';
export class EBook extends Book {
    protected fileFormat: string;
    constructor(name: string, author: string, year: number, fileFormat: string) {
        super(name, author, year);
        this.fileFormat = fileFormat;
    }

    set bookFormat(fileFormat: string) {
        if (fileFormat === '') throw new Error('The file format cannot be an empty string')
        this.fileFormat = fileFormat
    }

    get bookFormat() {
        return this.fileFormat;
    }

    public printInfo() {
        console.log(`Book: "${this.name}", author: ${this.author}, publication year: ${this.year}, file format: ${this.fileFormat}`)
    }

    static newBook(info: Book, fileFormat: string): EBook {
        let newBook = new EBook(info.bookName, info.authorName, info.publishedYear, fileFormat)
        return newBook
    }
}