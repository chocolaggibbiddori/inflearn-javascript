/**
 * Scope
 */

const numberOne = 20;

function levelOne() {
  console.log(numberOne);
}

levelOne();

console.log('-------------------------');

function levelTwo() {
  const numberOne = 40;
  console.log(numberOne);
}

levelTwo();

console.log('-------------------------');

console.log(numberOne);

console.log('-------------------------');

function levelThree() {
  const numberOne = 60;

  function levelFour() {
    const numberTwo = 99;
    console.log(`numberOne: ${numberOne}`);
    console.log(`numberTwo: ${numberTwo}`);
  }

  levelFour();
  console.log(`numberOne: ${numberOne}`);
}

levelThree();

/**
 * JS -> Lexical Scope
 * 선언된 위치가 상위 스코프를 정한다.
 *
 * Dynamic Scopr
 * 실행한 위치가 상위 스코프를 정한다.
 */
console.log('-------------------------');

const numberThree = 3;

function functionOne() {
  const numberThree = 100;
  functionTwo();
}

function functionTwo() {
  console.log(numberThree);
}

functionOne();

console.log('-------------------------');

var i = 999;
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i: ${ i }`);

console.log('-------------------------');

i = 999;
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i: ${ i }`);