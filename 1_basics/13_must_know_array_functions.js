/**
 * Array Methods
 */

let ive = [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서'
];

console.log(ive);

console.log(ive.push('chocola'));
console.log(ive);

console.log('--------------');

console.log(ive.pop());
console.log(ive);

console.log('--------------');

console.log(ive.shift());
console.log(ive);

console.log('--------------');

console.log(ive.unshift('안유진'));
console.log(ive);

console.log('--------------');

console.log(ive.splice(0, 3));
console.log(ive);

ive = [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서'
];
console.log('--------------');

console.log(ive.concat('chocola'));
console.log(ive);

console.log('--------------');

console.log(ive.slice(0, 3));
console.log(ive);

console.log('--------------');

let ive2 = [
  ...ive
];
console.log(ive2);

console.log('--------------');

console.log(ive.join());
console.log(ive.join(' | '));
console.log(ive.join('/'));

ive.sort();
console.log(ive);
console.log(ive.reverse());

console.log('--------------');

let numbers = [
  1, 9, 5, 2, 3, 7
];
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);