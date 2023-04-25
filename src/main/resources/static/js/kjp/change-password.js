// 비밀번호 확인란 유효성 검사 함수
function isValidCheckPassword(password, checkPassword) {
  return password === checkPassword;
}

$(document).ready(function () {
  const newPassword = $('input[name="memberPassword"]');
  const newPasswordCheck = $('input[name="checkPassword"]');
  const passwordRegex = $('.password-regex');
  const warnText = $('.warn-text');
  const changeButton = $('.change-button');

  // 비밀번호 입력란 blur 이벤트 리스너 등록
  newPassword.on('blur', function () {
    const password = newPassword.val();

    if (isValidPassword(password)) {
      passwordRegex.removeClass('error').text('대/소문자, 숫자, 특수문자 중 2가지 이상의 조합으로 10자 이상');
      newPassword.removeClass('error');
    } else {
      passwordRegex.addClass('error').text('비밀번호는 10자 이상이며, 대/소문자, 숫자, 특수문자 중 2가지 이상의 조합이 필요합니다.');
      newPassword.addClass('error');
    }

    // 변경 버튼 활성화/비활성화
    changeButton.prop('disabled', !isValidPassword(password) || !isValidCheckPassword(password, newPasswordCheck.val()));
  });

  // 비밀번호 확인란 blur 이벤트 리스너 등록
  newPasswordCheck.on('blur', function () {
    const password = newPassword.val();
    const checkPassword = newPasswordCheck.val();

    if (isValidCheckPassword(password, checkPassword)) {
      warnText.removeClass('error').text('');
      newPasswordCheck.removeClass('error');
    } else {
      warnText.addClass('error').text('비밀번호와 일치하지 않습니다.');
      newPasswordCheck.addClass('error');
    }

    // 변경 버튼 활성화/비활성화
    changeButton.prop('disabled', !isValidPassword(password) || !isValidCheckPassword(password, checkPassword));
  });
});
