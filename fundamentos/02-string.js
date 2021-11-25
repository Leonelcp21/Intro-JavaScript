let nombre="Eugenio"
let apellido="Gonzalez"
let frase = "             bienvenido a la clase    "

//concatenar
console.log (nombre, apellido)
console.log (nombre + " " + apellido)


//template string

console.log (`mi nombre es ${nombre} ${apellido}`)

//metodos de los string

console.log(nombre.toUpperCase())
console.log(nombre.toLowerCase())
console.log(apellido.length)
console.log(frase.length)
console.log(apellido.charAt(7))
console.log(nombre.charAt(nombre.length - 1))
console.log(apellido.substr(0,4))
console.log(frase.trim())