/* 카테고리 모달 */

let modalCheck;
function showWarnModal(modalMessage){
    modalCheck = false;
    $("div#content-wrap").html(modalMessage)
    /* $("div.modal").css("display", "flex").hide().fadeIn(500); */

    $("div.category-modal").css("display", "block").hide().fadeIn(500);
    $("div.modal-background").css("display", "flex").hide().fadeIn(500);
    setTimeout(function(){modalCheck = true;}, 500);
}

function categoryModal() {

    let modalMessage = '';


    showWarnModal(modalMessage);
    $('html, body').css('overflow', 'hidden');
}

$("div.modal-background").on("click", function(){
    $('html, body').css('overflow', 'auto');
    if(modalCheck){
        $("div.modal").fadeOut(500);
        $("div.category-modal").fadeOut(500);
        $("div.modal-background").fadeOut(500);
    }
});

$(".close-btn").on("click", function(){
    $('html, body').css('overflow', 'auto');
    if(modalCheck){
        $("div.modal").fadeOut(500);
        $("div.category-modal").fadeOut(500);
        $("div.modal-background").fadeOut(500);
    }
});
