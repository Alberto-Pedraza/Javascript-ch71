/**
 * ! FUNCTION DECLARATION
 *  Primer ejemplo de creación de una función.
 */

//Primero la declaramos
function saludar(){
    console.log("Hola")
}

//Usar la función (invocar o llamar)
saludar();

//Se puede usar varias veces
saludar();
saludar();

//* Función con parámetros.
function saludarConNombre(nombre,edad){
    console.log(`Hola ${nombre}, mucho gusto en conocerte, no sabía que tenías ${edad} años`);
}

//Ahora se manda a llamar con argumentos
saludarConNombre("Josué", 32);
saludarConNombre("Alberto", 28);
saludarConNombre(30,"Uvuvwevwevwe Onyetenyevwe Ugwemubwem Osas");

//*Función que retorna algo
/**
 * ! IMPORTANTE:
 * Cuando usamos return:
 *  1. Termina la ejecución de la función
 *  2. El valor retornado debe ser ocupado o nunca lo vamos a ver
 */
function multiplyTwoNumbers(a,b){
    if (typeof a == "number" && typeof b == "number"){
        return a*b;
    } else{
        return "Por favor ingresa dos números. Nada de andar de chistosos.";
    }
    console.log("Nunca me vas a ver"); //Esto nunca se va a poder ejecutar porque después del return se finaliza la ejecución de la función.
}

//Aquí no se va a ver nada porque no se ha ocupado el valor que retorna la función.
multiplyTwoNumbers(2,3);

//Imprimimos el valor de retorno en consola
console.log(multiplyTwoNumbers(3,5));
console.log(multiplyTwoNumbers(7,"wawawa"));