/**
 * Object / 객체
 */

let yujin = {
  name: 'yujin',
  group: 'ive',
  dance() {
    return `dance ${this.name} in ${this.group}`;
  }
};

console.log(yujin);
console.log(yujin.name);
console.log(yujin['name']);
console.log(yujin.dance());

const nameKey = 'name';
const nameValue = 'yujin';

const yujin2 = {
  [nameKey]: nameValue,
};
console.log(yujin2);

yujin2['name'] = 'chocola';
console.log(yujin2);

yujin2['nameEn'] = 'enyujin';
console.log(yujin2);

delete yujin2['nameEn'];
console.log(yujin2);

delete yujin2.name;
console.log(yujin2);

console.log(Object.keys(yujin));
console.log(Object.values(yujin));

const name = 'yujin';
const yujin3 = {
  name
};

console.log(yujin3);