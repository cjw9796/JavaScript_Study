

//1. 숫자(number) : 자바스크립트는 정수와 실수를 따로 구분하지 않고 모든 수를 실수 하나로만 표현 
let Num1 = 10; // 소수점을 사용하지 않은 표현
let Num2 = 10.22 //소수점을 사용한 표현 
console.log(Num1);  //10
console.log(Num2);  // 10.22




//2. 문자열(string) : 큰따옴표("")나 작은따옴표('')로 둘러싸인 문자의 집합
let str1 = "홍길동" //큰따옴표 사용
let str2 = '홍길동' //작은따옴표 사용


//3. 불리언(boolean): 불리언 값은 참(true)과 거짓(false)을 표현
console.log(10<10); //false
console.log(10==10); //true


//4. undefined :  '타입'이 정해지지 않은 것을 의미
//   null : '값'이 정해지지 않은 것을 의미 
let num;
console.log(num); //초기화하지 않았으므로 undefined 값을 반환함.

let str = null; //object 타입의 null 값
console.log(str);

//typeof, 타입 확인

console.log(typeof 1234); //number
console.log(typeof 3.14); //number
console.log(typeof "안녕"); //string
console.log(typeof true); //boolean
console.log(typeof null); //object
let bool = true;
console.log(typeof bool); //boolean

