 //새로운 HTML 요소 만들기

 /*

 createElement - 지정한 tagName의 HTML 요소를 생성
 appendChild - 항상 마지막 자식 요소로 추가하므로, 삽입할 요소만 매개변수로 제공하면 된다.
 insertBefore - 매개변수를 두 개 받음. 첫 번째 매개변수는 삽입할 요소이고, 두 번째 매개변수는 삽입할 위치를 정하는 요소이다.
 remove - 해당 요소를 제거
 parentNode - 지정된 노드의 부모를 반환
 */
 let addBtn = document.getElementById("button");
 let inputBox = document.querySelector('input');
 let addBeforeBtn = document.getElementById('before');
 let removeTargetBtn = document.querySelector('#target-remove');
 let removeBtn = document.querySelector('.remove-btn'); 

 //추가 버튼 
 addBtn.addEventListener('click', function () {
     let li = document.createElement('li');
     let ul = document.querySelector('ul');
     li.textContent = inputBox.value;  //input 박스에서 value를 가져온다. 

     let button = document.createElement('button') //추가할 때 x버튼 누르면 삭제 
     button.textContent = 'X';
     button.classList.add('remove-btn');
     button.addEventListener('click', function(){
        event.target.parentNode.remove();
     });
     li.appendChild(button);
     ul.appendChild(li);  //appendChild - 항상 마지막 자식 요소로 추가
     inputBox.value = '';
     inputBox.focus();
 });


 //앞에 추가 버튼 
 addBeforeBtn.addEventListener('click', function(){  
     let li = document.createElement('li');  //새로운 리스트 아이템(li) 요소를 생성
     let ul = document.querySelector('ul');  //HTML 문서에서 첫 번째로 발견되는 ul 요소를 찾아서 변수에 저장
     let targetLi = document.querySelector('li#target');  //HTML 문서에서 id 속성이 'target'인 li 요소를 찾아서 변수에 저장
     console.log(targetLi);  //targetLi 변수에 저장된 요소를 콘솔에 출력
     li.textContent = inputBox.value;  //새로운 리스트 아이템(li)의 텍스트 내용을 입력 상자(inputBox)의 값으로 설정
     ul.insertBefore(li, targetLi);    //ul 요소의 자식 요소로 새로운 리스트 아이템(li)을 추가. 이 때, targetLi 요소의 바로 앞에 추가
 });

 //삭제버튼
 removeTargetBtn.addEventListener('click', function(){
    let targetLi = document.querySelector('li#target');
    targetLi.remove();  //요소를 제거 
 });

 removeBtn.addEventListener('click', function(event){
    console.log(event.target.parentNode);  
    event.target.parentNode.remove();
 })
