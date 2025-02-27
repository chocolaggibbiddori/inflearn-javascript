/**
 * Class Keyword
 *
 */

class IdolModel {
  name;
  year;

  constructor(name, year = 2003) {
    this.name = name;
    this.year = year;
  }

  sayName() {
    return `hi! I'm ${this.name}`;
  }
}

const yujin = new IdolModel('yujin');
console.log(yujin);
console.log(yujin.sayName());

console.log(typeof IdolModel);
console.log(typeof yujin);