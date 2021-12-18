x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

to_number = Number();

if(content == Number) {
  document.getElementById("status").innerHTML = "drawing apple";
} else{
  document.getElementById("status").innerHTML = "The speech recognised a number";
}


 console.log(event); 
 content  = status;

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function preload() {
  draw_apple = loadImage('https://cdn.pixabay.com/photo/2021/01/09/12/58/apple-5902283_1280.png');
}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
