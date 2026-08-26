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
 * todo: While:
 *              Es un loop que se ejecuta mientras una condición sea verdadera y para cuando esta condición se vuelve falsa
 * ! IMPORTANTE: Necesita un contador externo o una forma de parar.
 * !             No olvidar actualizar el contador, puedes generar un bucle infinito.
 */

//1. CONTADOR:
let: counter = 0;

//2. INICIAMOS EL BUCLE
while (counter <= 100) {
    console.log(counter);
    counter = counter + 1;
}

//Reiniciamos el contador
counter = 1

//Otro ejemplo clásico de ciclos while
while (counter<200){
    if (counter % 2 == 0) { //El operador % se llama módulo y da el residuo de hacer la división entera del primer número entre el segundo
        console.log(`El número ${counter} es par`);
    } else {
        console.log(`El número ${counter} es impar`);
    }
    //Otra manera de sumarle 1 a counter es con el ++
    counter++;
}