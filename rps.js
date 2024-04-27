let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_sc = document.querySelector("#your-score");
const comp_sc = document.querySelector("#comp-score");
const resetGame = document.querySelector("#rst");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rand_index = Math.floor(Math.random() * 3);
    return options[rand_index];
}

const drawGame = () => {
    console.log("Game is draw");
    msg.innerText = "Game is Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, user_choice, comp_choice) => {
    if (userWin) {
        user_score++;
        user_sc.innerText = user_score;
        msg.innerText = `You Win!! Your ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor = "green";
    } else {
        comp_score++;
        comp_sc.innerText = comp_score;
        msg.innerText = `You Lose! ${comp_choice} beats your ${user_choice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (user_choice) => {
    console.log("user choice = ", user_choice);
    //Generate computer choice
    const comp_choice = genCompChoice();
    console.log("computer choice = ", comp_choice);

    if (user_choice == comp_choice) {
        drawGame();
    } else {
        let userWin = true;
        if (user_choice == "rock") {
            //paper,scissors
            userWin = (comp_choice == "paper") ? false : true;
        } else if (user_choice == "paper") {
            //rock,scissors
            userWin = (comp_choice == "scissors") ? false : true;
        } else {
            userWin = (comp_choice == "rock") ? false : true;
        }
        showWinner(userWin, user_choice, comp_choice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");
        playGame(user_choice);
    });
});
resetGame.addEventListener("click",()=>
{
    user_sc.innerText=0;
    comp_sc.innerText=0;
    msg.innerText="Play Your Move";
    msg.style.backgroundColor="#081b31";
    msg.style.color="antiquewhite";
});