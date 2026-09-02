/**
 * !DIFERENCIAS ENTRE LOS TRES TIPOS DE FUNCIONES (DECLARATION, EXPRESSION, ARROW)
 * 
 * *HOISTING:
 * Es un proceso por el cual las function declaration y las variables escritas con var pasan a estar hasta arriba en el proceso de ejecución.
 * Function expression y Arrow Function no pasan por este proceso.
 * 
 * Documentación:
 * https://eloquentjavascript.net/
 * https://www.eloquentjavascript.es/
 */

console.log(`Function declaration ${multiplyNumbers(20,6)}`);
//console.log(addNumber(3+5)); //Esto te va a dar un error porque está en el código antes de que se defina la Function Expression

const addNumber = function(a,b){
    return a+b;
};

const divideNumbers = (a,b)=>a/b;

console.log(divideNumbers(15,3)); //Esto sí se va a escribir en la consola porque está después de la línea donde se define la función.

function multiplyNumbers(a,b){
    return a*b;
};

/**
 * * EJERCICIO: Crear una función sin parámetros ni return, va a ser tipo minijuego para que el usuario adivine el número secreto.
 * * Se deben usar bucles y condicionales. El usuario va a tener 3 intentos. Si ingresa el número incorrecto darle una pista sobre si el número es menor o mayor que.
 * * Que se generen números aleatorios en cada intento
 * * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */

//Hacemos la función que revisa si cada intento es correcto, da una pista si es incorrecto y obtiene el nuevo intento.
function revision(intento,numero){
    if(intento == numero){
        alert(`Tú dijiste que el número secreto era ${intento}.
            El número secreto era ${numero}.
            ¡Felicidades, lo adivinaste!`);
    }else if(intento<numero){
        const nuevoIntento = +prompt(`Inténtalo de nuevo, el número secreto es mayor que ${intento}`);
        return nuevoIntento;
    }else if(intento>numero){
        const nuevoIntento = +prompt(`Inténtalo de nuevo, el número secreto es menor que ${intento}`);
        return nuevoIntento;
    }
};

//Esta sí es la función que tiene el juego, no tiene parámetros ni return
function adivinarNumero(){
    //Creamos el número secreto
    let secretNumber = Math.floor(Math.random()*11);
    //Pedimos el primer intento al mismo tiempo que explicamos las instrucciones
    let primerIntento = +prompt(`Adivina el número secreto.
        Tienes tres intentos para hacerlo.
        Se trata de un número entero entre 0 y 10.`);
    //Hacemos el ciclo que evalúa los 3 intentos
    for(let i=0 ; i<2; i++){
        primerIntento = revision(primerIntento,secretNumber);
    }
    alert(`El número secreto era ${secretNumber}`);
}

adivinarNumero();