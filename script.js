
//algorithm (always make sure to prioritize functionality over looks)
//add an event listener that listend to when a menu item is clicked
// when its clicked display the contents that were hidden
// otherwise hide the hidden contents.


var muteButton = document.getElementById("Mutebutton");

//add event handling
muteButton.addEventListener("click", toggleMute);
function initAudioPLayer(){
  audio = new Audio();
  audio.src ="batmanMusic.mp3";
  audio.loop = true;
  audio.play();
  
}

window.addEventListener('DOMContentLoaded',initAudioPLayer);


function toggleMute() {
 
  if (audio.muted) {
    audio.muted = false;
    muteButton.innerText = "Mute";
  } else {
    audio.muted = true;
    muteButton.innerText = "Unmute";
  }
}

