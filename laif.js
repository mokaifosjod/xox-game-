console.log("welcome to tic tok to");

let music = new Audio("music.mp3");
let aodioturn = new Audio("ting.mp3"); // use different audio for turn
let gameover = new Audio("gameover.mp3");

let turn = "x";
let isgameover = false;

// Change Turn Function
const ChangeTurn = () => {
    return turn === "x" ? "0" : "x";
};

// Check Win Function
const checkwin = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach(e => {
        if (
            boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[1]].innerText === boxtexts[e[2]].innerText &&
            boxtexts[e[0]].innerText !== ""
        ) {
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Won 🎉";
            isgameover = true;
            gameover.play();
        }
    });
};

// Main Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');

    element.addEventListener('click', () => {
        if (boxtext.innerText === "" && !isgameover) {
            boxtext.innerText = turn;
            aodioturn.play();
            checkwin();
            if (!isgameover) {
                turn = ChangeTurn();
                document.querySelector(".info").innerText = "Turn for " + turn;
            }
        }
    });
});

// Reset Button
document.getElementById("reset").addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    boxtexts.forEach(element => {
        element.innerText = "";
    });
    turn = "x";
    isgameover = false;
    document.querySelector(".info").innerText = "Turn for " + turn;
});
