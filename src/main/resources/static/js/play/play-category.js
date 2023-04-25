/* 좋아요 바꾸기 */
$('.new-like-button img, .this-week-like-button img, .like-button img').click(function() {
    var currentState = $(this).attr('data-state');
    if (currentState === 'unlike') {
        $(this).attr('src', '/static/images/like.png');
        $(this).attr('data-state', 'like');
    } else {
        $(this).attr('src', '/static/images/unlike.png');
        $(this).attr('data-state', 'unlike');
    }
});
  