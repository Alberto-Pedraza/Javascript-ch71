/**
 * !Ejercicios de  ciclo while
 */

/**
 * *1. Pide al usuario que ingrese un número positivo. Si el usuario ingresa un número negativo o cero, el programa debe seguir pidiendo el número hasta que sea válido. Al final, imprime el número aceptado.
 */

/**
let num = Number(prompt("Ingresa un número positivo"));
while(num<=0){
    num = Number(prompt("Ese no es un número positivo, inténtalo de nuevo"));
}
console.log(`Muy bien, ${num} es un número positivo.`)
alert(`Muy bien, ${num} es un número positivo.`)
*/

/**
* * 2. Crea un programa que pida números al usuario y los vaya sumando. El ciclo debe detenerse cuando el usuario ingrese el número 0. Al terminar, muestra la suma total.
 */

/**let number = Number(prompt("Ingresa un número diferente de cero"));
let suma = 0
while (number != 0){
    suma = suma + number;
    number = Number(prompt("Ingresa otro número diferente de cero para irlos sumando, si quieres que se detenga la suma ingresa 0"));
}
alert(`La suma de todos los números que diste es ${suma}`);
*/

/**
 * * 3. Solicita una base y un exponente (ambos enteros positivos). Calcula el resultado de elevar la base al exponente utilizando únicamente un ciclo while y sumas/multiplicaciones. No utilices funciones de librería como Math.pow().
 */

/**
let base = Number(prompt("Ingresa un número entero mayor que cero como base para elevarlo a una potencia de tu elección"));
let pot = Number(prompt("Ingresa otro número entero mayor que cero como potencia para elevar a la base que diste anteriormente"));
let result = 1 ;
let conta = 1 ;
while(conta<=pot){
    result = result*base;
    conta++ ;
}
alert(`El resultado de elevar ${base} a la ${pot} es ${result}`);
*/

/**
 * ! Ejercicios del ciclo do while
 */

/**
 * * 1. EL CAJERO: Simula un menú de cajero automático muy simple. El programa debe mostrar tres opciones:
 * * Consultar saldo. 
 * * Retirar dinero.
 * * Salir. 
 * * El programa debe repetirse hasta que el usuario elija la opción 3. 
 */

/**
let seleccion = 0 ;
do{
    seleccion = Number(prompt(`Bienvenide al cajero del banco Generation.
    ¿Qué quieres hacer hoy?
    1 Consultar mi saldo 
    2 Retirar dinero
    3 Salir
    Para seleccionar la opción escribe su número.`));
} while(seleccion < 3);
 */

/**
 * * 2. CONTADOR DE INTENTOS: Define una "palabra clave" secreta dentro de tu código. Pide al usuario que intente adivinarla. El programa debe repetirse mientras la palabra sea incorrecta y, al final, mostrar cuántos intentos le tomó al usuario acertar.
 */

/**
let clave = "Perú";
let intentos = 0;
let palabra = " ";
do{
    palabra = prompt("Intenta adivinar la palabra que es clave:");
    intentos += 1
}while(palabra != clave);
alert(`Te tomó ${intentos} intentos adivinar que Perú es clave`)
*/

/**
 * * 3. SERIE DE FIBONACCI LIMITADA: Genera y muestra los números de la serie de Fibonacci (0, 1, 1, 2, 3, 5, 8...) uno por uno. El programa debe preguntar al usuario después de mostrar cada número: "¿Deseas generar el siguiente número? (s/n)". El ciclo termina cuando el usuario responde 'n'.
 */

let generar = "" ;
let fibo = "0" ;
let newFibo = 0;
let prevFibo = 0;
let suma = 0;
do{
    alert(`La serie de Fibonacci hasta ahora es: ${fibo}`);
    generar = prompt(`¿Deseas generar el siguiente número?
        (s/n)`);
    if(newFibo == 0) {
        newFibo += 1 ;
        fibo = fibo +", "+ String(newFibo);
    } else{
        suma = prevFibo + newFibo;
        prevFibo = newFibo;
        newFibo = suma;
        fibo = fibo+", "+ String(newFibo);
    }
}while(generar != "n");