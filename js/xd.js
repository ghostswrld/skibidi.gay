console.log(@weedpack);

let counter = 0; let Title = 'restrict -'; let direction = true;
aniTitle = setInterval(function() {
  if (counter == Title.length) direction = false;
  if (counter == false) direction = true;
  counter = (direction == true)  ++counter  --counter;
  newtitle = (counter == 0)    Title.slice(0, counter);
  document.title = '' + newtitle;
}, 400)

window.oncontextmenu = function() {
  return false;
}

function audioPlay() {
  var audio = document.getElementById(audio);
  audio.volume = 0.3;
  audio.play()
}

function videoPlay() {
  var video = document.getElementById(video);
  video.play()
}