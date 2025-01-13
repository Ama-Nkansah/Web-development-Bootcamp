const buttons = document.getElementsByClassName("drum");

const sounds =[
  './sounds/crash.mp3',
  './sounds/kick-bass.mp3',
  './sounds/snare.mp3',
  './sounds/tom-1.mp3', 
  './sounds/tom-2.mp3',
  './sounds/tom-3.mp3',
 './sounds/tom-4.mp3'
]


 for(let i=0; i<buttons.length; i++){
  buttons[i].addEventListener('click', function (){handleClick(i)});
 }

function handleClick(index){
  var audio = new Audio(sounds[index]);
  audio.play();
}
