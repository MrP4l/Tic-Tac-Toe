let Player1 = document.getElementById("playerOneName");
let Player2 = document.getElementById("playerTwoName");
let playButton = document.getElementById("playButton");

const Player = name => {
    const sayName = () => console.log(name);
    return {sayName};
};

const Gameboard = (() => {
    let board = [];
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("click", () => {
            console.log('hello')
        })
    });


})();

const gameController = (() => {

})();

const marco = Player("marco")
marco.sayName();

