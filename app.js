//ROCK :1 ,PAPER : 2 ,SCISSOR :3


function getComputerChoice() {
    let computerSelected = Math.floor((Math.random() * 3) + 1);
    return computerSelected;
}
let userSelected;
let computerSelected;
let previousResultDiv;



let userWins = 0;
let compWins = 0;
function game(playerSelect, ComputerChoice) {

    userSelected = playerSelect;
    computerSelected = ComputerChoice;


    if (userSelected == 1 && computerSelected == 2) {

        compWins++;
        return (`You lose! Paper beats Rock`);
    } else if (userSelected == 2 && computerSelected == 3) {
        compWins++;
        return (`You lose! Scissors beat paper`);
    } else if (userSelected == 3 && computerSelected == 1) {
        compWins++;
        return (`You lose! Rock beats Scissors `);
    } else if (userSelected == 2 && computerSelected == 1) {
        userWins++;
        return (`You Win! Paper beats Rock`);
    } else if (userSelected == 1 && computerSelected == 3) {
        userWins++;
        return (`You Win! Rock beats Scissor`);
    } else if (userSelected == 3 && computerSelected == 2) {
        userWins++;
        return (`You Win! Scissor beat paper`);
    } else if (userSelected == computerSelected) {

        return ("its a draw ReRoll.... Choose again");
    }
    else {
        return ("User input not valid");
    }

}


function play() {
    if (previousResultDiv) {
        previousResultDiv.remove();
    }

    let result = game(playerOption, getComputerChoice());
    const divv = document.createElement('div');
    divv.textContent = result;
    const div2 = document.createElement('p');


    if ((userWins + compWins) == 5) {


        if (userWins > compWins) {
            div2.textContent = "User Won";
            divv.append(div2);
            userWins = 0;
            compWins = 0;

        } else {
            div2.textContent = "Computer Won";
            divv.append(div2);
            userWins = 0;
            compWins = 0;
        }
    }
    previousResultDiv = divv;
    pk.append(previousResultDiv);

   
}



const buttonmain = document.querySelectorAll('button');
const pk = document.querySelector('.container');



const bt1 = document.querySelector('#bt1');
const bt2 = document.querySelector('#bt2');
const bt3 = document.querySelector('#bt3');
bt1.addEventListener('click', () => {
    playerOption = 1;
});
bt2.addEventListener('click', () => {
    playerOption = 2;
});
bt3.addEventListener('click', () => {
    playerOption = 3;
});
buttonmain.forEach(x => x.addEventListener('click', play));

// for previous part of
// function userPrompt() {
//     let userSelected = prompt("Enter your choice");
//     userSelected = userSelected.toLowerCase();
//     userSelected = (userSelected == 'rock') ? 1 :
//         (userSelected == 'paper') ? 2 :
//             (userSelected == 'scissor') ? 3 :
//                 (console.log("not a valid input"), null);


//     return userSelected;
// }

