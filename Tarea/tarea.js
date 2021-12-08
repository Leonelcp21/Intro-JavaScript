let numero1=25
let numero2=20

console.log(numero1 + numero2)
console.log(`la resta entre ${numero1} y ${numero2} es igual a ${numero1 - numero2}`)
console.log(numero1 * numero2)
console.log(numero1 / numero2)
console.log(numero1 >= numero2)
console.log(numero1 != numero2)

//tarea 2

let nombre= "Diego"

console.log(nombre.toUpperCase())
console.log(nombre.length)
console.log(nombre.toLowerCase())
console.log(nombre.charAt(0))

// let nombre1= prompt("Ingrese un nombre")
// nombre1= nombre1.charAt(0).toUpperCase()+ nombre1.substr(1,nombre1.length-1)
// console.log(nombre1)

// let num1= prompt("Ingrese un numero")
// let num2= prompt("Ingrese otro numero")
// let num3= prompt("Ingrese otro otro numero")

// console.log(`El numero mayor es ${Math.max (num1, num2, num3)} `)
// console.log(`El numero menor es ${Math.min(num1, num2, num3)}`)

// console.log(`La raiz cuadrada del segundo ${Math.sqrt(num2)}`)

//tarea 3

let number1= parseInt(prompt("Ingrese un numero"))
let number2= parseInt(prompt("Ingrese un numero"))

if (number1>number2){
console.log(number1+number2)
}else if(number1<number2) {
console.log(number2-number1)
}else {
    console.log(number1*number2)
}
