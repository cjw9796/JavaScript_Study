let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

//프로퍼티 리스너(Property Listener)로 이벤트 등록하기 
btn1.onclick = function(){
    alert('hello 프로퍼티 리스너');
};

//AddEventListener()로 이벤트 등록하기 
btn2.addEventListener('click', function(){
    alert('addEventListener');
});


//이벤트 제거하기 
btn2.addEventListener('click', helloEvent1);
function helloEvent1(){
    alert('addEventListener1');
}

btn2.removeEventListener('click',helloEvent1); //이벤트 제거하기  
