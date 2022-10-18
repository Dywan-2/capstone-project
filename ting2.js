var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

 function start()
 {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
 }

 recognition.onresult = function(event) {
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content=="Rock"){
      speak();
    }else{
      lose();
    }
 }
 function speak(){
   var apiting=window.speechSynthesis;
   var thingything="you wonnnn yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay!!!";
   var convertspeech=new SpeechSynthesisUtterance(thingything);
   apiting.speak(convertspeech);
 }
 function lose(){
  var apiting2=window.speechSynthesis;
   var thingything2="you lost ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
   var convertspeech2=new SpeechSynthesisUtterance(thingything2);
   apiting2.speak(convertspeech2);
 }