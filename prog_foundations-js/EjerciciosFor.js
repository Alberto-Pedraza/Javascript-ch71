/**
 * ! Ejercicios del ciclo for
 */

/**
 * * 1. CUENTA REGRESIVA: Crea un programa que imprima los números del 10 al 1 en orden descendente. Al finalizar la cuenta, el programa debe mostrar el mensaje: "¡Despegue!".
 */

/**
 * const regresiva = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
for(let i = 0; i<regresiva.length; i++){
    console.log(`${regresiva[i]}`);
}
console.log("¡DESPEGUE!");
*/

/**
 * * 2. TABLA DE MULTIPLICAR: Solicita al usuario un número entero. El programa debe mostrar la tabla de multiplicar de ese número (del 1 al 10) con el formato exacto: N x i = Resultado.
 */
/**
let N = Number(prompt("Ingresa el número del cual quieras saber su tabla de multiplicar"));
for(let j=1; j<=10;j++){
    console.log(`${N}x${j} = ${N*j}`);
}
*/

/**
 * * 3. SUMA DE PARES: Solicita al usuario un "número límite". El programa debe sumar todos los números pares que existan entre el 1 y el número ingresado por el usuario. Al final, muestra el resultado total de la suma.
 */

let limite = Number(prompt("Ingresa un número para saber cuánto suman todos los pares que hay entre él y el 1"));
let sumaPares = 0;
//? Versión con if y else
/**for(let k = 1; k<limite; k++){
    if(k%2==0){
        sumaPares += k ;
    } else{}
}*/

//? Versión más simplificada
for(let k = 2; k<limite; k += 2){
    sumaPares += k
}
console.log(`La suma de los pares que están entre 1 y ${limite}, sin incluirlo, es: ${sumaPares}`);
//todo: EN AMBOS CASOS, SI SE QUIERE INCLUIR AL NÚMERO LÍMITE CUANDO ESTE SEA PAR, EN LA CONDICIÓN, EN LUGAR DEL MENOR QUE < SE TENDRÍA QUE PONER <=