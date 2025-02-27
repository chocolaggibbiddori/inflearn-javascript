/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 *
 * 1) 모든 primitive 값은 copy by value
 * 2) 객체는 copy by reference
 */

let original = 'hi';
let clone = original;

console.log(original);
console.log(clone);

clone += ' yujin';

console.log(original);
console.log(clone);

console.log('------------------------');

let originalObj = {
  name: 'yujin',
  group: 'ive'
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

originalObj.group = 'chocola';

console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);

const yujin1 = {
  name: 'yujin',
  group: 'ive'
};
const yujin2 = yujin1;
const yujin3 = {
  name: 'yujin',
  group: 'ive'
};

console.log(yujin1 === yujin2);
console.log(yujin2 === yujin3);
console.log(yujin3 === yujin1);
