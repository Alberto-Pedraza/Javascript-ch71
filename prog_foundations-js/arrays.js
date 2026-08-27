/**
 * *Estructura de datos ¿Qué son y por qué son importantes?
 * Son estructuras que nos ayudan a agrupar y/o ordenar datos
 * Para manipular datos de manera más eficiente
 * Un dato no representa nada por sí solo pero datos juntos y dándoles contexto se vuelven información.
 * 
 * todo: Array:
 * Estructura de datos ordenada
 * ! Importante: Los datos se identifican por un índice, el cual comienza a contar desde 0
 * El tamaño real del array sí comienza a contarse desde el 1 (size)
 * 
 * ! Importante pero particular de JS: Podemos guardar cualquier tipo de dato dentro del array, incluso combinaciones.
 * ! Tienen tamaño dinámico
 * 
 */

// * Definición de un array
const arrayVacio = [];
const arrayLleno = ["Hoal",28,false];

/**
 * *Obtención de un elemento guardado en un array 
 * Notación corchete
 */
console.log(arrayLleno[1]);
console.log(arrayLleno[0]);
console.log(arrayLleno[3]); // Esto no nos va a dar error sino Undefined, ya que al no tener el array un tamaño definido y poder expandirse, JavaScript considera los valores en índices superiores a los existentes solo no se han creado aún.

/**
 * !DOCUMENTACIÓN PA AGREGAR VALORES AL ARRAY:
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push 
 */

/**
 * * Ingresar datos al array
 * MÉTODOS:
 * 1. Unshift para ingresar elementos al comienzo del array
 * 2. Push para ingresar elementos al final del array
 * */

console.log("array antes:");
console.log(arrayLleno);
arrayLleno.unshift("Mundo");
console.log("array después:");
console.log(arrayLleno);

console.log("array antes:");
console.log(arrayLleno);
arrayLleno.push("Adios", false);
console.log("array después:");
console.log(arrayLleno);

/**
 * !DOCUMENTACIÓN PARA ELIMINAR ELEMENTOS DEL ARRAY:
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/shift 
 */

/**
 * * Eliminar datos del array
 * 1. Shift elimina y devuelve el elemento en la posición 0
 * 2. Pop elimina y devuelve el último elemento del array
 * Nota:
 * Lo que va dentro de los paréntesis de un método o función se conoce como argumento
 */

console.log("Array antes:");
console.log(arrayLleno);
// arrayLleno.shift();
console.log(`Elemento eliminado ${arrayLleno.shift()}`);
console.log("Array después:");
console.log(arrayLleno);

console.log("Array antes:");
console.log(arrayLleno);
// arrayLleno.pop();
console.log(`Elemento eliminado ${arrayLleno.pop()}`);
console.log("Array después:");
console.log(arrayLleno);

/**
 * *Reasignar el valor de un índice
 */

let valorAnterior = arrayLleno[0];
arrayLleno[0]= "Ola";
arrayLleno[2]= true;
console.log(`El valor anterior del primer elemento es: ${valorAnterior}`);
console.log(`Resultado de la reasignación de los elementos: ${arrayLleno}`)
console.log(arrayLleno);

/**
 * ! DOCUMENTACIÓN PARA EL SPLICE:
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

/** splice elimina elementos o los agrega */

const months = ["Jan", "March", "April", "June"];

console.log("============ splice");
arrayLleno.splice(1,1);
console.log(arrayLleno);
arrayLleno.splice(1,2);
console.log(arrayLleno)

//Agregar elementos
months.splice(3,0,"Mar");
console.log(months)