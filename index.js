var numberOfButtons=document.querySelectorAll(".drum").length;
for (var i=0 ; i<numberOfButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick ); /*notice that this selector selects the firs button only*/
}


function handleClick(){
    this.classList.toggle("white");
}

    // var sound = new Audio("sounds/tom-1.mp3");
    // sound.play();