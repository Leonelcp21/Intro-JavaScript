//estructura condicional
//switch

let numero = 10;

switch (numero) {
  case 10:
    console.log("el numero es 10");
    break;
  case 25:
    console.log("el numero es 25");
    break;

  default:
    console.log("el numero es de otro valor");
    break;
}

//----------------------------

let diaNumero = new Date().getDay();
switch (diaNumero) {
  case 0:
    console.log("hoy es domingo");

    break;
  case 1:
    console.log("hoy es lunes");

    break;
  case 2:
    console.log("hoy es martes");

    break;

  case 3:
    console.log("hoy es miercoles");

    break;
  case 4:
    console.log("hoy es jueves");

    break;
  case 5:
    console.log("hoy es viernes");

    break;
  default:
    console.log("hoy es sabado");
    break;
}

//---------
let num = 12;

switch (true) {
  case num === 10:
    console.log("el numero es igual a 10");
    break;
  case num % 2 === 0:
    console.log("el numero es par");
    break;
  default:
    console.log("me rindo");

    break;
}

let comando = prompt("Ingrese un comando (Alerta , consola, print)");

switch (comando) {
  case "alerta":
    alert("Usando switch con un alert");

    break;
  case "consola":
    console.log("usando switch en la consola");

    break;

  case "print":
    document.write("usando switch en el navegador");

    break;

  default:
    console.error("comando inexistente, intente nuevamente");
    break;
}
