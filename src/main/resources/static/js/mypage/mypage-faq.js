/* mypage-faq.html, mypage-inquiry.html, mypage-coupon.js */


/* 제목 눌렀을때 아래에 띄워주는 코드 */

/* 제목 */
let $infoTitles = $(".info-title")
/* 내용 */
let $infoContents = $(".info-content")

$infoTitles.on("click", function(){
    console.log(this)
    let index = $(this).parent().index()
    console.log(index)
    $infoContents.eq(index).show()
})


/* 아래 버튼 누를때마다 색 바뀌게 */

$(".btn").on("click", function(){
    let active = $(this).attr("class").split(" ")
    for(let i=0; i<active.length; i++){
        if(active[i] === "btn-active"){
            return;
        }
    }
    $(this).addClass("btn-active").siblings().removeClass("btn-active");
});



