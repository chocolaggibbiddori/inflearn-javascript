/**
 * Inheritance
 */

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class FemaleIdolModel extends IdolModel {

  dance() {
    return 'dance';
  }
}

class MaleIdolModel extends IdolModel {

  sing() {
    return 'sing';
  }
}

const yujin = new FemaleIdolModel('yujin', 2003);
console.log(yujin);
console.log(yujin.name);
console.log(yujin.dance());

const jimin = new MaleIdolModel('jimin', 1995);
console.log(jimin);
console.log(jimin.sing());

console.log(yujin instanceof IdolModel);
console.log(yujin instanceof FemaleIdolModel);
console.log(yujin instanceof MaleIdolModel);
