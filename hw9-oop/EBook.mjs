// 2. В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. Додайте до класу EBook нову властивість, наприклад, "формат файлу". Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo

// 3. Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook.
// В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.

// 5. Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як рядок **** та повертати екземпляр класу EBook

import { Book } from './Book.mjs';

export class EBook extends Book {
	constructor(name, author, year, fileFormat) {
		super(name, author, year);
		this._fileFormat = fileFormat;
	}

	set fileFormat(fileFormat) {
		if (fileFormat === '') throw new Error('The file format cannot be an empty string');
		this._fileFormat = fileFormat;
	}

	get fileFormat() {
		return this._fileFormat;
	}

	printInfo() {
		console.log(
			`Book: "${this._name}", author: ${this._author}, publication year: ${this._year}, file format: ${this._fileFormat}`,
		);
	}

	static newBook(info, fileFormat) {
		let newBook = new EBook(info.name, info.author, info.year, fileFormat);
		return newBook;
	}
}
