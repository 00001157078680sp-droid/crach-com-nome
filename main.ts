basic.forever(function () {
    basic.showString("Olá!")
    music.play(music.stringPlayable("D D F F A A C5 C5 ", 120), music.PlaybackMode.UntilDone)
})
