/**
 * this
 *
 * JS는 Lexical Scopr를 사용하기 때문에 함수의 상위 스코프가 정의 시점에 결정된다.
 * 하지만, this 키워드는 객체가 생성되는 시점에 결정된다.
 */

const testFunction = function () {
  return this;
};

console.log(testFunction());
console.log(testFunction() === global);
console.log('-------------------------');

const yujin = {
  name: 'yujin',
  year: 2003,
  sayHello: function () {
    return `I'm ${ this.name }.`;
  }
}

console.log(yujin.sayHello());
console.log('-------------------------');

function Person(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `I'm ${ this.name }.`;
  }
}

const yujin2 = new Person('yujin', 2003);
console.log(yujin2.sayHello());

Person.prototype.dance = function () {
  function dance2() {
    return `Dance ${ this.name }`;
  }

  return dance2();
}
console.log(yujin2.dance());
console.log('-------------------------');

/**
 * this
 *
 * 1) 일반 함수에서는 this가 최상위 객체 (global or window)를 가리킨다.
 * 2) 메서드에서는 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성할 땐 객체를 가리킨다.
 */

/**
 * 1) apply()
 * 2) call()
 * 3) bind()
 */

function returnName() {
  return this.name;
}

console.log(returnName());
console.log('-------------------------');

const yujin3 = {
  name: 'yujin'
}

console.log(returnName.call(yujin3));
console.log(returnName.apply(yujin3));

/**
 * call, apply -> 매개변수가 다름
 */

function multiply(x, y, z) {
  return `${ this.name } : ${ x * y * z }`;
}

console.log(multiply.call(yujin3, 3, 4, 5));
console.log(multiply.apply(yujin3, [3, 4, 5]));
console.log('-------------------------');

/**
 * bind()
 */

const laterFunc = multiply.bind(yujin3, 3, 4, 5);
console.log(laterFunc);
console.log(laterFunc());