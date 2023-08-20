/**
 * What is String?
 * a collections of character
 *
 *
 */
const Name = "roy ali hasan ";
const age = 21;
// String templates / String Interpolation
console.log(`Name: ${Name} age: ${age}`);

// const country = new String("pakistan");
// console.log(country.__proto__);
// console.log(country[0]);

// String methods
// console.log(Name.toUpperCase());
// console.log(Name.charAt(2));
// console.log(Name.toLowerCase());
// console.log(Name.indexOf("a"));

console.log(Name.substring(0, 4));
console.log(Name.slice(-4, 0));

console.log(Name.trim())
console.log(Name.split(' '))