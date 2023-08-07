
/*
객체(Object) : 
-객체는 관련된 데이터와 함수의 집합
-사용자 정의 자료형 
-내가 담고 싶은 변수(데이터) 묶는다.
-여러가지 프로퍼티(key:value)로 구성 된다.
*/


/* 기본 형태 
var 객체이름 = {

    프로퍼티1이름 : 프로퍼티1의값,

    프로퍼티2이름 : 프로퍼티2의값,

    ...

};
*/

//객체생성1
const gildong = {
    name1: "홍길동",
    age : 20,
    adress : "경기도 성남시"
};

const nabi = {
    name2: "나비",
    age : 30,
    address :"인천광역시"
};

//객체 출력1
console.log(gildong);
console.log(nabi);


//객체 생성2
const ramen = {
    name1 : "뽀글이",
    price : 3500
};

const chicken = {
    name1 : "슈넬치킨",
    price : 5500
};

const coke = {
    name1 : "코카콜라",
    price : 1500
};

const americano = {
    name1 : "아메리카노",
    price : 3500
};
//객체출력2
console.log("====메뉴판====");
console.log(ramen);
console.log(chicken);
console.log(coke);
console.log(americano);
//------------------------------------------------------------------------

/*
//object를 생성하면 주소값 
//const 변수를 이용해서 주소값을 변경 못하게
//고정시킨다. 
*/

//------------------------------------------------------------------------
//객체의 프로퍼티(속성)에 접근하는 방법 (프로퍼티 다루기(읽기, 쓰기))
//.닷연산 : 객체의 키를 통해 값을 가져옴 (객체내에 캡슐화되어있는것에 접근)
//[] 대괄호 연산: 객체의 키를 조작하여 값을 가지고 올 수 있다. 배열이름[인덱스]

// .점표기법으로 price속성에 접근하여 가격변경
ramen.price +=1000;
chicken.price +=1000;
coke.price +=1000;
americano.price +=1000;

// [] 괄호 표기법으로 가격변경 ([]대괄호 이용시 문자열로 key를 줘야함)
// arr[특정인덱스] = 추가할 요소
ramen['price'] +=1000;
chicken['price']+=1000;
coke['price'] +=1000;
americano['price'] +=1000;

//결과출력
console.log("====메뉴판====");
console.log(ramen);
console.log(chicken);
console.log(coke);
console.log(americano);
//------------------------------------------------------------------------



//user 만들어서 게임 쿠키들을 저장하는 객체를 생성하기 
//쿠키 이름, 등급, 레벨, 속성 
const cookie1 = {
    cookie_name : "천사맛쿠키",
    cookie_level : 10,
    cookie_grade : "S",
    cookie_skills : ['악령퇴치','소생']
};

//반복문을 이용해서 출력 
//1. key를 가지고 온다.
//2. cookie1 변수 안에 key가 있니? 
//   키 존재 true, 존재x false 

for(let i in cookie1){
    console.log(i);
    console.log(cookie1[i]);
}


//객체 배열 생성 및 순회 
//객체도 배열에 저장 될 수 있다. 
// for, for each, for of(value)문 이용 

//객체 생성
const arr = [
    {name1: "강아지", age:2}, //0번방
    {name1: "고양이", age:1}, //1번방
    {name1: "도마뱀", age:1}, //2번방
    {name1: "토끼", age:2}, //3번방 
]

console.log(arr);  

//기존 for문 이용해 출력
for(let i=0; i<arr.length; i+=1){
    console.log(arr[i].name1);
    console.log(arr[i].age);
}

//for of(value) 문 이용해 출력 
for(let item of arr){
    //{name1: "강아지", age:2};
    console.log(item)
}


//예제(잔디)

//객체를 배열에 저장  
const Member = [
    {id: 'aaaaa', name:'박신우', password: 'aa', email: 'aaa@aaa.aaa', gender:'F', age: 33 },
    {id: 'bbbbb', name:'강고결', password: 'bb', email: 'bbb@bbb.bbb', gender:'M', age: 34 },
    {id: 'ccccc', name:'남나눔', password: 'cc', email: 'ccc@ccc.ccc', gender:'M', age: 28 },
    {id: 'ddddd', name:'도대담', password: 'dd', email: 'ddd@ddd.ddd', gender:'M', age: 35 },
    {id: 'eeeee', name:'류라라', password: 'ee', email: 'eee@eee.eee', gender:'F', age: 17 },
    {id: 'fffff', name:'문미미', password: 'ff', email: 'fff@fff.fff', gender:'F', age: 20 },
    {id: 'ggggg', name:'박보배', password: 'gg', email: 'ggg@ggg.ggg', gender:'M', age: 26 },
    {id: 'hhhhh', name:'송성실', password: 'hh', email: 'hhh@hhh.hhh', gender:'M', age: 41 },
    {id: 'iiiii', name:'윤예의', password: 'ii', email: 'iii@iii.iii', gender:'F', age: 28 },
    {id: 'jjjjj', name:'정재주', password: 'jj', email: 'jjj@jjj.jjj', gender:'M', age: 23 },
]
console.log(Member);

