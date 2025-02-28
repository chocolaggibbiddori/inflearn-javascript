/**
 * Static keyword
 */

class IdolModel {
  name;
  year;
  static groupName = 'ive';

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static getGroupName() {
    return IdolModel.groupName;
  }
}

const yujin = new IdolModel('yujin', 2003);
console.log(yujin);
console.log(IdolModel);
console.log(IdolModel.groupName);
console.log(IdolModel.getGroupName());

class IdolModel2 {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static fromObject(obj) {
    return new IdolModel2(obj.name, obj.year);
  }
}

const yujin2 = IdolModel2.fromObject({
  name: 'yujin2',
  year: 2004,
});
console.log(yujin2);