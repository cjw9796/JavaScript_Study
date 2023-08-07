/*
//문제1 
let time = prompt('초 입력');
function cal_time(time){

    if(time< 24*60*60){
        hour = time / (60*60);
        time = time - hour*60*60;
        
        minute = hour / 60;
        time = time - minute*60;
        second = time;
        
        return hour, minute, second;
        
    }else{
        console.log("입력시간이 하루를 초과합니다.")
    }

}
console.log(cal_time(time));
console.log(hour+'시'+minute+'분'+second+'초' +'입니다.');
*/

/*
//문제2 
let totalprice = prompt("소비자가 입력")
function cal_productPrice(totalprice){  //제품 가격을 반환하는 함수
    productprice = totalprice * 10 /11;
    return productprice;
}
function cal_tax(totalprice){ // 부가가치세를 출력하는 함수 
    tax = totalprice / 11
    return tax;

}

console.log("제품가격은"+ cal_productPrice(totalprice) + "부가가치세는" + cal_tax(totalprice) +"입니다.")
*/


//문제3 
let contractPrice = prompt('계약금액');
let period = prompt('사용 개월 수');
let cardCode = prompt('카드 코드');

function periodDiscount(contractPrice=0, period){  //사용 개월 수에 따른 할인 금액 
 if(period > 12){
    contractPrice = contractPrice * 20/100;
    return contractPrice;
 }else if(period > 6){
    contractPrice = contractPrice * 10/100;
    return contractPrice;
 }else{
    contractPrice = contractPrice * 0/100;
    return contractPrice;
 }
}

function creditCarDiscount(contractPrice=0, cardCode){ //신용카드 종류에 따른 할인 금액 

    if(cardCode == 13){
        contractPrice = contractPrice * 12/100;
         return contractPrice;
    }else if(cardCode == 12){
        contractPrice = contractPrice  * 8/100;
        return contractPrice;
    }else if(cardCode == 11){
        contractPrice = contractPrice * 5/100;
        return contractPrice;
    }

}

function finalprice(periodDiscount,creditCarDiscount){   //최종요금 계산하는 함수 
    contractPrice = contractPrice-periodDiscount(contractPrice, period)-creditCarDiscount(contractPrice, cardCode);
    return contractPrice;
}

console.log("기간할인금액은"+periodDiscount(contractPrice, period)+"원입니다.");
console.log("카드별 할인금액은"+ creditCarDiscount(contractPrice, cardCode)+"원입니다.")
console.log("최종요금은"+ finalprice(periodDiscount,creditCarDiscount) +"원 입니다.");   


//contractPrice = contractPrice-periodDiscount(contractPrice, period)-creditCarDiscount(contractPrice, cardCode); //최종요금
//console.log("최종요금은"+ contractPrice+"원입니다.");  //정상적으로 실행은 됨 

//문제4 
