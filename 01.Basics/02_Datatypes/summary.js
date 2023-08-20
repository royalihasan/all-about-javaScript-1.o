/**
 * Primitive - Call by Value / based on access and store - Stack
 -7 Types [ string , number , bool , null , undefined , symbol , BigInt ] 
 * Non Primitive  - Call by reference  type - Heap Memory
  - Arrays , Objects , Functions 
 */
// JavaScript is Dynamic/Loosely Typed Language

// Symbol
const id = Symbol(123);
console.log(id.description);
console.log(typeof id);
// Big Int
const bigInt = 8483748378473847384738748374n;
console.log(bigInt);

// Arrays
const heros = ["superman", "hulk", "iron man"];
console.log(heros + " Type of Heros: " + typeof heros);

// Object

const marvel_heros = {
  id: "",
  name: "",
  power: "",
};

// Functions
// Object function
const marvelHerosInfo = function () {};
console.log(marvelHerosInfo);
