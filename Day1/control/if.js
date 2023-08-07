
/*
제어문(control flow statements)
1. if 문
if (표현식) {

    표현식의 결과가 참일 때 실행하고자 하는 실행문;

}
2. if / else 문
if (표현식) {

    표현식의 결과가 참일 때 실행하고자 하는 실행문;

} else {

    표현식의 결과가 거짓일 때 실행하고자 하는 실행문;

}

3. if / else if / else 문
if (표현식1) {

    표현식1의 결과가 참일 때 실행하고자 하는 실행문;

} else if (표현식2) {

    표현식2의 결과가 참일 때 실행하고자 하는 실행문;

} else {

    표현식1의 결과도 거짓이고, 표현식2의 결과도 거짓일 때 실행하고자 하는 실행문;

}
4. switch 문
switch (조건 값) {

    case 값1:

        조건 값이 값1일 때 실행하고자 하는 실행문;

        break;

    case 값2:

        조건 값이 값2일 때 실행하고자 하는 실행문;

        break;

    ...

    default:

        조건 값이 어떠한 case 절에도 해당하지 않을 때 실행하고자 하는 실행문;

        break;

}

*/


/* 
1.
계절찾기
월을 저장하고 봄(3,4,5) 여름(6,7,8) 가을(9,10,11) 겨울(12,1,2)
switch문으로 작성하기
*/

let month= 7;


switch(month){
    case 3:
    case 4:
    case 5:    
        console.log('봄');
        break;
    case 6:
    case 7:
    case 8:
        console.log('여름');
        break;
    case 9:
    case 10:
    case 11:
        console.log('가을')
        break;
    case 12:
    case 1:
    case 2:
        console.log('겨울')    
        break;
    default:
        season = null;
        break;     
}

/* 
2.결과를 옆에 적어보세요!

7 !== 3      
5 === “5”
!(2 <= 5)
56 % 8 === 0
*/

console.log(7 !== 3 ); //true 
//console.log(5 === “5”); //error
console.log(!(2 <= 5));  //false
console.log(56 % 8 === 0);  //true



/*
3. 
if (18세_초과) {
    1200원    // 일반
} else if (12세_초과) {
    720원     // 청소년
} else {
    450원     // 어린이(12세 이하)
}
*/

let age = 5;

if(age>18){
    console.log('1200원 입니다.')
}else if(age>12 && age<=18){
    console.log('720원 입니다.')
}else{
    console.log('450원입니다.')
}

/*
 5. 논리 연산자, 풍부한 조건식 만들기!
 - AND(&&): 두 조건이 모두 참이면, 참(true)
 - OR(||): 둘 중 하나라도 참이면, 참(true)
 - NOT(!): 참을 거짓으로, 거짓을 참으로 변경
 상황 설정: 소개팅 어플, 등급 계산
 - 평가 속성: 외모(0~100), 대화(0~100), 재력(0~100)
 - 결과 등급: S(최상), A(상), B(중), C(하).

 1. 등급변수 생성
 2. 점수에 따른 등급 계산
 모두 90이상 = S
 재력이 90이상이면서 외모와 대화 총점이 160이상 = A
 적어도 하나가 90점 이상이면 B
 나머지는 C
 */


 let face = 90;
 let talk = 70;
 let money = 90;

 if (face >= 90 && talk>=90 && money>=90) {
    console.log('S')
 } else if((face + talk)>=160 && money>=90){
    console.log('A')
 } else if(face>=90 || talk>=90 || money>=90){
    console.log('B')
 } else{
    console.log('C')
 }
