/*
함수

일련의 코드 묶음
여러 줄의 코드를 간편히 호출하기 위함
일반적으로 입력에 따른 결과를 반환
*/

/*
함수: 선언부, 구현부
키워드 : function 함수명(입력값){
      함수가 호출되었을 때 실행하고자 하는 실행문;
      return 값;
}
*/

const max_num = Math.max(20,30,45);
console.log(max_num);

//선언부: 함수를 정의한 영역
function sayHi(username){
    console.log("안녕하세요"+username);
    return "그래"; 
}

//호출 : 함수를 실제 실행하는 영역
sayHi("홍길동");
sayHi("뽀로로");

let a = sayHi("다다야!");
console.log(a);


//선언부: 숫자를 받아서 세제곱 반환
function cube(num){
    return num*num*num;
}

//호출
let res1 = cube(3);
console.log(res1);

let res2 = cube(2);
console.log(res2);

//라면을 생성하는 자판기 만들기(매개변수가 없는 경우)
function createRamen(){
    return "라면";
}

const ramen = createRamen();
console.log(ramen);


//선언부: 만두생성자판기
//재료를 넘겨서 만두를 만든다. (매개변수가 한개)
function createMandoo(menu){
    return menu+"만두"
}

const mandoo1 = createMandoo("고기");
const mandoo2 = createMandoo("김치");


console.log(mandoo1);
console.log(mandoo2);


//선언부 : 김밥생성 자판기 (매개변수가 두개인 경우)
function createKimbob(a,b){
    return a+b+"김밥";
}

const kimbob1 = createKimbob("참치","멸치");
const kimbob2 = createKimbob("스팸","김치");

console.log(kimbob1);
console.log(kimbob2);

//매개변수에 기본값 설정(디폴트 매개변수) 
function show(name="무명", age=0){
    console.log("이름:" + name + "나이:"+ age);
}
show("가나다", 20);
show();  //undefined 발생, 매개변수에 기본값 설정 후에는 0출력 

//반환값이 없는 함수 
// return 함수 종료 or 값 반환 후 끝 
function test(){
console.log("반환값 없는 함수");
    return;
}

test(); 

//스코프 (scope)
//변수의 활동 범위 

function chageA(x){
    x = x+3;
    console.log(x);
}
chageA(10);
//console.log(x);

let y = 100;

function chageB(){
    console.log(y);
    let mag = "hello";

    function chageC(){   //함수 안에 함수 선언 가능하다. 
        console.log(msg);
        console.log(y);
        let msg2 = "world";
    }
    //chageC();
    //console.log(msg2);

}
chageB();




//함수를 변수에 담을 수 있다. 
//익명함수 : 이름이 없다. 
const print = function(){
    console.log("print");
}

print();
console.log(print);




/*나머지 매개변수(...매개변수){

}
*/

//여러개의 매개변수가 넘어 올 때 사용하는 방법
//배열형태로 저장시킨다. 

function info(one,...args){
    console.error(one);
    //console.error(args);
    //반복문 for each문 
    //in 인덱스 번호 
    //of
    for(temp of args){
        console.log(temp);
    }
}
info("java","1",1,33.14);

/*
자바스크립트 배열: 자료구조(스택, 큐) 
 큐 push() -> 맨 마지막  
 shift() -> 제일 앞쪽에 데이터를 꺼낸다. 
             두번째 있는 데이터를 앞으로 밀어준다. 
스택 push() -> 가장 마지막에 저장한다. 
    pop() -> 가장 마지막 요소를 꺼내온다. 
*/

let fruit = ["사과", "바나나", "애플망고"];
fruit.push("딸기");
alert(fruit.pop()); 
console.error(fruit.shift());

//배열도 매개변수로 전달 될 수 있다.
//주소값을 넘긴다. 
//배열이 파라미터로 전달되는 경우 원본이 전달됨(call by reference) 
function info(fruit){
    for(fruit1 of fruit){
        console.warn(fruit1);
    }
}
info(fruit);


//값이 넘어올 때 복사된 값이 넘어온다. (call by value)
let a3 = 10;
function show(num){
    console.log(num);
    return num +1; 
}

show(a3);
console.error(show(a3));  //11
console.error(a3);   //10 

//






/* 
열차 예매
-목적지를 선택하는 함수
-열차 종류를 선택하는 함수
각각 만든 후 총 운임비를 계산해보기 
*/

// ver1. 값을 매개변수로 전달 후 요금 출력하기
function objection(o){
    if(o=='춘천'){
        return 5000;
    }else if(o=='부산'){
        return 30000;
    }else if(o=='대구'){
        return 20000;
    }else if(o=='수원'){
        return 10000;
    }
}

console.log( objection('춘천'));


function train(t){
    if(t=='ktx'){
        return 10000;
    }else if(t=='새마을호'){
        return 5000;
    }else if(t=='무궁화호'){
        return 3000;
    }
}

console.log( train('ktx'));

console.log('총 운임비는'+(objection('춘천')+train('ktx'))+'입니다.');

// ver2. 값 입력받아서 요금 출력하기 
let o = prompt("목적지");
function objection(o){
    if(o=='춘천'){
        return 5000;
    }else if(o=='부산'){
        return 30000;
    }else if(o=='대구'){
        return 20000;
    }else if(o=='수원'){
        return 10000;
    }else{
        console.log('올바른 목적지가 아닙니다.')
    }
}

let t = prompt("기차종류");
function train(t){
    if(t=='ktx'){
        return 10000;
    }else if(t=='새마을호'){
        return 5000;
    }else if(t=='무궁화호'){
        return 3000;
    }else{
        console.log('올바른 열차가 아닙니다.')
    }
}

console.log('총 운임비는'+(objection(o)+train(t))+'입니다.');