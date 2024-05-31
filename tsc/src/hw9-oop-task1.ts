export class Book {
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