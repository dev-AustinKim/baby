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

$(".btn").on("click", function(){
    let active = $(this).attr("class").split(" ")
    for(let i=0; i<active.length; i++){
        if(active[i] === "btn-active"){
            return;
        }
    }
    $(this).addClass("btn-active").siblings().removeClass("btn-active");
});
