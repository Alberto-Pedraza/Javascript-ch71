/** 
 * En javascript hay 3 formas de declarar variables
 * ! Existe una forma que ya no se recomienda utilizar
 * ! var
 * Al proceso de crear una variable y darle un valor se le llama asignación
 * 
 * Las variables que pueden ser reasignadas (pueden cambiar en un futuro el valor que tienen) se declaran:
 * * let nombreVariable = valor;
 * 
 * ? El operador = se conoce como operador de asignación
 * 
 * para nombres de variables se va a utilizar la convención de camelCase si son de más de una palabra (la primer palabra en minúsculas y las siguientes comenzando con una mayúscula).
 * 
 * Las variables que no pueden ser reasignadas (su valor no puede cambiar) se declaran de la siguiente manera:
 * * const nombreVariable = valor;
 * 
 * NOTA: 
 *      Palabras reservadas: Son palabras que utiliza el lenguaje de programación y si intentamos usarlas en otros lados pueden generar errores.
*/

let nombre = "Alberto"; // Variable de tipo string. Una vez creada una variable podemos utilizarla en otros lugares del código utilizando su nombre, las variables al ser utilizadas no van entre comillas ""
console.log(nombre);

const birthYear = 1997; // Variable de tipo número 
console.log(birthYear);

/** Reasignando una variable (cambiando el valor que tiene)
 * Cuando reasignamos una variable (una variable ya creada)
 * !Ya no es necesario poner let
 */

nombre = "Laberto";
console.log(nombre);

/**Prueba de intentar cambiarle el valor a una constante
 * 
 * birthYear = 1500
 */

/**
 * CONCATENAR: Nos permite pegar el valor de una variable a un texto
 */

let name = "David";
console.log(
    "Hola soy " + nombre + " y estoy en gen con " + name + ", nací en el año " + birthYear
);