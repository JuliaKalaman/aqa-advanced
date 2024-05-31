// Завдання 5
// Створіть масив об'єктів users, де об'єкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
	{
		name: 'Kelli',
		email: 'kelli@gmail.com',
		age: 25,
	},
	{
		name: 'Elly',
		email: 'elly@gmail.com',
		age: 26,
	},
	{
		name: 'Vivi',
		email: 'vivi@gmail.com',
		age: 27,
	},
];

for (let usersDate of users) {
	console.log(`name: ${usersDate.name}, email: ${usersDate.email}, age: ${usersDate.age}`);
	let { name: userName, email: userEmail, age: userAge } = usersDate;
	console.log(userName, userEmail, userAge);
}
