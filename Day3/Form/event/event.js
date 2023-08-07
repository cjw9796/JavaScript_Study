// 입력창에 있는 데이터가 가지고와서 글자 수 확인
// 출력 


// 1.버튼을 클릭하면 실행
// 2. 텍스트 필드에 있는 내용을 가져와서 문자열 length확인
// 3. div에 태그에 결과를 출력 

// 여러가지 버튼 혹은 체크박스, 이미지, 스크롤 , 범위 등등등 
// 하나의 버튼에 여러가지 이벤트를 설정 


const button = document.querySelector("#bttn");

// 한번 클릭하면 실행 
 button.addEventListener("click",()=>{ // 한번 클릭하면 실행 

    const word = document.querySelector("#word").value;
    const result = document.querySelector("#result");

    let count = word.length; 
    result.innerText = `${count}`;


const button = document.querySelector("#bttn");
});


button.addEventListener("dblclick",()=>{ //더블클릭하면 실행 

    const word = document.querySelector("#word").value;
    const result = document.querySelector("#result");

    let count = word.length; 
    result.innerText = `${count}`;


});



