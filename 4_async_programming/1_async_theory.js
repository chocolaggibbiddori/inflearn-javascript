/**
 * Async theory
 */

// function longWork() {
//   const milliseconds = new Date().getTime();
//   const afterTwoSeconds = milliseconds + 2000;
//
//   while (new Date().getTime() < afterTwoSeconds) {
//
//   }
//
//   console.log('complete');
// }
//
// console.log('Hello');
// longWork();
// console.log('World');

function longWork() {
  setTimeout(() => {
    console.log('complete');
  }, 2000);
}

console.log('Hello');
longWork();
console.log('World');