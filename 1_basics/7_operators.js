/**
 * Operators
 *
 * 연산자
 */

/**
 * 산술 연산자
 *
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);
console.log(10 * (10 + 10));

console.log('---------------');
/**
 * 증가와 감소
 */

let number = 1;
++number;
number++;

--number;
number--;

let result = 1;
console.log(result);

result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);

console.log('---------------');
/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */

let sample = '99';
console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = '안유진';
console.log(+sample); // Not a Number

sample = '99';
console.log(-sample);
console.log(typeof -sample);

/**
 * 할당 연산자
 */

number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

console.log('---------------');
/**
 * 비교 연산자
 *
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');
console.log('---------------');
console.log(5 === 5);
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');
console.log('---------------');
console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');
console.log('---------------');
console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');

console.log('---------------');
/**
 * 대소 관계 비교 연산자
 */

console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자
 */

console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');

/**
 * 논리 연산자
 *
 * 1) &&
 * 2) ||
 */

console.log('---------------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('---------------');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('---------------');
console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);

console.log('---------------');
console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);

/**
 * 단축 평가
 *
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */

console.log('---------------');
console.log(true && '아이브');
console.log(false && '아이브');
console.log(true || '아이브');
console.log(false || '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');

/**
 * 지수 연산자
 */
console.log('---------------');
console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 */
console.log('---------------');
let name;
console.log(name);

name = name ?? 'chocola';
console.log(name);

name = name ?? 'ive';
console.log(name);

let name2;
name2 ??= 'chocola';
console.log(name2);