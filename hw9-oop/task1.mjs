import { Book } from './Book.mjs';
import { EBook } from './EBook.mjs';

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
console.log('The oldest book is:', Book.showOldestBook(library))

// Task 5
let book4 = new Book('Invisible Monsters', 'Chuck Palahniuk', 1999)
let format = 'epub'
console.log(EBook.newBook(book4, format))