//for..of문 이용 출력 
for(let item of Member){
    console.log(item)
}


//------------------------------------------------------------------------
//자바스크립트는 자바와 다르게 
//객체를 생성하고 나서 멤버변수를 추가할 수 있다.


//추가하는 방법
//변수명['key'] = 값;
//중간에 변수를 추가하는 것은 좋으나 나중에 유지보수가 힘들다.
const user1 = {
    id : "love",
    pw : "love"
}

console.log(user1); //기존 객체 출력 

user1['nickname'] = "empress";  //nickname을 추가
console.log(user1); //nickname이 추가된 객체 출력 


//삭제 delete 객체명.필드명
delete user1.nickname
console.log(user1);


//---------------------------------------------
// 자바스크립트에서 객체를 생성하는 방법2 
// 두가지가 있다.
// obj1 = {} 중괄호를 이용하는 방법.  (리터럴 표기(literal notation)를 이용한 방법)
// obj2 = new Object(); 객체를 이용하는 방법. (생성자 함수(constructor function)를 이용한 방법)


// obj1 = {} 중괄호를 이용하는 방법 (리터럴 표기(literal notation)를 이용한 방법)
const person1 = {name1:"박신우",age:33};
const person2 = {name1:"강고결",age:34};
console.log(person1); 
console.log(person2);



//매개변수 받아서 객체를 생성하는 함수 만들기
const person3 = makePerson("남나눔",28); 
const person4 = makePerson("문미미",20); 
console.log(person3);
console.log(person4);

function makePerson(name1,age){
    return{
        name1: name1,
        age: age
    }
}

//매개변수 값이랑 멤버 key 이름이 같은 경우에는 
//key 부분을 생략해도 된다. 
function makeperson(name1,age){
    return{
        name1,
        age
    }
}
//-------------------------------------

//생성자 object 
//constructor function 이용해서 객체 생성 
//생성자 함수(constructor function)를 이용한 방법

const person5 = new Person('송설실',41);  //new 연산자를 통해 Person 객체의 생성자 함수를 호출한다.
console.log(person5);
function Person(name1,age){  //생성자 함수 만들기 : 직접 생성자 함수를 만들어 객체를 생성할 수 있다. 
    //객체를 생성할 때 각각 this  (this는 자신이 속한 객체를 참조하는 '자기 참조 변수'다.)
    //this = {}
    this.name1 = name1;
    this.age = age;  
    //return this; 생략가능 
}

//-----------------------------------------
/*예제   
생성자 함수를 이용해서 객체 생성 후 배열에 저장, 저장 후 출력 
학생들 배열
실제 학생 name, subject, score
생성자 함수를 이용해서 저장하고 출력 ???
*/

const student1 = new student('김길동','자바',100);
const student2 = new student('박길동','디비',50);
const student3 = new student('이길동','화면',85);
const student4 = new student('정길동','서버',60);
const student5 = new student('홍길동','자바',20);

function student(name,subject,score){
    this.name = name;
    this.subject = subject;
    this.score = score;
}

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);


//-=-----------------------------
/*
객체 복사(Cloning)
객체를 복사 할 수 있다.
*/
//객체 복사는 새로운 객체를 만들어서 안에 있는 값을 똑같이 복사 즉, 주소값만 복사를 한 것!

const a = {id:"qwer", pw:"qwer"};
const b = a;

b.id="asdf"; //안바뀜 

console.log(a); //{id: 'asdf', pw: 'qwer'}
console.log(b); //{id: 'asdf', pw: 'qwer'}

//각각 대입하기 
const c = {}; //비어있는 객체 생성
for(key in a){
    c[key] = a[key];
}
console.log(c);

//assign() 객체 복사할 때 사용하는 함수 
//assign(새로운 객체, 기존객체)

const d={};
Object.assign(d,a);
console.log(d);

const e = Object.assign({},d);  
console.log(e);

//여러개를 하나의 객체에 복사를 한다. 

const f ={color: 'red'};
const g ={color: 'pink', size:'big'};

const mix = Object.assign({},f,g); //복사하는 대상 key중에 중복되는 것은 덮어쓴다.
console.log(mix.color); //가장 마지막에 복사한 color: 'pink'가 출력
console.log(mix.size); // size = 'big' 출력 