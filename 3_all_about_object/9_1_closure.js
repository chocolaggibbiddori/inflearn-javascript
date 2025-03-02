/**
 * Closure
 *
 * A closure is the combination of a function and the lexical environment
 * within which that function was declared
 *
 * 클로저는 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다.
 * -> 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다.
 */

function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber();
}

console.log(getNumber());
console.log('-------------------------');

function getNumber2() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber;
}

const runner = getNumber2();
console.log(runner);
console.log(runner());
console.log('-------------------------');

/**
 * 1) 데이터 캐싱
 */

function cacheFunction() {
  var number = 10 * 10;

  function innerCacheFunction(newNumb) {
    return number * newNumb;
  }

  return innerCacheFunction;
}

const runner2 = cacheFunction();
console.log(runner2(10));
console.log(runner2(20));
console.log('-------------------------');

/**
 * 2) 반복적으로 특정 값을 변경할 때
 */

function cacheFunction2() {
  var number = 10 * 10;

  function increment() {
    ++number;
    return number;
  }

  return increment;
}

const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log('-------------------------');

/**
 * 3) 정보 은닉
 */

function Idol(name, year) {
  this.name = name;

  var _year = year;

  this.sayNameAndYear = function () {
    return `I'm ${ this.name }. borned ${ _year }`;
  }
}

const yujin = new Idol('yujin', 2003);
console.log(yujin.sayNameAndYear());
console.log(yujin.name);
console.log(yujin._year);