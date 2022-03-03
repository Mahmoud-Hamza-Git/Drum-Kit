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

var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var snare = new Audio("sounds/snare.mp3");
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");

function clickReaction(buttonPressed){
    switch (buttonPressed){
        case "w":
            tom1.play();
        break;
        case "a":
            tom2.play();
        break;
        case "s":
            tom3.play();
        break;
        case "d":
            tom4.play();
        break;
        case "j":
            snare.play();
        break;
        case "k":
            crash.play();
        break;
        case "l":
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