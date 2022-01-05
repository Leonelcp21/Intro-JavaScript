//funciones
//tarea

//funciones declarativas

function mifuncion() {
  console.log("hola mundo");
}

let num1 = 34;
let num2 = 56;

function sumar(x, y) {
  console.log(x + y);
}

function calculadora(num1, num2, operacion) {
  if (!num1 || !num2) {
    return "falta el valor";
  }
  switch (operacion) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
        return "operacion invalida"
  }
}

//funciones anonimas

const saludar = function () {
  console.log("lopiiiii");
};
