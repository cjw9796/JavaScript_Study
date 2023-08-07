

//산술연산자
console.log(1 + 1); // 덧셈(add) 
console.log(1 - 1); // 뺄셈(substract)
console.log(1 / 1); // 나눗셈(divide)
console.log(1 * 1); // 곱셈(multiply)
console.log(5 % 2); // 나머지(remainder)
console.log(2 ** 3); // 제곱(exponentiation)

console.log(100 + 200 / 50);  //104
console.log(500 / (200 - 150)); //10
console.log(500 + 2 + "3"); //5023
console.log("3" + 500 + 2); //35002

console.log('my'+'cat'); //mycat 
console.log('1'+2); //12

//증감연산자
let counter = 1;
const count = ++counter; //값을 1 증가시키고 counter 출력
console.log(count); //2

const count2 = counter++; //counter출력 후 값을 1 증가
console.log(count2); //2

//대입연산자
let a =1;
a +=2;
console.log(a);  //3

a -=2;
console.log(a); //1

a*=2;
console.log(a); //2

a/=2; 
console.log(a); //1

a%=2;
console.log(a); //1


//비교연산자
console.log(10<10); //false
console.log(10==10); //true
console.log('10'==10);  //true(값만 비교)
console.log('10'===10); //false (값과 자료형까지 비교)
console.log('10'!==10); //true
console.log('10'!=10); //false

//논리연산자
//and &&  or ||  not ! 

//객체 만들어서 비교
//Object 선언하면 각각의 객체 생성
//각각 다른 주소값을 갖게 된다.
const a2 = {name1:'길동'};
const a3 = a2;
const a4 = {name1:'길동'};
console.log(a2==a3); //true
console.log(a2==a4); //false


//삼항연산자  형식
// 조건 ? true일때 : false일때

console.log("홍길동"==="홍길동"? 'yes':'no');  //yes



