//variable types
//let, const, var
const name = "john";
//name = "don" //cannot change
let age = 30; //can be reassigned
age = 31; //can change
//let age = 25;//cannot redeclare
var city = "ktm"; //can be reassigned and redeclared
var city = "pokhara";
city = "lalitpur";
console.log(name, age, city);

//Hoisting
console.log(country);

//variable types and scope
if (true) {
  //let, const => blocked scope
  let firstname = "Ram";
  const lastname = "Bahadur";
  var country = "Nepal"; //function scoped or global scoped
  console.log(firstname, lastname, country);
}

//console.log(firstname,lastname);//error:not defined
console.log(country); //can be accessed outside the block

//common datatypes
const stringVar = "Hello World"; //string '', or ``
const numberVar = 42; //number integer or float 42.1
const booleanVar = true; //true or false
const nullVar = null; //intentional empty
const undefinedVar = undefined; //variable declared but not assigned
const symbol1 = Symbol("Sabin"); //unique and immutable
const symbol2 = Symbol("Sabin");
console.log(symbol1 === symbol2); //false

console.log(stringVar, typeof stringVar);
console.log(numberVar, typeof numberVar);
console.log(booleanVar, typeof booleanVar);
console.log(nullVar, typeof nullVar);
console.log(undefinedVar, typeof undefinedVar);
console.log(symbol1, typeof symbol1);

// =, ==, ===
const num1 = 5; //assignment operator
const num2 = "5";
console.log(num1 == num2);
console.log(num1 === num2);

//collection/list
const array = [1, 2, 3, "four", true, null];
array.push(5); //add a element at the end
array.unshift(0); //add element at the beginning
console.log(array);
array.pop(); //remove last element
array.shift(); //remove first element
console.log(array);

//iteration
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//for in loop => itersting over indices
for (let index in array) {
  console.log(index, array[index]);
}

//for of loop -> iterating over values
for (let value of array) {
  console.log(value);
}

//Object
//JSON -> Javascript "Object" Notation
const person = {
  firstname: "Ram",
  lastname: "Bahadur",
  age: 25,
  hobbies: ["reading", "travelling"],
  address: {
    city: "Kathmandu",
    country: "Nepal",
    location: [27.7172, 85.324],
  },
};
console.log(person.address);
console.log(person.firstname);
console.log(person["lastname"]);
person.age = 26; //update value
person.hobbies.push("Coding");
console.log(person);

//exception/object/undefined
console.log(person.detail);

// console.log(person.detail.id);
//nullable/fallback

console.log(person.detail ?? "No details available");
console.log(person.detail || "No details available");

const check = 0;
console.log(check ?? "No details available");
console.log(check || "value is falsy");

//nullable chaining
console.log(person.detail?.id);
console.log(person.detail?.id?.number);

// ?. if undefined, will automatically return undefined for rest

//fallback to chaining
console.log(person.detail?.id ?? "N/A");
//Destructuring the object

// const {
//   hobbies,
//   address: { city, country },
// } = person;
// console.log(hobbies, city, country);

// const { firstname: fname, lastname: lname } = person;
// console.log(fname, lname);

const std1 = { name: "Jadiya", age: 20, marks: [20, 40, 7] };
const std2 = { name: "Sandy", age: 21, marks: [60, 50, 27] };

let totalMarks = 0;

for (let marks of std1.marks) {
  totalMarks += marks;
}
console.log(totalMarks);
console.log("Average marks:" + totalMarks / std1.marks.length);
