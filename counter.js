var x = document.getElementById("myAudio"); 

setTimer = () => {
    var timerValue=document.getElementById("set_timer").value;
    setInterval(()=> {
        x.play();
        console.log(timerValue);
    },timerValue*1000);
}

stopTimer = () => {
    timerValue=null;
    console.log();
}


function play(){
    
    
}