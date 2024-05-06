// Завдання 2
// Створіть функцію, яка приймає один параметр: age.
// Усередині функції перевірте, чи age більше або рівне 18.
// Якщо age відповідає умові, поверніть true, інакше поверніть false.
// Викличте вашу функцію з аргументами 25 і 15, і виведіть результат (чи є особа дорослою) в консоль для кожного випадку.


// Варіант 1
let checkAge1 = age => { age >= 18 ? console.log(true) : console.log(false) }
checkAge1(25)
checkAge1(15)

// Варіант 2
let checkAge2 = age => {
    // if (age <= 0 || age >= 123) {
    //     return 'The input data contains an error. Check that the age is correct.'
    // }
    // if (age < 18) {
    //     return false
    // }
    // if (age >= 18) {
    //     return true
    // }
    return age >= 18
}

console.log(`Is the person an adult? - ${checkAge2(25)}`)
console.log(`Is the person an adult? - ${checkAge2(15)}`)