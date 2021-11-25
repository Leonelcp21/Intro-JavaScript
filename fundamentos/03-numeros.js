//redondear un numero mas bajo
console.log(Math.floor(45.89))

//redondear numero arriba
console.log(Math.round(45.89))

//obtener el maximo de una lista de numeros

console.log(`El numero maximo es:${ Math.max(56.5,45,90,5)}`)

//obtener el minimo
console.log(`El numero maximo es:${ Math.min(56.5,45,90,5)}`)

let numero= "67.984316"
console.log(numero)
numero = parseInt(numero)

let decimal="456.1354"
console.log(parseFloat(decimal))

let base = numero
let exponente = 3

console.log(`el numero ${base} elevado a la potencia ${exponente} es de ${Math.pow(base,exponente)}`)

console.log(Math.sqrt(64))

console.log(Math.round (Math.random() *100))

decimal=parseFloat(decimal)

console.log(Math.round(decimal * 100) / 100)

//console.log(decimal.toFixed(2))
let decimalstring = parseFloat(decimal.toFixed(3))

console.log(decimalstring)