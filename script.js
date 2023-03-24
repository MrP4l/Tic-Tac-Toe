let playerOne = document.getElementById("playerOneName");
let playerTwo = document.getElementById("playerTwoName");
let playButton = document.getElementById("playButton");
let playerOneName = document.getElementById("nameOne");
let playerTwoName = document.getElementById("nameTwo");

const Player = name => {
    const sayName = () => console.log(name);
    return {sayName};
};

const Gameboard = (() => {
    let board = [];
    let n = 0
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        n += 1
        square.dataset.index = n;
        square.addEventListener("click", () => {
            //console.log(square.dataset.index)
        })
    });
})();

const Play = () => {
    let playerOneChoices = [];
    let playerTwoChoices = [];

    const getNames = () => {
            if (playerOne != null && playerTwo != null) {
                let namePlayerOne = playerOne.value;
                let namePlayerTwo = playerTwo.value;
                console.log(namePlayerOne, namePlayerTwo)
                
                playerOneName.innerHTML = namePlayerOne + ":";
                playerTwoName.innerHTML = namePlayerTwo + ":";
            }
        }
    
    const startTheGame = () => {
        playButton.addEventListener("click", () => {
            const gameOne = Play();
            gameOne.getNames();
        })
    }

    const click = () => {
        const squares = document.querySelectorAll(".square");
        squares.forEach(square => {
            square.addEventListener("click", () => {
                if (playerTwoChoices.length < playerOneChoices.length) {
                    playerTwoChoices.push(square.dataset.index);
                    console.log(playerOneChoices, playerTwoChoices);
                }
                playerTwoChoices.push(square.dataset.index);
                console.log("P1:",playerOneChoices, "P2:",playerTwoChoices);
            })
        });
    }
        return {getNames, startTheGame, click};
}

const go = Play();
go.startTheGame();
go.click();





const gameController = (() => {

})();

const marco = Player("marco")
marco.sayName();

