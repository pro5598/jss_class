// Promise parallelism
const timeFunc1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Time func 1");
    }, 2000);
  });
const timeFunc2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Time func 2");
    }, 3000);
  });
const timeFunc3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Time func 3");
    }, 1000);
  });
const sequentialExecution = async () => {
  console.time("Sequential Execution");
  const result1 = await timeFunc1();
  console.log(result1);
  const result2 = await timeFunc2();
  console.log(result2);
  console.timeEnd("Sequential Execution");
};

const parallelExecution = async () => {
  console.time("Parallel Execution");
  const [r1, r2] = await Promise.all([timeFunc1(), timeFunc2()]);
  console.log(r1, r2);
  console.timeEnd("Parallel Execution");
};
sequentialExecution();
parallelExecution();

const parallelExecutionSetelled = async() =>{
    
}