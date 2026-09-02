/**
 * ! CALLBACK
 * Es una función que se pasa como argumento a otra función para ser ejecutada en el momento que la función que recibe el callback lo decida
 * ? Funciones ciudadanos de primera clase: Todas las funciones son tratadas como si fueran un valor
 * https://www.geeksforgeeks.org/javascript/what-is-first-class-citizen-in-javascript/ 
 */

function procesarPago(nombreCliente, callback, cuenta){
    const saldoAPagar = callback(cuenta);
    console.log(`El cliente ${nombreCliente} debe pagar ${saldoAPagar} después de impuestos`);
}

/**
 * *Opciones para la función de callback.
 * 1. Crear una función aparte y luego mandarla como argumento
 * 2. Crear una función anónima dentro de los paréntesis de la función principal.
 */

function addIVA(cuenta){
    return cuenta*1.16;
}

procesarPago("Josué",addIVA, 2000);

//todo: Con función anónima, se muestran dos ejemplos, uno con function y otro con arrow.
console.log("------------Callback con función anónima-------");

procesarPago(
    "Carlos",
    function(cuenta){
        return cuenta*1.2;
    },
    2000
);

console.log("------------Callback con arrow function-------");

procesarPago("Javier", (cuenta)=>cuenta*1.3,2000);