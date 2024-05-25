// 1. Створіть клас "Книга"(Book) з властивостями, такими як "назва", "автор" і "рік видання".
// Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo.
// Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.

export class Book {
    constructor(name, author, year) {
        this.name = name,
            this.author = author,
            this.year = year
    }
    printInfo() {
        console.log(`Book: "${this.name}", author: ${this.author}, publication year: ${this.year}`)
    }

};

let book1 = new Book('The Help', 'Kathryn Stockett', 2009);
let book2 = new Book('Nineteen Eighty-Four', 'George Orwell', 1949);

book1.printInfo();
book2.printInfo();