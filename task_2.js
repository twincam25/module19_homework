  // Напишите функцию, которая принимает в качестве аргументов строку и объект, 
  // а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
  // Функция должна возвращать true или false.

function ifThereIs(a, obj) {
    console.log(a in obj);
}

const obj = {
    name: 'Bilbo',
    surname: 'Baggins'
};

ifThereIs('name', obj);