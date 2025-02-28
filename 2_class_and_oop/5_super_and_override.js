/**
 * Super and Override
 */

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `Hi, I'm ${this.name}`;
  }
}

class FemaleIdolModel extends IdolModel {
  part;

  constructor(name, year, part) {
    super(name, year);
    this.part = part;
  }

  sayHello() {
    return `${super.sayHello()}. I'm ${this.part} !`;
  }
}

const yujin = new FemaleIdolModel('yujin', 2003, 'singer');
console.log(yujin);
console.log(yujin.sayHello());