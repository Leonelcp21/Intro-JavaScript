// for

for(let i = 0;i < 10;i++){

    console.log(i); 
    
        //acciones
    }
    
    //tarea
    //Ingresar la tabla que queremos realizar
    //mostrar por consola la tabla
    
    let tabla=parseInt(prompt("Ingrese el numero de la tabla a calcular"))
    
    if(isNaN(tabla)) {
        console.error("Debe enviar un numero, pezon")
    } else {
    
    for (let i=1; i<=10; i++){
    
        console.log(`${tabla} x ${i} = ${tabla * i}`) 
    }
    }