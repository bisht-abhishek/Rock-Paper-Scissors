let user_score = 0;
let comp_score = 0;
let choices = document.querySelectorAll(".choice");
let winText = document.querySelector("#msg");
let userScoreSelect = document.querySelector("#user-score");
let compScoreSelect = document.querySelector("#comp-score");

const showwinner = (user_win ,userChoice, comp_choice) => {

    if(user_win){
        console.log("you won");
        winText.innerText = `Congratulations! You Won ${userChoice} Beats ${comp_choice}`;
        user_score++;
        userScoreSelect.innerText = user_score;
        winText.style.backgroundColor = "#12AD2B";
    }
    else{
        console.log("You Loose");
        winText.innerText = `Sorry! You Loose this time Try Again! ${comp_choice} Beats ${userChoice}`;
        comp_score++;
        compScoreSelect.innerText = comp_score;
        winText.style.backgroundColor = "#FF474C";
    }
}

let playgame = (userChoice) => {
    console.log(userChoice);
    const comp_choice = getCompChoice();
    console.log(comp_choice);

    if(userChoice === comp_choice){
        winText.innerText = "Game Draw";
        winText.style.backgroundColor = "aqua"
    }
    
    else {
        user_win = true;
        if(userChoice === "Rock"){
            user_win = comp_choice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            user_win = comp_choice === "Rock" ? true : false;
        }
        else {
            user_win = comp_choice === "Rock" ? false :true;
        }
        showwinner(user_win, userChoice, comp_choice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});

let getCompChoice = () => {
    const options = ["Rock", "Paper" ,"Scissors"];
    const rindx = Math.floor(Math.random() * 3);
    const compChoice = options[rindx];
    return compChoice;
};