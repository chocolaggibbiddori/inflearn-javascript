/**
 * Callback
 */

function waitAndRun() {
  setTimeout(() => {
    console.log('end');
  }, 2000);
}

// waitAndRun();

function waitAndRun2() {
  setTimeout(() => {
    console.log('end 1');

    setTimeout(() => {
      console.log('end 2');

      setTimeout(() => {
        console.log('end 3');
      }, 2000);
    }, 2000);
  }, 2000);
}

// waitAndRun2();

/**
 * Promise
 */

const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('promise');
    resolve('complete');
  }, 2000);
});

// timeoutPromise.then(response => {
//   console.log('then');
//   console.log(response);
// });

const getPromise = seconds => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('complete');
  }, seconds * 1000);
});

// getPromise(1)
//   .then(response => {
//     console.log('first');
//     console.log(response);
//     return getPromise(2);
//   })
//   .then(response => {
//     console.log('second');
//     console.log(response);
//   });

const rejectPromise = seconds => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('complete');
  }, seconds * 1000);
});

// rejectPromise(3)
//   .then(response => {
//     console.log('first then');
//     console.log(response);
//   })
//   .catch(error => {
//     console.log('first catch');
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('finally');
//   });

Promise.all([
  getPromise(1),
  getPromise(2),
  getPromise(1)
]).then(response => {
  console.log(response);
});