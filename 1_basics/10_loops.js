/**
 * Loops
 *
 * 1) for
 * 2) while
 */

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// *를 이용해서 6x6의 정사각형을 출력해라

let square = '';
let size = 6;

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (i === 0 || i === size - 1 || j === 0 || j === size - 1) square += '*';
    else square += ' ';
  }

  square += '\n';
}

console.log(square);

console.log('-----------------');

/**
 * for...in
 */

const yujin = {
  name: 'yujin',
  year: 2003,
  group: 'ive'
};

for (const key in yujin) {
  console.log(key, yujin[key]);
}

console.log('-----------------');

const iveArr = ['a', 'b', 'c', 'd'];

for (let key in iveArr) {
  console.log(key, iveArr[key]);
}

console.log('-----------------');

/**
 * for...of
 */

for (let value of iveArr) {
  console.log(value);
}

console.log('-----------------');

/**
 * while
 */

let number = 0;
while (number < 10) {
  number++;
  console.log(number);
}

console.log('-----------------');

/**
 * do...while
 */

number = 0;
do {
  number++;
  console.log(number);
} while(number < 10);

console.log('-----------------');

/**
 * break
 * continue
 */