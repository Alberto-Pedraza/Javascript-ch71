/**
 * ! Switch:
 * Es una estructura de control condicional
 * Pero a diferencia del if no se basa en valores de verdadero o falso sino que se basa en opciones 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch
 * *Nos permite tener múltiples opciones y con base en la opción seleccionada ejecutar un bloque de código
 * * Tiene una respuesta por default por si la opción ingresada no está en la lista
 * 
 * * Se divide en casos
 * *Cada caso lleva su bloque de código y debe llevar al finalizar la palabra break
 * 
 * todo: Template strings nos permite combinar texto con código 
 * todo: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 * 
 * ? Nota:
 * ?    Expresiones (expressions): Es todo aquello que genera un valor
 * *    Ejemplos: una suma, usar una variable, usar una funcion, texto, número
 * ?    Declaraciones (statements): No genera valor y por lo general son estructuras de control o bucles
 * *    Ejemplos: el if, el switch, el for, el while
 */

//let month = prompt("Escribe el mes que te gustaría ver");

/**switch (month) {
    case "Enero":
        alert("El mes de Enero es el primer mes del año");
        break;
    case "Febrero":
        alert(`El mes de ${month} es el segundo mes del año`); //Esto es con template literals, se usan con backticks `Aquí en medio va el texto`. Si lo intentas usar con comillas normales va a dar error
        break;
    case "Marzo":
        alert(`El mes de ${month} es el tercer mes del año`);
        break;
    case "Abril":
    case "Mayo":
        console.log("Abril y Mayo");
        break;
    default:
        alert("El mes seleccionado no aplica");
}*/

/**
 * Ahora va la actividad:
 * 1. Crear un prompt para pedirle al usuario un pais
 * 2. crear un switch con una lista de 5 paises
 * 3. Dado el pais ingresado por el usuario, devolver la capital de dicho pais
 */

let pais = prompt(`
    De la siguiente lista, escoge un país para conocer su capital:
    1. Eslovenia
    2. Letonia
    3. Suiza
    4. Chipre
    5. Belice
    `);

switch(pais) {
    case "Eslovenia":
        alert(`La capital de ${pais} es Liubliana.`);
        break;
    case "Letonia":
        alert(`La capital de ${pais} es Riga`);
        break;
    case "Suiza":
        alert(`La capital de ${pais} es Berna`);
        break;
    case "Chipre":
        alert(`La capital de ${pais} es Nicosia`);
        break;
    case "Belice":
        alert(`La capital de ${pais} es Belmopán`);
        break;
    default:
        alert(`La capital de ${pais} vas a tener que buscarla por tu cuenta, yo fui claro con las que me sabía`)
}

