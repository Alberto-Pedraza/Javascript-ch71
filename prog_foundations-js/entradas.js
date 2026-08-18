/**
 * Prompt:
 *  1. Hay que asignar su uso a una variable para luego poder usar el valor que ingresó el usuario
 *      1.2 Usar el valor inmediatamente.
 * 
 *  ! Importante
 *  1. No se recomienda su uso en aplicaciones en producción (Ya siendo utilizadas)
 *  2. Bloquea el código, quiere decir que el código que esté debajo de donde escribimos el uso del prompt no se va a ejecutar hasta que el usuario ingrese algo.
 *  3. No se puede personalizar.
 *  4. Todo lo que ingresa mediante prompt siempre es un string
 * 
 * ? NOTA: \n inserta un salto de línea (como un enter)
 */

const edad = prompt("Ingresa tu edad",25); //Para el prompt se tiene que poner primero un texto que se refiera a la solicitud de información y después, de manera opcional, un valor por defecto para registrar si es que el usuario no escribe nada. Si no se utiliza esta opción y el usuario no ingresa un valor, el valor de retorno sera null. Aunque la salida de los prompt es siempre una string, no hay problema que en el valor por defecto los números no se pongan entre comillas.
console.log(edad);

const nombre = prompt("Ingresa tu nombre","Juan Pérez");
console.log("Hola, me llamo "+nombre+" y tengo "+ edad+" años... sin bañarme ajajajaja");


//Ejercicio antes de la hora de comida
const historiaFav = prompt("¿Cuál es tu serie o película favorita?");
const personajeFav = prompt("De esta serie o película, ¿cuál es tu personaje favorito?");
const razon = prompt("Es tu personaje favorito porque...")

alert("Hola, soy "+nombre+" y tengo "+ edad+" años. \n Mi serie o película favorita es "+historiaFav+", y en ella aparece "+personajeFav+" que me gusta muchísimo porque "+razon+".")