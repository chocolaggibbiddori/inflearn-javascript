/**
 * Prototype
 */

const testObj = {};

// __proto__ 모든 객체에 존재
console.log(testObj.__proto__);

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

console.log(IdolModel.prototype);
console.dir(IdolModel.prototype, {
  showHidden: true
});

// circular reference
console.log(IdolModel.prototype.constructor === IdolModel);
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

const yujin = new IdolModel('yujin', 2003);
console.log(yujin.__proto__);
console.log(yujin.__proto__ === IdolModel.prototype);

console.log(testObj.__proto__ === Object.prototype);

console.log(IdolModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(IdolModel.prototype.__proto__ === Object.prototype);

console.log(yujin.toString());
console.log(Object.prototype.toString());

function IdolModel2(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = () => `I'm ${ this.name }`;
}

const yujin2 = new IdolModel2('yujin', 2003);
const wonyoung2 = new IdolModel2('wonyoung', 2002);

console.log(yujin2.sayHello());
console.log(wonyoung2.sayHello());
console.log(yujin2.sayHello === wonyoung2.sayHello);

console.log(yujin2.hasOwnProperty('sayHello'));

function IdolModel3(name, year) {
  this.name = name;
  this.year = year;
}

IdolModel3.prototype.sayHello = function () {
  return `I'm ${ this.name }`;
};

const yujin3 = new IdolModel3('yujin', 2003);
const wonyoung3 = new IdolModel3('wonyoung', 2002);

console.log(yujin3.sayHello());
console.log(wonyoung3.sayHello());
console.log(yujin3.sayHello === wonyoung3.sayHello);
console.log(yujin3.hasOwnProperty('sayHello'));

IdolModel3.sayStaticHello = function () {
  return `I'm static`;
};

console.log(IdolModel3.sayStaticHello());

/**
 * Overriding
 */

function IdolModel4(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = () => `I'm ${ this.name } with override`;
}

IdolModel4.prototype.sayHello = function () {
  return `Hi, i'm prototype method`;
};

const yujin4 = new IdolModel4('yujin', 2003);
console.log(yujin4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 *
 * __proto__ vs prototype
 */

function IdolModel5(name, year) {
  this.name = name;
  this.year = year;
}

IdolModel5.prototype.sayHello = function () {
  return `Hi, I'm ${ this.name }`;
};

function FemaleIdolModel(name, year) {
  this.name = name;
  this.year = year;

  this.dance = () => `I'm ${ this.name } with dance`
}

const gaeul = new IdolModel5('gaeul', 2004);
const ray = new FemaleIdolModel('ray', 2005);

console.log(gaeul.__proto__);
console.log(gaeul.__proto__ === IdolModel5.prototype);
console.log(Object.getPrototypeOf(gaeul) === IdolModel5.prototype);

console.log(gaeul.sayHello());
console.log(ray.dance());

Object.setPrototypeOf(ray, IdolModel5.prototype);
console.log(ray.sayHello());
console.log(ray.dance());
console.log(ray.constructor.name);

Object.setPrototypeOf(gaeul, FemaleIdolModel.prototype);
// console.log(gaeul.dance());

FemaleIdolModel.prototype = IdolModel5.prototype;

const eseo = new FemaleIdolModel('eseo', 2007);
console.log(Object.getPrototypeOf(eseo) === FemaleIdolModel.prototype);
console.log(Object.getPrototypeOf(eseo) === IdolModel5.prototype);
console.log(FemaleIdolModel.prototype === IdolModel5.prototype);
