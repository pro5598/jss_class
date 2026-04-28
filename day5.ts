let var1 = "Hello World!";
console.log(var1);

//run
//npx ts-node day5.ts

//ts implementation

let strVar: string = "Ram";
let numVar: number = 42;
let boolVar: boolean = true;
let anyVar: any = "I can be anything";
anyVar = 123;
let unknownVar: unknown = "I am unknown";
unknownVar = 456;

//strVar = anyVar; //can assign any to string
// strVar = unknownVar; //cannot

console.log(strVar, typeof strVar);
console.log(numVar, typeof numVar);
console.log(boolVar, typeof boolVar);
console.log(anyVar, typeof anyVar);
console.log(unknownVar, typeof unknownVar);

//union
let unionVar: string | number = "union Type";
unionVar = 100;
console.log(unionVar, typeof unionVar);

//[]
let arr1: number[] = [1, 2, 3];
//using array generic type
let arr2: Array<string> = ["a", "b", "c"];
let arr3: Array<string | number> = ["a", 1, "b", 2];
let arr4: any[] = [1, "two", true];

console.log(arr1, arr2, arr3, arr4);

//tuple
let tupleVar: [string, number] = ["Age", 30];
console.log(tupleVar);

//typescript functions
const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(5, 10));

const calculate = (a: number, b?: number): string => {
  return "some result";
};

console.log(calculate(5));
//console.log(calculate(5,10));
const detail = (name: string = "unknown", age: number = 0) => {
  return `Name: ${name}, Age:${age}`;
};

console.log(detail());
console.log(detail("Alice", 25));

const fruits: string[] = ["Apple", "Cherry", "Kiwi", "Grapes", "Fig"];
//create a function -> filterFruits that takes an array pf string
//and number as parameters -> default number is 3
//and returns array of string with length greater than number

//create a function -> countFruits that takes array of string
//and returns number of fruits with length greater than 2

//create a function -> findFruits that takes array of string, search string
//and returns first fruit found, findFruits must be a promise function

const filterFruits = (fruits: string[], num: number = 3) => {
  const arrStr = fruits.filter((item) => item.length > num);
  return arrStr;
};

const countFruits = (fruits: string[]) => {
  let count: number = 0;
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].length > 2) {
      count++;
    }
  }
  return count;
};

const findFruits = (
  fruits: string[],
  search: string,
): Promise<string | Error> =>
  new Promise((resolve, reject) => {
    for (let i = 0; i < fruits.length; i++) {
      if (fruits[i] == search) {
        resolve("Fruit found");
      }
    }
    reject("Fruit not found");
  });

console.log(filterFruits(fruits));
console.log(countFruits(fruits));
findFruits(fruits, "Grapes")
  .then((value) => console.log(value))
  .catch((value) => console.log(value));
