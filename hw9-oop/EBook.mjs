// 2. В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. Додайте до класу EBook нову властивість, наприклад, "формат файлу". Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo

import { Book } from './Book.mjs';

class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year)
        this.fileFormat = fileFormat
    }

    printInfo() {
        console.log(`Book: "${this.name}", author: ${this.author}, publication year: ${this.year}, file format: ${this.fileFormat}`)
    }
}

let book3 = new EBook('We the Living', 'Ayn Rand', 1936, 'epub');

book3.printInfo();