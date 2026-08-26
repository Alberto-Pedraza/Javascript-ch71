/**
 * CONDICIONALES: Serie de condiciones para que algo suceda.
 * 
 * En programación, para el manejo de estas condiciones tenemos:
 * ! El bloque if else
 * * if pregunta por una condición, en caso de que esta condición sea verdadera ejecuta un bloque de código, en caso de ser falso, no ejecuta nada.
 * * else maneja la ejecución de código en ese caso negativo.
 * 
 * ? La condición de if tiene que ser algo que genere un valor booleano (True o False)
 */

const userAge = prompt("Ingresa tu edad");
const userBY = prompt("Ingresa tu año de nacimiento");
let userAgeNum = Number(userAge); //Con esto cambiamos al valor de retorno del prompt de string a number, para poder operarlo.
// * Si se intenta convertir a Number algo que no es un número, el valor de retorno va a ser NaN (Not a Number)
let userBYNum = Number(userBY);
let edadCalc = 2026 - userBYNum;

alert("Dijiste que tu edad es "+userAge+" años. Según tu año de nacimiento, deberías tener "+edadCalc+" años.");

/**
 * todo: OPERADORES LÓGICOS
 * Sirven para hacer operaciones cuyo resultado es Verdadero o Falso.
 * == es el símbolo de igualdad en la programación.
 * 
 * Mayor que >
 * 2 > 1 == Verdadero
 * 1 > 2 == Falso
 * 0 > 0 == Falso
 * 
 * Menor que < 
 * 2 < 1 == Falso
 * 3 < 5 == Verdadero
 * 2 < 2 == Falso
 * 
 * Comparador de igualdad ==
 * 2 == 2  Verdadero
 * 3 == 1  Falso
 * 
 * Mayor o igual que >=
 * 2 >= 2 == Verdadero
 * 2 >= 1 == Verdadero
 * 2 >= 3 == Falso
 * 
 * Menor o igual que <=
 * 4 <= 4 == Verdadero
 * 4 <= 5 == Verdadero
 * 7 <= 5 == Falso
 * 
 * Diferente de !=
 * 5 != 4 == Verdadero
 * 5 != 5 == Falso
 * 99 != 100 = Verdadero
 * 
 * Negación (not) ! (En los ejemplos el signo de interrogación sí se está usando para algo distinto a cambiarle el color al comentario)
 * !Verdadero == Falso
 * !Falso == Verdadero
 * !(4 <= 4) == Falso
 * 
 * AND &&
 * Devuelve verdadero sólo si los dos valores son verdaderos
 * Si un valor es Falso, todo el resultado se vuelve Falso
 * Verdadero && Verdadero == Verdadero
 * Verdadero && Falso == Falso
 * Falso && Verdadero == Falso
 * 
 * Or ||
 * Devuelve Falso solo si ambos valores son Falso
 * Con que haya un valor Verdadero ya toda la expresión es Verdadera.
 */


/**
 * Dentro de los paréntesis va la condición que se va a evaluar
 * Dentro de las llaves va el código que se va a ejecutar en caso de que el valor de la condición sea Verdadero.
 */
if (edadCalc>=18) {
    alert("Bienvenido, eres mayor de edad");
}
else if (edadCalc>12 && edadCalc<15) {
    alert("¿Apoco sí muy grandecito? Primero termine la secundaria")
}
else if (edadCalc<=12 && edadCalc>=6){
    alert("Apenas estás en la primaria, póngase a estudiar");
}
else if (edadCalc<6 && edadCalc>=3){
    alert("Apenas estás en el kinder, ni siquiera estoy seguro de que sepas leer")
}
//Aquí va la opción de lo que se va a ejecutar si no se cumple la condición del if
else {
    alert("Oops, parece que aún no tienes la edad requerida para entrar a este sitio")
}