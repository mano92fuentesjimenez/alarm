const sound = require("sound-play");


// $ mplayer foo.mp3
sound.play('alarm.mp3', function(err){
  if (err) throw err

})
