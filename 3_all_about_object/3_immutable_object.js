/**
 * Immutable Object
 */

const yujin = {
  name: 'yujin',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  }
};

console.log(yujin);

/**
 * Extensible
 */

console.log(Object.isExtensible(yujin));

yujin.position = 'vocal';

console.log(yujin);

Object.preventExtensions(yujin);
console.log(Object.isExtensible(yujin));

yujin.groupName = 'ive';
console.log(yujin);

delete yujin.position;
console.log(yujin);

/**
 * Seal
 */

const yujin2 = {
  name: 'yujin2',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  }
};

console.log(yujin2);
console.log(Object.isSealed(yujin2));

Object.seal(yujin2);
console.log(Object.isSealed(yujin2));

yujin2.groupName = 'ive';
console.log(yujin2);

delete yujin2.year;
console.log(yujin2);

/**
 * Freeze
 */

const yujin3 = {
  name: 'yujin3',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  }
};

console.log(Object.isFrozen(yujin3));
Object.freeze(yujin3);
console.log(Object.isFrozen(yujin3));

yujin2.groupName = 'ive';
console.log(yujin2);

delete yujin2.year;
console.log(yujin2);