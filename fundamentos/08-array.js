// array o arreglos
// lista

//mutacion de un arreglo
//metodos o funciones

let alumnos=["Pablo", "Fabrizio", "LaUro", "Gabriel"]
let alumnas=["Gabriela" , "Rocio"]

// acceder a un elemento dentro del arreglo
alumnos [2]
//obtener ultimo elemento
alumnos[alumnos.length-1]
//concatenar todos los elementos en un string
alumnos.join()


//iterar

for(let i=0; i < alumnos.length; i++){
    console.log(`Hola soy ${alumnos[i]}`)
}


//agregar elementos
alumnos.push("Jorge")
//eliminar elemento
alumnos.pop()
//agregar un elemento al pricnipio
alumnos.unshift("Walter")
//eliminar elemento del principio
alumnos.shift()

//encontrar el indice de un elemento
console.log(alumnos.indexOf("LaUra"))

//Saber si existe un elemento
console.log(alumnos.includes("Gabriela"))
//Eliminar un elemento o varios mediante su posicion
let pos=1 
alumnos.splice(pos, 1)

//Eliminar varios elementos a partir de una posicion
let alumnosEliminados = alumnos.splice(0,3)

//reemplazar valores

let alumnosRemplazados = alumnos.splice(0,2, "Leonel", "Pedazoo")

//concatenar 2 arrays

let grupete= alumnos.concat(alumnas)
// invierte orden

grupete.reverse()
