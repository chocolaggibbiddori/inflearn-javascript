/**
 * Getter and Setter
 */

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  set setName(name) {
    this.name = name;
  }
}

const yujin = new IdolModel('yujin', 2003);
console.log(yujin);
console.log(yujin.nameAndYear);

yujin.setName = 'wonyoung';
console.log(yujin);

class IdolModel2 {
  #name;
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const yujin2 = new IdolModel2('yujin2', 2003);
console.log(yujin2);
console.log(yujin2.name);
yujin2.name = 'wonyoung';
console.log(yujin2);
console.log(yujin2.name);