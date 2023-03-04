
  // Напишите функцию, которая создает пустой объект, но без прототипа.

function objectWithoutProto() {
    const emptyObj = Object.create(null)
    console.log(emptyObj);
}

objectWithoutProto();