$(document).ready(function () {
    const emailInput = $('input[name="email"]');
    const emailBtn = $('.email-btn');
    const pwChangeWrap = $('.pw-change-wrap');
    const sendEmailWrap = $('.send-email-wrap');
  
    // 이메일 정규식 검사 함수
    function isValidEmail(email) {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    }
  
    // 이메일 입력란 blur 이벤트 리스너 등록
    emailInput.on('keyup', function () {
      const email = emailInput.val();
  
      if (isValidEmail(email)) {
        emailInput.removeClass('error');
        emailBtn.prop('disabled', false);
      } else {
        emailInput.addClass('error');
        emailBtn.prop('disabled', true);
      }
    });
  
    // 이메일 발송 버튼 클릭 이벤트 리스너 등록
    emailBtn.on('click', function () {
      pwChangeWrap.hide();
      sendEmailWrap.show();
    });
  });
  