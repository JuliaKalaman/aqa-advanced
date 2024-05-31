import { Book } from './hw9-oop-task1.js';
import { EBook } from './hw9-oop-task2.js';

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