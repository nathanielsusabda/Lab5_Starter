// explore.js
window.addEventListener('DOMContentLoaded', init);


const synth = window.speechSynthesis;
var voiceSelect = document.getElementById("voice-select");
var btn = document.querySelector('button');
var inputTxt = document.getElementById("text-to-speak");
var selected = document.querySelector('select');
var image = document.querySelector('img');

function init() {

  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  btn.addEventListener('click', () => {
    playTxt(inputTxt.value);
  })
}

function playTxt(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = synth.getVoices();
  const selectedOption = selected.selectedOptions[0].getAttribute("data-name");

  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterance.voice = voices[i];
      break;
    }
  }
  image.src = "assets/images/smiling-open.png";
  utterance.addEventListener('end', () => {
    image.src = "assets/images/smiling.png";
  })
  speechSynthesis.speak(utterance);
}

function populateVoiceList() {
  if (typeof speechSynthesis === 'undefined') {
    return;
  }

  const voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}

function speak() {

}