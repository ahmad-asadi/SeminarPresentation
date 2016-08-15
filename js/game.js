/**
 * Created by root on 8/12/16.
 */

function gameBtn() {
    var images = ['gameImg1.jpg', 'gameImg5.jpg', 'gameImg6.jpg'];
    var images1 = [ 'gameImg2.jpg', 'gameImg3.jpg','gameImg4.jpg'] ;

    for(var i = 0 ; i < 10 ; i ++)
    {
        innerGameBtn(images) ;
        // $("#game-img").delay(500) ;
    }

    $("#game-img").delay(2000).fadeOut('fast');
    $("#gameSec").delay(2000).fadeOut('fast');
    $("#notGame").delay(3000).fadeIn('slow');
}

function innerGameBtn(images) {
    var displaying_imgs = 1 ;

    $("#notGame").fadeOut('slow');

    $("#gameSec").fadeIn('slow');

    var gameImg = $("#game-img") ;
    if(!gameImg.length)
        $('<img hidden data-src="./Imgs/' + images[Math.floor(Math.random() * images.length)] + '" src="./Imgs/' + images[Math.floor(Math.random() * images.length)] + '" id="game-img">').appendTo('#gameSec');

    for(var i = 0 ; i < displaying_imgs ; i++) {
        var game = $("#game-img") ;
        game.delay(1000).fadeIn("fast",function () {
            var game = $("#game-img") ;
            game.delay(100).fadeOut("slow") ;
        });
            // .delay(500).fadeOut("fast")
            // .delay(100).attr("src" , "./Imgs/" + images[Math.floor(Math.random() * images.length)])
            // .delay(100).attr("data-src" , "./Imgs/" + images[Math.floor(Math.random() * images.length)]);
        // game.delay(500).fadeOut("fast") ;
        // game.delay(1500).attr("src" , "./Imgs/" + images[Math.floor(Math.random() * images.length)]) ;
        // game.delay(1520).attr("data-src" , "./Imgs/" + images[Math.floor(Math.random() * images.length)]) ;
    }
}
