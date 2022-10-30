// expose.js

window.addEventListener('DOMContentLoaded', init);

var select = document.querySelector('select');
var image = document.querySelector('#expose img');
var btn = document.querySelector("button");
var audio = new Audio();
var volumehorn = document.getElementById("volume");
var image2 = document.querySelector('#volume-controls img');
const confetti = new JSConfetti();



function init() {

  select.addEventListener("change", function(){
    if(select.value == "air-horn"){
      image.src = "assets/images/air-horn.svg";
      audios.src = "assets/audio/air-horn.mp3";
    } else if (select.value == "car-horn"){
      image.src = "assets/images/car-horn.svg";
      audios.src = "assets/audio/car-horn.mp3";
    } else if (select.value == "party-horn"){
      image.src = "assets/images/party-horn.svg";
      audios.src = "assets/audio/party-horn.mp3";
    } 
  })

  btn.addEventListener("click", function(){
    if(select.value == "air-horn"){
      audio.src = "assets/audio/air-horn.mp3";
      audio.play();
    } else if (select.value == "car-horn"){
      audio.src = "assets/audio/car-horn.mp3";
      audio.play();
    } else if (select.value == "party-horn"){
      audio.src = "assets/audio/party-horn.mp3";
      audio.play();
      confetti.addConfetti();
    } 
  })

  volumehorn.addEventListener("change", function(){
    audio.volume = parseFloat(volumehorn.value) / 100;
    if(volumehorn.value == 0){
      image2.src = "assets/icons/volume-level-0.svg"
    } else if(volumehorn.value > 0 && volumehorn.value < 33){
      image2.src = "assets/icons/volume-level-1.svg"
    } else if (volumehorn.value > 32 && volumehorn.value < 67){
      image2.src = "assets/icons/volume-level-2.svg"
    } else {
      image2.src = "assets/icons/volume-level-3.svg"
    }
  })
  


}