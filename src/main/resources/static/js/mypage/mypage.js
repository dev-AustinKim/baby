/* mypage.html */

/* 로그아웃 버튼 시 모달 */
$(".logout-btn").on('click', function(e)
{
    e.preventDefault();
    $(".modal-container").show();
})

$(".cancel-button").on('click', function(){
    $(".modal-container").hide();
})
