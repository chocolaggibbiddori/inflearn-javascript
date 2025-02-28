/**
 * Using function to create objects
 */

function IdolModel(name, year) {
  this.name = name;
  this.year = year;

  this.dance = () => `${ this.name }이 춤을 춥니다.`;
}

const yujin = new IdolModel('yujin', 2003);
console.log(yujin);
console.log(yujin.dance());

const yujin2 = IdolModel('yujin', 2003);
console.log(yujin2);

function IdolModel2(name, year) {
  this.name = name;
  this.year = year;

  this.dance = () => `${ this.name }이 춤을 춥니다.`;
}

const yujin3 = new IdolModel('wonyoung', 2004);
console.log(yujin3);

console.log(global.name);