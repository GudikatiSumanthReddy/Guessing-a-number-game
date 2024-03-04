

let randomNumber = Math.ceil(Math.random()*100);
let gameResult = document.getElementById("game-end");
let userinputmanupation = document.getElementById("userinput");
function checkGuess(){

    let input = parseInt(userinputmanupation.value);
    if(input>randomNumber){
        gameResult.textContent = "Too High! Try Again."
        gameResult.style.backgroundColor="#1e217c";
    }
    
    else if(input<randomNumber){
        gameResult.textContent="Too Low! Try Again. ";
        gameResult.style.backgroundColor="#1e217c";
    }
    else if(input===randomNumber){
        gameResult.textContent="Congratulations! You got it right.";
        gameResult.style.backgroundColor="green";
    }
    
    else{
        gameResult.textContent="Please provide a valid input.";
        gameResult.style.backgroundColor="red";
    }

    
}
