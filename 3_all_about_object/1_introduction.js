/**
 * All about objects
 *
 * 객체를 선언할 때
 * 1) {}
 * 2) 클래스, 인스턴스화
 * 3) function
 */

// 생성자 함수
function IdolFunction(name, year) {
  this.name = name;
  this.year = year;
}

const yujin = new IdolFunction('yujin', 2003);
console.log(yujin);