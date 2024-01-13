function getComputerChoice() {
    let cs = Math.floor((Math.random() * 3) + 1);
    return cs;
}

let Pwins;
let Cwins;
function game(playerSelect, ComputerChoice) {

    let ps = playerSelect;
    let cs = ComputerChoice;


    if (ps == 1 && cs == 2) {

        Cwins++;
        return (`You lose! Paper beats Rock`);
    } else if (ps == 2 && cs == 3) {
        Cwins++;
        return (`You lose! Scissors beat paper`);
    } else if (ps == 3 && cs == 1) {
        Cwins++;
        return (`You lose! Rock beats Paper`);
    } else if (ps == 2 && cs == 1) {
        Pwins++;
        return (`You Win! Paper beats Rock`);
    } else if (ps == 1 && cs == 3) {
        Pwins++;
        return (`You Win! Rock beats Scissor`);
    } else if (ps == 3 && cs == 2) {
        Pwins++;
        return (`You Win! Scissor beat paper`);
    } else if (ps == cs) {
        console.log("its a draw rerolling");
        return game(userPrompt(), getComputerChoice());
    }
    else {
        return ("User input not valid");
    }

}


function play() {
    Cwins = 0;
    Pwins = 0;
    for (let i = 0; i < 5; i++) {
        let result = game(userPrompt(), getComputerChoice());
        console.log(result);

    }
    if (Pwins > Cwins) {
        console.log("User Won");
    } else {
        console.log("Computer Won")
    }
}

function userPrompt() {
    let ps = prompt("Enter your choice");
    ps = ps.toLowerCase();
    ps = (ps == 'rock') ? 1 :
        (ps == 'paper') ? 2 :
            (ps == 'scissor') ? 3 :
                (console.log("not a valid input"), null);


    return ps;
}
play();