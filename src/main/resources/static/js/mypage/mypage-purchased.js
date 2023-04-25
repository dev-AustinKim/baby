/* mypage-purchased.html */

/* 제목 */
let $infoTitles = $(".purchased-one")
/* 내용 */
let $infoContents = $(".purchased-content")

$infoTitles.on("click", function(){
    let index = $(this).parent().index()
    $infoContents.eq(index).show()
})