let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let userScore_span = document.querySelector("#you-score");
let compScore_span = document.querySelector("#comp-score");
let msg = document.querySelector(".msg");
let resetbtn = document.querySelector(".reset");

resetbtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScore_span.innerText = userScore;
    compScore_span.innerText = compScore;
    msg.innerText = "Let's play again!";
    msg.style.backgroundColor = "rgba(0, 0, 0, 0.81)";

})

const showWinner = (userwin , choiceId,compchoose) => {
    if(userwin){
        userScore++;
        userScore_span.innerText = userScore;
        console.log("user wins");
        msg.innerText = `You Wins!  ${choiceId} beats ${compchoose}`;
        msg.style.backgroundColor = "green";

    }
    else{
        compScore++;
        compScore_span.innerText = compScore;
        console.log("comp wins")
        msg.innerText = `Computer Wins! ${compchoose} beats ${choiceId}`;
        msg.style.backgroundColor = "red";
    }
}

const draw = () => {
    console.log("draw");
    msg.innerText = "draw lol! try again";
    msg.style.backgroundColor = "yellow";

}

const compchoice = () => {
    const options = ["rock","paper","scissor"];
    const idx = Math.floor(Math.random()*3);
    return options[idx];

}

const playgame = (choiceId) => {
    console.log("userchoice", choiceId);
    const compchoose = compchoice();
    console.log("compchoice", compchoose);
    if(choiceId === compchoose){
        draw();
        
    }
    else{
        let userwin = true;
        if(choiceId === "rock"){
            userwin = compchoose === "paper" ? false : true;
        }
        else if(choiceId === "paper"){
            userwin = compchoose === "scissor" ? false :true;
        }
        showWinner(userwin, choiceId, compchoose);
    }
}


choices.forEach((choice) => {
choice.addEventListener("click", ()=>{
    const choiceId = choice.getAttribute("id");
    console.log("clicked" ,choiceId);
    playgame(choiceId);
})
});