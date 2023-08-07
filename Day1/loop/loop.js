/*

반복문(iteration statements) : 프로그램 내에서 똑같은 명령을 일정 횟수만큼 반복하여 수행하도록 제어하는 실행문
1. while 문
while 문은 특정 조건을 만족할 때까지 계속해서 주어진 실행문을 반복 실행
while (표현식) {

    표현식의 결과가 참인 동안 반복적으로 실행하고자 하는 실행문;

}

2. do / while 문
do / while 문은 표현식의 결과와 상관없이 무조건 한 번은 루프를 실행
do {

    표현식의 결과가 참인 동안 반복적으로 실행하고자 하는 실행문;

} while (표현식);

3. for 문
초기식, 표현식, 증감식

for(초기식;조건식;증감식){
    반복할 명령을 작성!
}
*/

//prompt(메시지,입력창에 보여지는 메시지) 팝업창에 입력을 할 수 있는 창이 뜬다. 
/*
let number = prompt("숫자입력: ") 
alert(number); 

let str = prompt("아무 문자나 입력");
alert(str);
*/

//예제 
//술래잡기 
// 1부터 10까지 숫자 세고 시작!

for(let i = 1; i<=10; i++){
    console.log(i);
}

console.log("찾는다~");

//카운트다운 5,4,3,2,1
for(let i = 5; i>=1; i--){
    console.log(i);
}

console.log("시작~");

/*
continue
-반복 흐름을 강제로 다음으로 넘긴다. 
369게임
숫자에 3,6,9가 들어가면 "짝" 출력
1부터 15까지 반복*/

for(let i=1; i<15; i++){
    if(i===3 || i===6 || i===9){
        console.log("짝");
        continue
    }else{
        console.log(i);
    }
}


// 시작
console.log("### START ###");
// 진행
for (let i = 1; i <= 10; i += 1) {
    if (i === 3 || i === 6 || i === 9) {
        console.log("짝");
        continue;
    }
    console.log(i);
}
// 종료
console.log("### END ###");

/*
break
-코드 실행을 현재 흐름에서 탈출시킴
-반복문에서 사용되는 경우, 가장 가까운 반복흐름을 탈출함

예제
업다운게임 1~10중 입력 정수 찾기
-정답이 입력값보다 크면 UP, 작으면 DOWN 멘트가 나옴
-Q 입력시 게임 종료 
*/



/*

let number = prompt("숫자입력: ") 
let answer = 5
if(number < answer){
    console.log('UP')
}else if(number > answer){
    console.log('DOWN')
}else if(number == answer){
    console.log("정답")
}else if(number == 'Q'){
    console.log("게임종료")
}
*/


for(let i = 1; i<=10; i++){
    let number = prompt("숫자입력: ") 
    let answer = 5;
    if(number < answer){
        console.log('UP')
        
    }else if(number > answer){
        console.log('DOWN')
        
    }else if(number == answer){
        console.log("정답")
        break;
    }else if(number == 'Q'){
        console.log("게임종료")
        break;
    }
}