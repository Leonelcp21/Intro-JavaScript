// Crear una aplicación de changuito de compras donde se ingresen productos como elementos en un array
// Las tareas que debe hacer son las siguientes:
// Agregar producto al carrito
// Listar los productos del carrito  ---
// Buscar un producto en el carrito
// Filtrar productos según una palabra
// Eliminar producto del carrito


let carrito =["BANANA" , "BICICLETA" , "HORNO" , "PARLANTES"]

function ListarProductos () {
    
    for (let i = 0; i < carrito.length; i++) {
      
        console.log(`${i +1} - ${carrito[i]}`)
    }
}

ListarProductos(

)