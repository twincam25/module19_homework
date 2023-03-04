// Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения 
// только собственных свойств. Данная функция не должна возвращать значение.


function all(obj) {
    for (let key in obj) {
        console.log(key);
        console.log(obj[key]);
    }
}

const obj = {
    name: 'Bilbo',
    surname: 'Baggins'
};

all(obj);