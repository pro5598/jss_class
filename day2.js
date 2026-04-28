//function
function functionName(arg1, arg2) {
  const result = arg1 + arg2;
  return result;
}

const ret = functionName(2, 3);
console.log(ret);

//variable referenced function
const variableFunction = function () {
  console.log("some result");
};

variableFunction();

//arrow function
const arrowFunction = (arg) => "Hello" + arg;
const ret2 = arrowFunction("World");
console.log(ret2);

//arrow function behaviour
const arrowFunction2 = () => {
  console.log("Scope arrow");
  return "something";
};
arrowFunction2();

//function as key in object
const obj = {
  name: "Amrit",
  func1: function () {
    console.log("Scope Normal", this.name);
  },
  func2: () => {
    console.log("Scope arrow", this.name); // undefined
  },
};

//arrow function is anonymous
obj.func1();
obj.func2();

//closure and callback

//closure
const outerFunction = (outerArg) => {
  let counter = outerArg;
  const innerFunction = () => {
    counter++;
    console.log(counter);
  };
  return innerFunction;
};

const closureFunc = outerFunction(1);
closureFunc(); //2
closureFunc(); //3 -> preservs the state of counter variable

const closureFunc2 = outerFunction(1);
closureFunc2(); // 2 -> new instance of counter variable

closureFunc();

//Higher order function, callback
const hof1 = (arg1, callback) => {
  callback(arg1);
};

const callbackFunc = (arg) => {
  console.log("Hello" + arg);
};

hof1("World", callbackFunc);
hof1("World", (arg) => console.log("Hi", arg));

const calculate = (num1, num2, cb) => {
  const result = cb(num1, num2);
  console.log(result);
  return result;
};

const addition = (a, b) => a + b;
const additionResult = calculate(2, 3, addition);
const substractResult = calculate(5, 2, (a, b) => a - b);

//list/collection callback
const fruits = ["apple", "mango", "grapes"];

//iteration using callback
const howToIterate = (item, index) => {
  //logic to iterate
  console.log(index, item);
};

fruits.forEach(howToIterate);
fruits.forEach((item, index) => console.log(index, item));

//map/transform
const transformedFruits = fruits.map((item, _idx, _arr) => item.toUpperCase());
console.log(transformedFruits);

//UI/UX

const liTags = fruits.map((item, idx) => {
  if (idx % 2 === 0) {
    classname = "bg-light text-dark";
  } else {
    classname = "bg-dark text-light";
  }
  return `<li id = "${item}" class = "${classname}">${item}</li>`;
});

console.log(liTags);

const filteredFruits = fruits.filter((item, idx, arr) => item.length > 5);

console.log(filteredFruits);

const accumulatedValue = fruits.reduce(
  (acc, item, idx, arr) => acc + item,
  "", //initial state
);
console.log(accumulatedValue);

//task

const students = [
  { name: "Amrit", age: 22, grade: 89 },
  { name: "Sandy", age: 23, grade: 1 },
  { name: "Rahul", age: 28, grade: 2 },
  { name: "Ayuz", age: 25, grade: 63 },
  { name: "Sarun", age: 26, grade: 74 },
];

//map
mapp = students.map((items) => items.name);
console.log(mapp);

//filter
const filteredGrade = students.filter((item, index) => item.grade > 80);
console.log(filteredGrade);

const evenIndex = students.filter((item, index) => index % 2 == 0);
console.log(evenIndex);

//reduce
const totalGrade = students.reduce((acc, item) => acc + item.grade, 0);
console.log(totalGrade);
