//estructura de control 


//if... else

/*si se cumple la condicion
realizar la accion
si no se cumple condicion
hacer otra Cosa*/



// if ( num % 2 === 0){
//      //accion
//     console.log("el numero es par")
// }else{
//     //otra accion
//     console.warn("el numero no es par")
// }

// let num= 1005

// if( num === 10){
//  console.log("el numero es igual a 10")
// }else if ( num > 10){
//  console.log("el numero es mayor que 10")
// }else{
//     console.log("el numero es menor que 10")
// }

// let num= parseInt(prompt("ingrese un numero"))

// if(isNaN(num)){
//     console.error("ingrese un numero")
    
// }else{
//     if( num === 10){
//          console.log("el numero es igual a 10")
//         }else if ( num > 10){
//          console.log("el numero es mayor que 10")
//         }else{
//             console.log("el numero es menor que 10")
//         }
// }

// fiesta
//solo puede entrar mayor de edad >=18
//si no es mayor de edad tiene que ir acompañado de un tutor

let edad= 18
let tutor = false

// if(edad >= 18){
//     console.log("bienvenido a la fiesta!"
//     )

// }else if (tutor === true){
//     console.log("bienvenido a la fiesta!! no se separe del tutor")

// }else {
//     console.log ("sin documento no pasas flaco")
// }

if (edad < 18 && tutor === false) {
    console.error("sin documento no pasa flaco")
} else if (edad >= 18 || tutor === true){
    console.log("pasa pa! disfruta, esto es de ustedes")
}