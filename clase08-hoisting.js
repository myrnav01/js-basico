//Ejemplo 1: Llamando la variable antes de declararla
console.log(miNombre);
var miNombre = "Diego"; //Esto genera undefined

//Ejemplo 2: Llamando la función y la variable antes de declararlas
hey();
function hey() {
    console.log("Hola " + miNombre2);
}

var miNombre2 = "Diego"; //Aquí la función se ejecuta, pero genera undefined en el caso de la variable