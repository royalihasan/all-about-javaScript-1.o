/**
 * What is Memory Management ?
 * it mean how javaScript manage and allocate memory to a variable .
 *  In c , cpp the memory management is in the hand of programmer
 *
 *  There are two type of Memory
 *  1 . Stack  // Primitive
 *  2 . Heap  // Non - Primitive / Reference type
 */
// Stack  Example
let id = 101;
console.log(id);
let anotherId = id;
anotherId = 102;
console.log(anotherId);
// Heap example

const user = {
  id: "101",
  name: "Roy Ali Hasan",
};
console.log(user);

// now change it
const anotherUser = user;
anotherUser.name = "Abdullah";
console.log(user);
console.log(anotherUser);
