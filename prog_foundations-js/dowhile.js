/**
 * ! Loops:
 * Son estructuras de control que nos permiten repetir n cantidad de veces un bloque de código {}
 * 
 * * Tenemos 3 grandes loops:
 * * While
 * * Do While
 * * For
 */

/**
 * todo: Do While
 *                El bucle do while, siempre se ejecuta por lo menos una vez. Al ejecutar primero y luego evaluar te permite tener una ejecución garantizada.
 * ! También necesita un contador externo el cual no debemos olvidar actualizar
 */

let counter = 200;
do{
    console.log("Ola k ase")
    console.log(counter);
    //operador de suma y asignación
    counter += 1;
} while (counter<=100); //Checamos la condición para el ciclo hasta después de que se aplique por primera vez el bloque de código
console.log(counter);

counter = 1;
do{
    if (counter % 2 == 0){
        console.log(`El número ${counter} es par`);
    } else{
        console.log(`El número ${counter} es impar`);
    }
    counter++;
} while(counter < 100)