console.log("zzz")
const nameRegex = /^[가-힣|a-z|A-Z|]+$/;
const nicknameRegex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
const specialCharacterRegex = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gim;
const birthRegex = /^(19[0-9][0-9]|20\d{2}).?(0[0-9]|1[0-2]).?(0[1-9]|[1-2][0-9]|3[0-1])$/;
const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
const idRegex = /^(?!(?:[0-9]+)$)([a-zA-Z]|[0-9a-zA-Z]){4,}$/;
const passwordNumberRegex = /[0-9]/g;
const passwordEnglishRegex = /[a-z]/gi;
const passwordSpecialCharacterRegex = /[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi;
const emailRegex = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/;

const $joinEmail = $(".join-id");


/* ------------ */
let phoneNumberCheck;
let code;

let joinBlurMessages = [
    '이메일을 입력하세요.',
    '비밀번호를 입력하세요.',
    '비밀번호 확인을 위해 한번 더 입력하세요.',
    '이름을 입력하세요.',
    '휴대폰 번호를 입력하세요.',
    '인증번호를 입력하세요',
    '닉네임을 입력하세요.',
    '아이디를 입력하세요',
    '생년월일을 입력하세요.',
    '성별을 선택하세요.'
];
let joinRegexMessages = [
    '이메일 주소를 확인하세요.',
    '공백 제외 영어 및 숫자, 특수문자 모두 포함하여 10~20자로 입력해주세요.',
    '위 비밀번호와 일치하지 않습니다. 다시 입력해주세요.',
    '영문 혹은 한글로 2자~20자로 입력해주세요.',
    '휴대폰 번호를 확인하세요.',
    '인증번호를 확인하세요.',
    '닉네임을 확인하세요.',
    '이메일 주소를 확인하세요.',
    '생년월일을 확인하세요.',
];
  /* 주소 입력 API */
  function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if(data.userSelectedType === 'R'){
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
                // 조합된 참고항목을 해당 필드에 넣는다.
                document.getElementById("sample6_extraAddress").value = extraAddr;

            } else {
                document.getElementById("sample6_extraAddress").value = '';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('sample6_postcode').value = data.zonecode;
            document.getElementById("sample6_address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("sample6_detailAddress").focus();
        }
    }).open();
}

    
    let joinEmail = $(".join-id");
    let joinPassword = $(".join-password");
    let checkPassword = $(".check-password");
    let joinName = $(".join-name");
    let joinNickname = $(".join-nickname");
    let joinPhone = $(".join-phone");
    let inputWrap = $(".inputbox-wrap");
    let alertBox = $(".help");
    let inputLength = inputWrap.length;
    let pass = true;

    
let joinCheck;
let joinCheckAll = [false, false, false, false, false, false, false, false, false, false];

    $(".join-id").blur(function() {
        let joinEmail = $(this);
        let alertBox = joinEmail.next(".help");
      
        if (!joinEmail.val()) {
          alertBox.text(joinBlurMessages[0]);
          alertBox.css("color", "red"); 
          pass = false;
          joinCheckAll[0] = false;
        } else if (!idRegex.test(joinEmail.val())) {
          alertBox.text(joinRegexMessages[0]);
          alertBox.css("color", "red"); 
          pass = false;
          joinCheckAll[0] = false;
        } else {
            joinCheckAll[0] = true;
          alertBox.text("");
          alertBox.css("color", ""); 
          console.log(joinCheckAll[0]);
        }
      });
      
      $(".join-password").blur(function() {
        let joinPassword = $(this);
        let alertBox = joinPassword.next(".help");
      
        if (!joinPassword.val()) {
          alertBox.text(joinBlurMessages[1]);
          alertBox.css("color", "red"); 
          pass = false;
          joinCheckAll[1] = false;
        } else if (joinPassword.val().length < 10) {
          alertBox.text(joinRegexMessages[1]);
          alertBox.css("color", "red"); 
          pass = false;
          joinCheckAll[1] = false;
        } else if (
          !(
            passwordNumberRegex.test(joinPassword.val()) &&
            passwordEnglishRegex.test(joinPassword.val()) &&
            passwordSpecialCharacterRegex.test(joinPassword.val())
          )
        ) {
          alertBox.text(joinRegexMessages[1]);
        //   alertBox.css("color", "red"); 
          pass = false;
          joinCheckAll[1] = false;
        } else {
          alertBox.text("");
          joinCheckAll[1] = true;
          console.log(joinCheckAll[1]);
        }
      });
      
      $(".check-password").blur(function() {
        let checkPassword = $(this);
        let joinPassword = $(".join-password");
        let alertBox = checkPassword.next(".help");
      
        if (!checkPassword.val()) {
          alertBox.text(joinBlurMessages[2]);
          alertBox.css("color", "red"); 
          pass = false;
          joinCheck = false;
        } else if (joinPassword.val() !== checkPassword.val()) {
          alertBox.text(joinRegexMessages[2]);
          alertBox.css("color", "red"); 
          pass = false;
          joinCheck = false;
        } else {
          alertBox.text("");
          alertBox.css("color", ""); 
        }
      });
      
      $(".join-name").blur(function() {
        let joinName = $(this);
        let alertBox = joinName.next(".help");
      
        if (!joinName.val()) {
          alertBox.text(joinBlurMessages[3]);
          alertBox.css("color", "red"); 
          pass = false;
          joinCheck = false;
        } else if (!nameRegex.test(joinName.val())) {
          alertBox.text(joinRegexMessages[3]);
          alertBox.css("color", "red"); 
          pass = false;
          joinCheck = false;
        } else {
            alertBox.text("");
            alertBox.css("color", ""); 
        }
      });
      
      $(".join-nickname").blur(function() {
        let joinNickname = $(this);
        let alertBox = joinNickname.next(".help");
      
        if (!joinNickname.val()) {
          alertBox.text(joinBlurMessages[6]);
          alertBox.css("color", "red"); 
          pass = false;
          joinCheck = false;
        } else if (!nicknameRegex.test(joinNickname.val())) {
          alertBox.text(joinRegexMessages[6]);
          alertBox.css("color", "red"); 
          pass = false;
          joinCheck = false;
        } else {
            alertBox.css("color", ""); 
          alertBox.text("");
        }
      });
      


      /* 휴대폰 번호 인증번호 전송 버튼 */
