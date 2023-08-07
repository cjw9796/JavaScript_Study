const boardForm = document.getElementById("board-form");
const boardTable = document.getElementById("board-table");
const boardBody = document.getElementById("board-body");
const resetButton = document.querySelector('input[type="reset"]');
const cancelButton = document.querySelector('input[type="button"]');

let articleList = [];

// 글 등록 버튼 클릭 이벤트
boardForm.addEventListener("submit", (e) => {
  e.preventDefault(); // 기본 동작 방지

  const title = e.target.elements.title.value;
  const name = e.target.elements.name.value;
  const pass = e.target.elements.pass.value;
  const content = e.target.elements.content.value;

  // 입력된 값이 없는 경우 경고창 표시
  if (!title || !name || !pass || !content) {
    alert("입력되지 않은 항목이 있습니다.");
    return;
  }

  // 현재 시간을 작성일로 설정
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const createdAt = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;

  // 글번호는 현재 글 개수 + 1로 설정
  const article = {
    id: articleList.length + 1,
    title,
    name,
    pass,
    content,
    createdAt,
    views: 0,
  };

  // 글 목록에 추가
  articleList.push(article);

  // 글 목록 테이블 업데이트
  updateBoardTable();

  // 입력필드 초기화
  e.target.reset();
});

// 초기화 버튼 클릭 이벤트
resetButton.addEventListener("click", () => {
  articleList = []; // 글 목록 초기화
  updateBoardTable();
});

// 취소 버튼 클릭 이벤트
cancelButton.addEventListener("click", () => {
  if (articleList.length === 0) {
    alert("취소할 게시물이 없습니다.");
    return;
  }
  // 가장 최근에 추가된 글 삭제
  articleList.pop();
  updateBoardTable();
});

// 게시글 리스트 테이블 업데이트 함수
function updateBoardTable() {
  // 테이블 내용 초기화
  boardBody.innerHTML = "";

  // 글 목록에 따라 테이블 내용 추가
  articleList.forEach((article) => {
    const tr = document.createElement("tr");
    const idTd = document.createElement("td");
    const titleTd = document.createElement("td");
    const nameTd = document.createElement("td");
    const createdAtTd = document.createElement("td");
    const viewsTd = document.createElement("td");

    idTd.textContent = article.id;
    titleTd.textContent = article.title;
    nameTd.textContent = article.name;
    createdAtTd.textContent = article.createdAt;
    viewsTd.textContent = article.views;

    tr.appendChild(idTd);
    tr.appendChild(titleTd);
    tr.appendChild(nameTd);
    tr.appendChild(createdAtTd);
    tr.appendChild(viewsTd);

    boardBody.appendChild(tr);
  });
}