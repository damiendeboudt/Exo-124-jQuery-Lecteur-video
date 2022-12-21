// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
let player = $('.player__video').first();
let progress = $('.progress__filled').first();
let buttonPlay = $('.player__button').first()
let bool = true
console.log(bool)

    //condition avec booléen
    buttonPlay.on('click', ()=>{
        if (bool === true) {
            player.get(0).play()
            bool = false
            buttonPlay.html("| |")
        }
        else{
            player.get(0).pause()
            bool = true
            buttonPlay.html("►")
        }
    })

        //changement volume
$('#volume').change(function() {
    player.prop('volume', this.value);
});

    //barre progression
player.on('timeupdate', function() {
    let progress = (this.currentTime / this.duration) * 100;
    $('.progress__filled').css('width', progress + '%');
});