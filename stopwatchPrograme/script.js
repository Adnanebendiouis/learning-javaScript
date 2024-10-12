const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsetime=0;
let isrunning=false;

function start(){
  if(!isrunning){
    startTime = new Date().getTime() - elapsetime;
    timer = setInterval(update,10); 
    isrunning=true;
  }
}
function stop(){
    if (isrunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
      }

}
function reset(){
    clearInterval(timer);
    isrunning = false;
    elapsedTime = 0;
    display.textContent = "00:00:00:00";

}
function update(){
const currentTime = Date.now();
elapsetime = currentTime - startTime;

let hours = Math.floor(elapsetime/(1000 * 60 * 60));
let minutes = Math.floor(elapsetime/(1000 * 60)% 60) ;
let seconds = Math.floor(elapsetime/1000 %60);
let milliseconds = Math.floor(elapsetime % 1000/10);

hours = String(hours).padStart(2,"0");
minutes = String(minutes).padStart(2,"0");
seconds = String(seconds).padStart(2,"0");
milliseconds = String(milliseconds).padStart(2,"0");

display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;


}