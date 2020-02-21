var edad = 18;

if(edad === 18) {
    console.log("Puedes votar, será tu 1ra votación");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar");
}


//Usando el operador ternario
//condition ? true : false;
//Ejemplo:
var numero = 1;
var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy uno";