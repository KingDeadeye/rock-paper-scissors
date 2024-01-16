// function getComputerChoice() {
    //     return Math.floor(Math.random() * 3) + 1;
    // }
    
    // let playerSelection;
    // let computerSelection;
    // let playerWins = 0;
    // let computerWins = 0;
    
    // function playRound(playerSelect, computerSelect) {
    //     playerSelection = playerSelect;
    //     computerSelection = computerSelect;
    
    //     if (playerSelection === computerSelection) {
    //         return "It's a draw!";
    //     } else if ((playerSelection === 1 && computerSelection === 2) ||
    //                (playerSelection === 2 && computerSelection === 3) ||
    //                (playerSelection === 3 && computerSelection === 1)) {
    //         computerWins++;
    //         return `You lose! ${getChoiceName(computerSelection)} beats ${getChoiceName(playerSelection)}`;
    //     } else {
    //         playerWins++;
    //         return `You win! ${getChoiceName(playerSelection)} beats ${getChoiceName(computerSelection)}`;
    //     }
    // }
    
    // function getChoiceName(choice) {
    //     switch (choice) {
    //         case 1:
    //             return "Rock";
    //         case 2:
    //             return "Paper";
    //         case 3:
    //             return "Scissors";
    //         default:
    //             return "Invalid Choice";
    //     }
    // }
    
    // function displayResult(result) {
    //     const resultMessage = document.createElement('div');
    //     resultMessage.textContent = result;
    
    //     if (playerWins + computerWins === 5) {
    //         const finalMessage = document.createElement('p');
    //         finalMessage.textContent = playerWins > computerWins ? "You won the game!" : "Computer won the game!";
    //         resultMessage.appendChild(finalMessage);
    //         playerWins = 0;
    //         computerWins = 0;
    //     }
    
    //     document.querySelector('.container').appendChild(resultMessage);
    // }
    
    // function handleButtonClick(choice) {
    //     playerSelection = choice;
    //     playRoundAndDisplay();
    // }
    
    // function playRoundAndDisplay() {
    //     const result = playRound(playerSelection, getComputerChoice());
    //     displayResult(result);
    // }
    
    // document.querySelector('#bt1').addEventListener('click', () => handleButtonClick(1));
    // document.querySelector('#bt2').addEventListener('click', () => handleButtonClick(2));
    // document.querySelector('#bt3').addEventListener('click', () => handleButtonClick(3));
    
    // document.querySelectorAll('button').forEach(button => button.addEventListener('click', playRoundAndDisplay));
    