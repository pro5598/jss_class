const isEven = (num) =>
  new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("Even number");
    } else {
      reject("Odd number");
    }
  });
const isPositive = (num) =>
  new Promise((resolve, reject) => {
    if (num > 0) {
      resolve("Positive number");
    } else {
      reject("Negative number");
    }
  });

// 1. syncronously call isEven and isPositive functions
const evenn = async () => {
  try {
    const result = await isEven(2);
    console.log(result);
  } catch (error) {
    comsole.log("an error has occured");
    console.log(error);
  }
};

evenn();

const positive = async () => {
  try {
    const result = await isPositive(2);
    console.log(result);
  } catch (error) {
    comsole.log("an error has occured");
    console.log(error);
  }
};

positive();

// 2. using .then and .catch call isEven then isPositive sequentially
isPositive()
  .then((result) => console.log(result))
  .catch((error) => {
    console.log("Error in Promise");
    console.log(error);
  });
