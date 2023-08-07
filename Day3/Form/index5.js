
/*

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const result = document.querySelector('#result');

// 체크박스 변경 이벤트 리스너 등록
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function() {
    let selectedItems = []; // 선택된 아이템을 저장할 배열
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked && checkbox.id !== 'new') { // 선택된 체크박스만 추출
        selectedItems.push(checkbox.value);
      }
    });
    result.value = selectedItems.join(', '); // 선택된 아이템을 쉼표로 구분하여 결과 창에 출력
  });
});

*/ 