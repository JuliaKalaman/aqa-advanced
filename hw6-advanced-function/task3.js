// Завдання 3
// Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає, як результат виконання, число, отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі,
// - якщо denominator дорівнює 0
// - або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.

function divide(numerator, denominator) {
    if (denominator === 0 || !Number.isFinite(numerator) || !Number.isFinite(denominator)) {
        throw new Error('The operands contain an error, the division operation is not possible');
    } else {
        let result = numerator / denominator;
        return console.log(result)
    }
};

try {
    divide(25, 4.25);
} catch (e) {
    console.error(e);
} finally {
    console.log('Робота завершена')
};


try {
    divide(false, 4);
} catch (e) {
    console.error(e);
} finally {
    console.log('Робота завершена')
};


try {
    divide(2, 'a');
} catch (e) {
    console.error(e);
} finally {
    console.log('Робота завершена')
};


try {
    divide(12, 0);
} catch (e) {
    console.error(e);
} finally {
    console.log('Робота завершена')
};
