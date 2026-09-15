/**
 * Variable 선언하기
 *
 * 1) var - 더 이상 사용하지 않는다. 강의에서는 학습 목적으로 사용할 것이다.
 * 2) let
 * 3) const
 */

var name = "코드팩토리";
console.log(name);

var age = 32;
console.log(age);

let ive = "아이브";
console.log(ive);

/**
 * let과 va로 선언하면
 * 값을 추후 변경할 수 있다.
 */

ive = "안유진";
console.log(ive);

const newJeans = "뉴진스";
console.log(newJeans);

// newJeans = "코드팩토리";

/**
 * 선언과 할당
 *
 * 1) 변수를 선언하는 것.
 * 2) 할당
 */

var name = "코드팩토리"; // 선언과 할당을 동시에
console.log(name);

let girlFriend; // 선언만: undefined
console.log(girlFriend);

// const girlFriend2; // const는 할당을 해야 한다.
