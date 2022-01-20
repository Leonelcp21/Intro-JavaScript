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

// function calculadora(num1, num2, operacion) {
//   if (!num1 || !num2) {
//     return "falta el valor";
//   }
//   switch (operacion) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num1 / num2;
//     default:
//         return "operacion invalida"
//   }
// }

function calculadora(num1=1, num2=1, operacion="+") {
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

function cubo(num){
    return Math.pow(num,3)
}

let numeros= [23,45,2,67]

function converCubo (array){

let numerosALCubo=[]

//for..of
for (let numero of array){

    numerosALCubo.push( cubo(numero))

}
 return numerosALCubo;
}

//funciones anonimas

const saludar = function () {
  console.log("lopiiiii");
};
