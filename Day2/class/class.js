//파일명: classEx.js

//클래스
// - 객체를 만들기 위한 설계도
// - 객체를 찍어내는 틀!

// 클래스 
//  데이터(저장해야되는 것)
//  메서드(기능)
/*
 기본형태
class 클래스명{
    멤버변수;
    멤버함수(메소드){}
}
*/

// 키워드 class
//  캡슐화 
//   - 클래스와 관련된 것들을 하나로 묶어서 관리
//   - 정보를 은닉!

/*
class Hero{
    // fields(상태)
    name;
    level;
    hp;

    // methods(동작)
    attack();
    move();
    spell();
}
*/



// 동물을 저장하는  클래스 
// 상태 : 이름name,품종breed,나이age
// 동작 : 짖기(bark), 앉기(sit) , 눕기(lieDown)

class Dog{
    _name;
    _breed;
    _age;

    // 생성자?
    //  - 클래스의 객체를 생성할 때 인자를 프로퍼티에 전달하여 생성한다. (객체를 만들 때 필요한 데이터를 전달하여 생성한다.)
    //  - new Dog();
    // 객체를 생성할 때 특별한 메서드
    constructor(name,breed,age){  //인자를 받아 할당한다. 
        this._name = name;  //this는 객체(변수명)을 지칭한다. 
        this._breed = breed;  // this._name, this._breed, this._age는 클래스의 필드(프로퍼티)이다. 
        this._age = age;
    }


    bark(){
        console.log(this._name + "댕댕이가 짖는다.");
    }

    sit(){
        console.log(this._name +"댕댕이가 앉는다.");
    }
    lieDown(){
        console.log(this._name +"댕댕이가 눕습니다.");
    }
}

// 객체 생성
const dog0 = new Dog("뭉치","시고르자브종",2);
const dog1 = new Dog("뽀비","푸들",2);
const dog2 = new Dog("콩이","골든리트리버",2);

//객체 출력 
console.log(dog0);
console.log(dog1);
console.log(dog2);

// 객체 값 읽고 쓰기
//  . ,[] 
//console.clear();

dog0._age += 1;
dog1._age += 1;
dog2._age += 1;

console.log(dog0);
console.log(dog1);
console.log(dog2);

//---------------------------------------------------------------
//클래스 상속 
//상속이 된다 extends
//오버라이딩: 재정의 가능 
class Animal{
    
    _name;
    _breed;
    _age;

    constructor(name,breed,age){
        this._name = name;
        this._breed = breed;
        this._age = age;
    }

    bark(){
        console.log(this._name + "이가 짖는다.");
    }

    sit(){
        console.log(this._name +"이가 앉는다.");
    }
    lieDown(){
        console.log(this._name +"이가 눕습니다.");
    }

}



class cat extends Animal{
    bark(){
        console.log("야옹!")
    }

}

cat1 = new cat();
console.log(cat1);
cat1.bark();

//-------------------------------------------------------   
//instanceOf()
//왼쪽에 있는 객체가 오른쪽에 있는 클래스의 인스턴스인지 확인

class Shape{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    drow(){
        console.log("drawing"+this.color+"color!!")
    }

    getArea(){
        return this.width* this.height;
    }
}

//상속 extends
class Rectangle extends Shape{}
class Triangle extends Shape{

    //재정의(오버라이딩)
    getArea(){
        return(this.width * this.height)/2;
    }

    //toString(){}

    //필드 출력 object 오버라이딩
    toString(){
        return this.width + "너비다";
    }
}


const rect = new Rectangle(20,20,'pink'); //객체 생성
rect.drow();
let res1 = rect.getArea();
console.log(res1);

const tria = new Triangle(30,30,'blue'); //객체 생성 
console.log(tria);
let res = tria.getArea();
console.log(res);

console.log(tria instanceof Rectangle);  //false
console.log(rect instanceof Rectangle); //true 자기 자신이니까
console.log(rect instanceof Shape); //true 부모니까
console.log(rect instanceof Object); //true
//--------------------------------------------------------------------


//클래스 배열 예제(잔디)

class Person{
    _name
    _age
    _height
    _weight

    constructor(name,age,height,weight){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight =weight;
    }
}

class student extends Person{
    _grade
    _major
    
    constructor(name,age,height,weight,grade,major){
        super(name,age,height,weight); //부
        this.grade = grade;
        this.major = major;
    }
}

class Employee extends Person{
    _salary
    _dept

    constructor(name,age,height,weight,salary,dept){
        super(name,age,height,weight);
        this.salary = salary;
        this.dept = dept;
    } 
}

const student1 = new student('강건강',20,178.2,70.0,1,'정보시스템공학과');
const student2 = new student('남나눔',21,187.3,80.0,2,'경영학과');
const student3 = new student('류라라',23,167.0,45.0,4,'정보통신학과');

console.log(student1);
console.log(student2);
console.log(student3);


const Employee1 = new Employee('박보배',26,180.3,72.0,100000000,'영업부');
const Employee2 = new Employee('송성실',38,182.0,76.0,200000000,'기획부');

console.log(Employee1);
console.log(Employee2);