$(".join-phone-btn").on("click", function(){
    const $phoneInput = $(".join-phone");
    const phoneNumber = $phoneInput.val();
    console.log("들어왓니?")
    if(!phoneRegex.test(phoneNumber)) {
      $phoneInput.siblings(".help").text("휴대폰 번호를 확인해주세요.");
      alertBox.css("color", "red"); 
      return;
    }
  
    phoneNumberCheck = true;
    code = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    console.log(code); // 테스트 용도
  
    // 인증번호 전송 버튼 비활성화
    // $(this).attr("disabled", false);
    $(this).attr("disabled", true);
  
    // 3분 카운트 다운
    let seconds = 180;
    const countdownInterval = setInterval(function() {
        let joinPhone = $(this);
        let alertBox = joinPhone.next(".help");
      seconds--;
  
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
  
      const minutesString = String(minutes).padStart(2, "0");
      const secondsString = String(remainingSeconds).padStart(2, "0");
  
      $(".join-phone-btn").text(`${minutesString}:${secondsString}`);
  
      if(seconds === 0) {
        clearInterval(countdownInterval);
        $(".join-phone-btn").text("인증번호 재전송").attr("disabled", false);
        code = 0;
      }
    }, 1000);
  });
  
  /* 인증번호 입력 버튼 */
  
  /* 핸드폰번호 입력하면 인증번호전송 버튼 활성화 */
//   $(".join-check").keyup(function() {
//     const joinPhone = $(this);
//     const checkBtn = $(".join-check-btn");
    
//     if (joinPhone.val().length == 6) {
//       checkBtn.prop("disabled", false);
//       joinCheck = true;
//     } else {
//       checkBtn.prop("disabled", true);
//     }
//   });

  /* -------핸드폰번호 입력하면 검사 후 인증번호전송 버튼 활성화 --------- */
  
$(".join-phone").on("input", function() {
    const $phoneInput = $(this);
    const phoneNumber = $phoneInput.val();
  
    if (!phoneRegex.test(phoneNumber)) {
      $phoneInput.siblings(".help").text("휴대폰 번호를 확인해주세요.");
      $phoneInput.siblings(".help").css("color", "red");
      $(".join-phone-btn").attr("disabled", true);
    } else {
      $phoneInput.siblings(".help").text("");
      $phoneInput.siblings(".help").css("color", "");
      $(".join-phone-btn").attr("disabled", false);
      joinCheck = true;
    }
  });
  

  



  $(".join-check-btn").on("click", function(){
    let joinPhone = $(this);
    let alertBox = joinPhone.next(".help");
    if($(".join-check").val() == code){
        $(".join-check").siblings(".help").text("");
      joinCheck = true;
      return;
    }
    joinCheck = false;
    $(".join-check").siblings(".help").text("인증번호를 확인해주세요.");
    $(".join-check").siblings(".help").css('color','red')
  });





  /* ------------- */
      $(".join-phone").blur(function() {
        let joinPhone = $(this);
        let alertBox = joinPhone.next(".help");

        
        if (!joinPhone.val()) {
            alertBox.text(joinBlurMessages[4]);
            alertBox.css("color", "red"); 
            pass = false;
            joinCheck = false;
        } else if (!phoneRegex.test(joinPhone.val())) {
            alertBox.text(joinRegexMessages[4]);
            alertBox.css("color", "red"); 
            pass = false;
            joinCheck = false;
        } else {
            alertBox.text("");
            joinCheck = true;
        }
      });
      /* -------------- */
      $(".join-check").blur(function() {
        let joinCheck = $(this);
        let alertBox = joinCheck.next(".help");
      
        if (!joinCheck.val()) {
          alertBox.text(joinBlurMessages[5]);
          alertBox.css("color", "red"); 
          pass = false;
          joinCheck = false;
        } else {
            joinCheck = true;
          alertBox.text("");
          alertBox.css("color", ""); 
        }
      });
      


      function send() {
        if(joinCheck == true){
            document.join.submit();
        }
    }