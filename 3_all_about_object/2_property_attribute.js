/**
 * Property
 *
 * 1) 데이터 프로퍼티 - 키와 값
 * 2) 액세서 프로퍼티 - getter, setter
 */

const yujin = {
  name: 'yujin',
  year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yujin, 'year'));

/**
 * Attribute
 *
 * 1) value - 값
 * 2) writable - false -> 수정 불가능
 * 3) enumerable - 열거가 가능한 지 여부. for...in 등을 사용할 수 있으면 true
 * 4) configurable - attribute의 재정의가 가능한 지 여부. false일 경우 property 삭제나 attribute 변경이 금지됨.
 *                   단, writable이 true인 경우 값 변경과 writable을 변경하는건 가능
 */

console.log(Object.getOwnPropertyDescriptor(yujin, 'name'));
console.log(Object.getOwnPropertyDescriptors(yujin));

const yujin2 = {
  name: 'yujin',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  }
}

console.log(yujin2);
console.log(yujin2.age);
yujin2.age = 32;
console.log(yujin2.age);
console.log(yujin2.year);

console.log(Object.getOwnPropertyDescriptor(yujin2, 'age'));

/**
 * writable
 */
Object.defineProperty(yujin2, 'height', {
  value: 172,
  writable: false,
  enumerable: true,
  configurable: true
});

console.log(yujin2);
console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));
yujin2.height = 64;
console.log(yujin2);

/**
 * enumerable
 */
console.log(Object.keys(yujin2));
for (const key in yujin2) {
  console.log(key);
}

Object.defineProperty(yujin2, 'name', {
  enumerable: false,
});

console.log(Object.keys(yujin2));
for (const key in yujin2) {
  console.log(key);
}

/**
 * configurable
 */
Object.defineProperty(yujin2, 'height', {
  writable: true,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));

Object.defineProperty(yujin2, 'height', {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));
