let playerOne = document.getElementById("playerOneName");
let playerTwo = document.getElementById("playerTwoName");
let playButton = document.getElementById("playButton");
let playerOneName = document.getElementById("nameOne");
let playerTwoName = document.getElementById("nameTwo");
let playerOneStat = document.getElementById("playerOneStat");
let playerTwoStat = document.getElementById("playerTwoStat");
let ties = document.getElementById("ties");
let wyd = document.getElementById("wyd");


const Gameboard = (() => {
    let n = 0
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        n += 1
        square.dataset.index = n;
    });
})();

let playerOneChoices = [];
let playerTwoChoices = [];
let over = false;

const Play = () => {
    const winConditions = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
      ];

    let p1w = 0;
    let p2w = 0;
    let draw = 0;

    let namePlayerOne = playerOne.value;
    let namePlayerTwo = playerTwo.value;
    
    const getNames = () => {
        if (!namePlayerOne == true || !namePlayerTwo == true) {
            playerOneName.innerHTML = "Player 1";
            playerTwoName.innerHTML = "Player 2";
            wyd.innerHTML = "Player 1, make your move";
        }
        if (!namePlayerOne == false || !namePlayerTwo == false) {
            playerOneName.innerHTML = namePlayerOne;
            playerTwoName.innerHTML = namePlayerTwo;
            wyd.innerHTML = namePlayerOne + ", make your move";
        }
        if (!namePlayerOne == true && !namePlayerTwo == false) {
            playerOneName.innerHTML = "Player 1";
            playerTwoName.innerHTML = namePlayerTwo;
            wyd.innerHTML = "Player 1, make your move";
        }
        if (!namePlayerOne == false && !namePlayerTwo == true) {
            playerOneName.innerHTML = namePlayerOne;
            playerTwoName.innerHTML = "Player 2";
            wyd.innerHTML = namePlayerOne + ", make your move";
        }
        playerOne.value = "";
        playerTwo.value = "";
        
    }
    
    const startTheGame = () => {
        playButton.addEventListener("click", () => {
            const go = Play();
            go.getNames();
            go.click();
            go.gameOver();
            go.restartGame();
        })
    }

    const click = () => {
        const squares = document.querySelectorAll(".square");
        squares.forEach(square => {
            square.addEventListener("click", () => {
                if (playerTwoChoices.length < playerOneChoices.length) {
                    if (playerTwoChoices.includes(square.dataset.index) == false && 
                        playerOneChoices.includes(square.dataset.index) == false &&
                        over === false
                        ) {
                        playerTwoChoices.push(square.dataset.index);
                        console.log("P2:",playerTwoChoices);

                        
                        

                        const circle = document.createElement("div");
                        circle.classList.add("circle");
                        square.appendChild(circle);

                        if (!namePlayerOne == false) {
                            wyd.innerHTML = namePlayerOne + ", make your move";
                        }
                        else {
                            wyd.innerHTML = "Player 1, make your move";
                        }
                    }
                }
                else {
                    if (playerTwoChoices.includes(square.dataset.index) == false && 
                        playerOneChoices.includes(square.dataset.index) == false &&
                        over === false
                        ) {
                        playerOneChoices.push(square.dataset.index)
                        console.log("P1:",playerOneChoices);
                        
                        const cross = document.createElement("div");
                        cross.classList.add("cross");
                        square.appendChild(cross);

                        if (!namePlayerTwo == false) {
                            wyd.innerHTML = namePlayerTwo + ", make your move";
                        }
                        else {
                            wyd.innerHTML = "Player 2, make your move";
                        }
                    }
                }
                gameOne.checkTheWin();
            })
        });
    }
    
    const gameOver = () => {
        if (over == true) {
            playerOneChoices = [];
            playerTwoChoices = [];
        }
    }

    const restartGame = () => {
        document.querySelectorAll(".cross").forEach((e) => e.remove());
        document.querySelectorAll(".circle").forEach((e) => e.remove());
        over = false;
    }

    const checkTheWin = () => {
        const playerOneChoicesNum = playerOneChoices.map(choice => parseInt(choice, 10));
        const playerTwoChoicesNum = playerTwoChoices.map(choice => parseInt(choice, 10));
        const allChoices = [...playerOneChoicesNum, ...playerTwoChoicesNum];
        const remainingChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(choice => !allChoices.includes(choice));

        for (let i = 0; i < winConditions.length; i++) {
            const [a, b, c] = winConditions[i];
            if (
                playerOneChoicesNum.includes(a) &&
                playerOneChoicesNum.includes(b) &&
                playerOneChoicesNum.includes(c)
               ) {
                    p1w += 1;
                    playerOneStat.innerHTML = p1w
                    over = true;
                    gameOne.gameOver();
                    wyd.innerHTML = "Player 1 wins! Press Play to start a new game!";
                }
            }

        for (let i = 0; i < winConditions.length; i++) {
            const [a, b, c] = winConditions[i];
            if (
                playerTwoChoicesNum.includes(a) &&
                playerTwoChoicesNum.includes(b) &&
                playerTwoChoicesNum.includes(c)
               ) {
                    p2w += 1;
                    playerTwoStat.innerHTML = p2w;
                    over = true;
                    gameOne.gameOver();
                    wyd.innerHTML = "Player 2 wins! Press Play to start a new game!";
                } 
            }

        if (remainingChoices.length === 0) {
            console.log('Draw!');
            over = true;
            gameOne.gameOver();
            draw += 1;
            ties.innerHTML = draw;
            wyd.innerHTML = "It's a tie! Press Play to start a new game!"
        }
        
  }
        
        return {getNames, startTheGame, click, checkTheWin, gameOver, restartGame};
}

const gameOne = Play();
gameOne.startTheGame();