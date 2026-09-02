/**
 * ! FUNCTION EXPRESSION
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function 
 */

const getTriangleArea = function (base,height){
    //todo: La jerarquía de operaciones es como en matemáticas
    return (base*height)/2;
};

let area = getTriangleArea(20,24);
console.log(`El área de un triángulo de base 20 y altura 24 es ${area}`);

/**
 * *Ejercicio: Function que solicite un número, ese número representa el limite de una serie.
 * *Mostrar qué números son pares o impares en una serie de 1 hasta el número ingresado y que sea una function expression.
 */

const serieParesImpares = function(limit){
    for(let i=1;i<=limit;i++){
        if(i%2==0){
            console.log(`El número ${i} es par`);
        }else{
            console.log(`El número ${i} es impar`);
        }
    }
}
//! Operador unario_plus es otra manera de convertir en Number a variables con otro tipo de dato (por lo regular String)
//? Por ejemplo, en la definición de abajo, se podría escribir: let limite = +prompt("Ingresa hasta qué número, a partir del 1, quieres ver una lista de pares e impares");
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Unary_plus
let limite = Number(prompt("Ingresa hasta qué número, a partir del 1, quieres ver una lista de pares e impares"));
let serie = serieParesImpares(limite);

//Hay otra manera de escribir la función con el prompt dentro de la función.