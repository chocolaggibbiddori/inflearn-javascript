/**
 * Async / Await
 */

const getPromise = seconds => new Promise(resolve => {
  setTimeout(() => {
    resolve('complete');
  }, seconds * 1000);
});

async function runner() {
  const result1 = await getPromise(1);
  console.log(result1);
  const result2 = await getPromise(2);
  console.log(result2);
  const result3 = await getPromise(1);
  console.log(result3);
}

runner();
console.log('end');