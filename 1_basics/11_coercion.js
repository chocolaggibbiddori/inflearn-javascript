/**
 * 타입 변환
 * Type conversion
 *
 * 1) 명시적
 * 2) 묵시적
 */

let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

let test = age + '';
console.log(typeof test, test);

console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);
console.log('98' / 2);
console.log('98' % 2);

/**
 * 명시적 변환 몇 가지 더 배우기
 */

console.log('-----------------');

console.log(typeof (99).toString());
console.log(typeof true.toString());
console.log(typeof (Infinity).toString());

// 숫자로 변환
console.log(typeof parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99absd234'));

// Boolean 변환
console.log(!!'x');
console.log(!!'');
console.log(!!0);
console.log(!!1);
console.log(!!'0');
console.log(!!'false');
console.log(!!false);
console.log(!!undefined);
console.log(!!null);
console.log(!!Infinity);
console.log(!!-Infinity);
console.log(!!{});
console.log(!![]);