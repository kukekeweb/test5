function play_se(){
    var ホワイトハッピー = new Audio('ホワイトハッピー.mp3');
    ホワイトハッピー.play();
}


$(function(){
    $('#5曲目').click(play_se);
});
