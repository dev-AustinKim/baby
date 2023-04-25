const phoneInput = document.querySelector('input[name="phoneNumber"]');
const sendBtn = document.querySelector('.join-phone-btn');
const checkInput = document.querySelector('input[name="phone-check"]');
const checkBtn = document.querySelector('.join-check-btn');
const confirmBtn = document.querySelector('.check-id-btn');
const idChangeWrap = document.querySelector('.id-change-wrap');
const checkIdWrap = document.querySelector('.check-id-wrap');

let timer = null;
let remainingTime = 180; // 3 minutes
let code = null;

// 함수: 타이머 업데이트
function updateTimer() {
  const minute = Math.floor(remainingTime / 60);
  const second = remainingTime % 60;

  sendBtn.innerText = `재전송 (${minute}:${second < 10 ? '0' : ''}${second})`;
  remainingTime--;

  if (remainingTime < 0) {
    clearInterval(timer);
    sendBtn.disabled = false;
    sendBtn.innerText = '인증번호 전송';
  }
}

// 함수: 인증번호 생성
function generateCode() {
  return String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
}

// 이벤트: 핸드폰 번호 입력 후 버튼 활성화
phoneInput.addEventListener('input', () => {
  sendBtn.disabled = phoneInput.value.length !== 11;
});

// 이벤트: 인증번호 전송 버튼 클릭 시
sendBtn.addEventListener('click', () => {
  code = generateCode();
  console.log(code); // 인증번호 출력 (테스트 용도)

  // 여기에 인증번호를 전송하는 코드를 작성하세요.
  // 인증번호 전송에 성공하면 타이머를 시작합니다.
  sendBtn.disabled = true;
  timer = setInterval(updateTimer, 1000);
});

// 이벤트: 인증번호 입력 후 버튼 활성화
checkInput.addEventListener('input', () => {
  checkBtn.disabled = checkInput.value.length !== 6;
});

// 이벤트: 인증하기 버튼 클릭 시
checkBtn.addEventListener('click', () => {
  if (checkInput.value === code) {
    confirmBtn.disabled = false;
  } else {
    confirmBtn.disabled = true;
  }
});

// 이벤트: 아이디 확인 버튼 클릭 시
confirmBtn.addEventListener('click', () => {
  idChangeWrap.style.display = 'none';
  checkIdWrap.style.display = 'block';
});



