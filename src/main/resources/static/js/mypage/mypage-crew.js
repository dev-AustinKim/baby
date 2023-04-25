/* mypage-crew.html */

/* 인원수에 따라서 progress바 바뀌도록 설정 */
let $countCrew= $(".count-crew").text();
for(let i=0; i < $countCrew.length; i++){
    let crewCount = parseInt($countCrew[i])
    $($(".progress-bar")[i]).css("width", 20 * crewCount + "%" )
}