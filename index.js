var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i=0 ; i<numberOfButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonPressed = this.innerHTML;
        clickReaction(buttonPressed);
        buttonAnimation(buttonPressed);
    }); 
} //notice that this selector selects the firs button only

document.addEventListener("keydown",function(Event){
    clickReaction(Event.key);
    buttonAnimation(Event.key);
});



function clickReaction(buttonPressed){
    switch (buttonPressed){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
        default: console.log(buttonPressed);
    }
}



function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);
}