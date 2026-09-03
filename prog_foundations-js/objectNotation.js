/**
 * ! OBJETOS EN JAVASCRIPT (JSON):
 * Son una estructura de datos, similar a diccionarios o mapas.
 * * Se organiza en pares    Llave : Valor asociado
 * * Es una estructura de datos desordenada, los datos se mantienen o se buscan mediante su llave
 * ! No son los mismos objetos que los de Programación orientada a Objetos
 * ! Las llaves no se pueden repetir
 * 
 * ? CURIOSIDADES:
 * Esta notación se volvió el estándar para intercambio de información entre cliente y servidor en la web
 * JSON = Java Script Object Notation
 * 
 * Para los ejemplos vamos a ocupar la fakestore
 * https://fakestoreapi.com/products
 */

//Cómo declarar un objeto
const participante = {
    name: "Natalia",
    lastName: "Coca",
    age: 27,
    isAlive: true,
    sayHi: function(){
        console.log("Natalia dice Hola");
    },
    ch: 71
};

// Como acceder a los valores
// 1. Notación punto (más usado)
// 2. Notación corchete, el nombre va entre comillas como si fuera String

console.log(`El nombre de la participante es ${participante.name}, obtenido con notación punto`);

console.log(`La edad de la participante es ${participante["age"] }, obtenido con notación corchete`);

console.log(participante.sayHi());

//Cómo agregar un nuevo par Llave:Valor

console.log(participante); //Aunque esté antes parece que hace la modificación desde el principio
participante.favoriteAnimals = ["Tortuga","Gato","Cuervo"];
console.log(participante);

//* Agregar una nueva llave cuyo valor sea un objeto de dirección
//* El objeto debe contener por lo menos 2 pares dentro

participante.address = {
    pais:"México",
    estado: "Ebriedad",
    municipio: "Tangamandapio",
    colonia: "Coco Chanel",
    calle: "Mucha",
    numero: 12345,
}

//¿Cómo accedemos a la info de objetos o arrays anidados (objetos o arrays dentro de otro objeto o array)

console.log(`El primer animal favorito de ${participante.name} es ${participante.favoriteAnimals[0]}`); //Esto accede a un solo elemento del array
console.log(participante.favoriteAnimals);//Esto muestra todo el array

//Para acceder a un elemento de un objeto anidado puedes usar la notación punto o con corchetes
console.log(`La colonia de ${participante.name} es ${participante.address.colonia}`);
console.log(`${participante.name} está en el estado de ${participante.address["estado"]}`);
console.log(`La calle de ${participante["name"]} es ${participante["address"]["calle"]}`);

//¿Cómo modificar el valor de una llave?
participante.age=25;
console.log(participante.age);

//¿Cómo eliminar una llave?
delete participante.ch;
console.log(participante);

//¿Cómo iterar sobre el objeto? Con el for in: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in 
for(const llave in participante){
    console.log(`El valor de la llave ${llave} es ${participante[llave]}`); //Aquí sí es necesario usar la notación con [] porque el ciclo toma los nombres de las llaves y los convierte en texto, lo cual no queda bien con la notación de punto. Es decir, no se puede poner participante.llave
};