// 1) 대상 DOM 객체 가져오기
const input = document.querySelector("#answer-c");
// 2) 감시를 시작
input.addEventListener("change", function(event) {
    // 3) 처리를 수행
    // 이벤트 발생 객체를 가져옴
    const checkbox = event.target;
    const listItem = checkbox.parentNode;
    // 체크여부에 따라 동작을 수행
    if (checkbox.checked) {
        // 클래스 부여 => CSS 스타일링 적용
        listItem.classList.add("text-primary");
    } else {
        // 클래스 제거 => CSS 스타일링 제거
        listItem.classList.remove("text-primary");
    }
});


//장바구니 담기 

const menucart=[];
const resultDiv = document.querySelector("#order-list");

const menuButtons = document.querySelectorAll("#practice-3 button");

for(let i =0; i<menuButtons.length; i++){

    //각각 버튼에 이벤트 
    menuButtons[i].addEventListener("click",function(e){
        const btn = e.target;
        const menuName = btn.innerText;

        menucart.push(menuName);

        resultDiv.innerText = `[${menucart}이 주문이 되었습니다.]`
    });
    
}


