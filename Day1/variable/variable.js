//변수 : 변수(variable)란 데이터(data)를 저장할 수 있는 메모리 공간을 의미하며, 그 값이 변경될 수 있다.
//전역변수: 프로그램 전체적인 곳에서 사용되는 변수
//지역변수: {} 안에 선언된 것, 함수 내부에 선언된 변수
//자바스크립트는 타입 지정을 안해도 된다. 자바스크립트 알아서 데이터 파악해서 저장

let name1 = "홍길동";
let name2 = '강동원';
//let name1 ="이순신"  //중복허용 x  한번 선언했으면 똑같은 이름으로 선언하지 못한다.
console.log(name1);
console.log(name2);



//상수 : 한번 선언하고 값이 바뀌지 않는 값을 의미
const number = 1;
console.log(number);

number = 10;  //고정된 상수는 변경x (caught TypeError: Assignment to constant variable. 에러 발생)
//console.log(number);

let a=10;
console.log(a);


//호이스팅 (var로 변수 선언시 발생하는 문제점)
//- var로 선언된 변수들을 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것 
//- 호이스팅을 해결하기 위해 let 대체 

//var 문제점
//-호이스팅
//-중복선언 초기화 가능하다.
//-범위 구별 없다.

console.log(b);
var b=10;

console.log(b);
var b=100;
console.log(b);

{
    var c=10000;
    
}

console.log(c);

for(let i=0; i<5; i++){  //반복문
    console.log(i);
}
// console.log(i); //반복문 외부에서는 호출 안됨

