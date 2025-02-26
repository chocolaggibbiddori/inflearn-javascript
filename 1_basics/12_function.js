/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10 / 2 % 2 스트링으로 변환해서
 * 반환 받고 싶다면 어떻게 해야할까?
 */

console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

/**
 * DRY
 * Don't
 * Repeat
 * Yourself
 */

function calculate() {
  console.log((2 * 10 / 2 % 3).toString());
}

calculate();

function calculate(number) {
  console.log((number * 10 / 2 % 3).toString());
}

calculate(4);
calculate(5);

function multiply(x, y) {
  console.log(x * y);
}

multiply(2, 5);

function multiply(x, y = 10) {
  console.log(x * y);
}

multiply(2, 5);
multiply(2);

/**
 * return
 */

/**
 * Arrow function
 */

const multiply2 = (x, y) => {
  return x * y;
}
console.log(multiply2(2, 100));

const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 100));

const multiply4 = x => x * 2;
console.log(multiply4(4));

const multiply5 = x => y => z => `x: ${ x }, y: ${ y }, z: ${ z }`;
console.log(multiply5(2)(5)(7));

function multiply6(x) {
  return function (y) {
    return function (z) {
      return `x: ${ x }, y: ${ y }, z: ${ z }`;
    };
  };
}

console.log(multiply6(3)(4)(5));

const multiplyThree = function (x, y, z) {
  console.log(arguments);
  return x * y * z;
};

console.log(multiplyThree(2, 3, 4));

const multiplyAll = function (x, y, z, ...arguments) {
  console.log(arguments);
  return Object.values(arguments).reduce((a, b) => a * b, 1);
};

console.log(multiplyAll(3, 4, 5, 6, 7, 8));

(function (x, y) {
  console.log(x * y);
})(4, 5);

console.log(typeof multiply);
console.log(multiply instanceof Function);
console.log(multiply instanceof Object);
