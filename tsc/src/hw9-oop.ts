class Book {
    protected name: string
    protected author: string
    protected year: number
    constructor(name: string, author: string, year: number) {
        this.name = name
        this.author = author
        this.year = year
    }

    set bookName(name: string) {
        if (name === '') throw new Error('The book name cannot be an empty string')
        this.name = name
    }

    set authorName(author: string) {
        if (author === '') throw new Error('Author name cannot be an empty string')
        this.author = author
    }

    set publishedYear(year: number) {
        if (typeof year !== 'number' || isNaN(year)) throw new Error('The year the book was written must be a number')
        this.year = year
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

    public printInfo() {
        console.log(`Book: "${this.name}", author: ${this.author}, publication year: ${this.year}`)
    }

    static showOldestBook(array: Book[]): string {
        let oldestBook = array[0];

        for (let i = 1; i < array.length; i++) {
            if (array[i].year < oldestBook.year) {
                oldestBook = array[i];
            }
        }

        return oldestBook.name;
    };
}


class EBook extends Book {
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

let book1 = new Book('Book name 1', 'Some author 1', 1000);
book1.bookName = 'The Help';
book1.authorName = 'Kathryn Stockett';
book1.publishedYear = 2009;
book1.printInfo();
console.log(book1.bookName);
console.log(book1.authorName);
console.log(book1.publishedYear);

let book2 = new EBook('Book name 2', 'Some author 2', 2000, 'some');
book2.bookName = 'We the Living';
book2.authorName = 'Ayn Rand';
book2.publishedYear = 1936;
book2.bookFormat = 'epub';
book2.printInfo();
console.log(book2.bookName);
console.log(book2.authorName);
console.log(book2.publishedYear);
console.log(book2.bookFormat);

// Task 4
let book3 = new EBook('Nineteen Eighty-Four', 'George Orwell', 1949, 'fb2')
let library = [book1, book2, book3];
console.log(`The oldest book is: "${Book.showOldestBook(library)}"`)

// Task 5
let book4 = new Book('Invisible Monsters', 'Charles Michael Palahniuk', 1999)
let format = 'epub'
console.log(EBook.newBook(book4, format))