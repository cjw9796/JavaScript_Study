/*
배열
-여러 변수를 하나로 묶는 것!
-[값, 값2, 값3]
-값이 고정되어 있지 않고 서로 다른 타입들을 저장 할 수 있다.
*/

let arr1 = [1,"java", 3.14]; //-값이 고정되어 있지 않고 서로 다른 타입들을 저장 할 수 있다.
let arr2 = Array(2,"html",true);

let arr3 = [];


//1. 인덱스 번호를 주고 직접 저장
let arr4 = ['javascript']; //배열 하나 생성
arr4[1] = 10; //배열에 값 추가

console.log(arr4);  //배열 요소 출력
console.log(arr4.length); //배열 길이 출력


//2. push()사용하여 배열에 값 저장 
arr4.push(10000);
console.log(arr4);

//3. arr.length 
arr4[arr4.length] = 100000;
console.log(arr4[5]);  //undefined 배열의 요소가 없는 부분을 홀(hole)

let arr5 = [5,2,1,3,10]; //배열의 요소를 정렬 
arr5.sort();
console.log(arr5); //[1, 10, 2, 3, 5]

/* isArray()  Array.isArray() 메서드는 인자가 Array인지 판별
객체가 Array라면 true, 아니라면 false.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];

Array.isArray(fruits); 

//결과 : true

/* instanceof 
/instanceof 연산자를 사용하면 객체가 특정 클래스에 속하는지 아닌지를 확인할 수 있다.

*/
class Rabbit {}
let rabbit = new Rabbit();

// rabbit이 클래스 Rabbit의 객체인가요?
alert( rabbit instanceof Rabbit ); // true


//1.초기 배달 목록 
let menu = ['샌드위치','초밥','치킨'];
let price = [11000,16000,19000];
console.log(menu); //['샌드위치', '초밥', '치킨']
console.log(price); // [11000, 16000, 19000]

//2. price 배열에 배달비 추가 
price[0] += 2000;
price[1] += 2000;
price[2] += 2000;

console.log(price); // [13000, 18000, 21000]

//3. 배열 요소 추가하기 
menu.push('떡볶이', '튀김', '순대');
console.log(menu);  // ['샌드위치', '초밥', '치킨', '떡볶이', '튀김', '순대']

price.push(3000,3000,4000);
console.log(price);  //[13000, 18000, 21000, 3000, 3000, 4000]

//4. 배열과 반복문 
//for 문 이용하여 배달음식 합계금액 출력 
let sum = 0;
for(let i=0; i<price.length; i++){
    sum += price[i];
}
console.log(sum);  //62000

//reduce 함수 사용하여 출력 
const sum2 = price.reduce((a,b) => (a+b));
console.log(sum2);  //62000 









