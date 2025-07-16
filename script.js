/*console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
//function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}

//function to check for a win
const checkWin = ()=>{

}
//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = document.querySelector('.boxtext');
    element.addEventListener('click', (e)=>{
        if(e.innerText === ''){
            e.innerText = turn;
            changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByName(turn)[0].innerText = "Turn for " + turn;
        }
    })
})*/

/*
console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";
let isGameOver = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};

// Function to check for a win
const checkWin = () => {
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
            boxtexts[e[0]].innerText !== "" &&
            boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[1]].innerText === boxtexts[e[2]].innerText
        ) {
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Won!";
            isGameOver = true;
            document.querySelector(".imgbox img").style.display = "block";
            gameover.play();
        }
    });
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "" && !isGameOver) {
            boxtext.innerText = turn;
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                turn = changeTurn();
                document.querySelector(".info").innerText = "Turn for " + turn;
            }
        }
    });
});

// Reset button functionality
document.getElementById("reset").addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isGameOver = false;
    document.querySelector(".info").innerText = "Turn for " + turn;
    document.querySelector(".imgbox img").style.display = "none";
});
*/
/*
let mode = "pvp"; // default
let modeSelect = document.getElementById("mode");
modeSelect.addEventListener("change", () => {
    mode = modeSelect.value;
    resetGame();
});


console.log("Welcome to Tic Tac Toe");

let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";
let isGameOver = false;

const changeTurn = () => {
    return "O"; // AI always plays as O
};

const checkWin = () => {
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
            boxtexts[e[0]].innerText !== "" &&
            boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[1]].innerText === boxtexts[e[2]].innerText
        ) {
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Won!";
            isGameOver = true;
            document.querySelector(".imgbox img").style.display = "block";
            gameover.play();
        }
    });
};

// AI Move
const aiMove = () => {
    if (isGameOver) return;

    let boxtexts = document.getElementsByClassName("boxtext");
    let emptyBoxes = [];

    for (let i = 0; i < 9; i++) {
        if (boxtexts[i].innerText === "") {
            emptyBoxes.push(i);
        }
    }

    if (emptyBoxes.length === 0) return;

    // Choose random move (simple AI)
    let randomIndex = Math.floor(Math.random() * emptyBoxes.length);
    let move = emptyBoxes[randomIndex];
    boxtexts[move].innerText = "O";
    audioTurn.play();
    checkWin();

    if (!isGameOver) {
        turn = "X";
        document.querySelector(".info").innerText = "Turn for " + turn;
    }
};

// Main Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "" && !isGameOver && turn === "X") {
            boxtext.innerText = turn;
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                turn = changeTurn(); // switch to AI turn
                document.querySelector(".info").innerText = "AI's Turn...";
                setTimeout(aiMove, 500); // give AI a moment before playing
            }
        }
    });
});

// Reset Button
document.getElementById("reset").addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isGameOver = false;
    document.querySelector(".info").innerText = "Turn for " + turn;
    document.querySelector(".imgbox img").style.display = "none";
});

*/
/*
console.log("Welcome to Tic Tac Toe");

// Sound effects
let audioTurnX = new Audio("ting-x.mp3"); // Player X
let audioTurnO = new Audio("ting-o.mp3"); // Player O or AI
let gameover = new Audio("gameover.mp3");

// Game state
let turn = "X";
let isGameOver = false;
let mode = "pvp"; // default: Player vs Player

// Mode selector
let modeSelect = document.getElementById("mode");
modeSelect.addEventListener("change", () => {
    mode = modeSelect.value;
    resetGame();
});

// Change turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

// Check for win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    wins.forEach(e => {
        if (
            boxtexts[e[0]].innerText !== "" &&
            boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[1]].innerText === boxtexts[e[2]].innerText
        ) {
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Won!";
            isGameOver = true;
            document.querySelector(".imgbox img").style.display = "block";
            gameover.play();
        }
    });
};

// AI move (random simple AI)
const aiMove = () => {
    if (isGameOver) return;

    let boxtexts = document.getElementsByClassName("boxtext");
    let emptyBoxes = [];

    for (let i = 0; i < 9; i++) {
        if (boxtexts[i].innerText === "") {
            emptyBoxes.push(i);
        }
    }

    if (emptyBoxes.length === 0) return;

    let move = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    boxtexts[move].innerText = "O";
    audioTurnO.play();
    checkWin();

    if (!isGameOver) {
        turn = "X";
        document.querySelector(".info").innerText = "Your Turn (X)";
    }
};

// Game logic for box click
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "" && !isGameOver) {
            boxtext.innerText = turn;

            if (turn === "X") audioTurnX.play();
            else audioTurnO.play();

            checkWin();

            if (!isGameOver) {
                if (mode === "pvp") {
                    turn = changeTurn();
                    document.querySelector(".info").innerText = "Turn for " + turn;
                } else if (mode === "ai" && turn === "X") {
                    turn = "O";
                    document.querySelector(".info").innerText = "AI's Turn...";
                    setTimeout(aiMove, 500); // AI takes time to play
                }
            }
        }
    });
});

// Reset button
document.getElementById("reset").addEventListener("click", resetGame);

// Reset function
function resetGame() {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isGameOver = false;
    document.querySelector(".info").innerText = "Turn for " + turn;
    document.querySelector(".imgbox img").style.display = "none";
}
*/
console.log("Welcome to Tic Tac Toe");

// Sound effects
let audioTurnX = new Audio("ting-x.mp3"); // Player X
let audioTurnO = new Audio("ting-o.mp3"); // Player O or AI
let gameover = new Audio("gameover.mp3");

// Game state
let turn = "X";
let isGameOver = false;
let mode = "pvp"; // default: Player vs Player

// Mode selector
let modeSelect = document.getElementById("mode");
modeSelect.addEventListener("change", () => {
    mode = modeSelect.value;
    resetGame();
});

// Change turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

// Check for win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    wins.forEach(e => {
        if (
            boxtexts[e[0]].innerText !== "" &&
            boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[1]].innerText === boxtexts[e[2]].innerText
        ) {
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Won!";
            isGameOver = true;
            document.querySelector(".imgbox img").style.display = "block";
            gameover.play();
        }
    });
};

// AI move
const aiMove = () => {
    if (isGameOver) return;

    let boxtexts = document.getElementsByClassName("boxtext");
    let emptyBoxes = [];

    for (let i = 0; i < 9; i++) {
        if (boxtexts[i].innerText === "") {
            emptyBoxes.push(i);
        }
    }

    if (emptyBoxes.length === 0) return;

    let move = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    boxtexts[move].innerText = "O";

    // Fixed: reliable sound for O
    audioTurnO.pause();
    audioTurnO.currentTime = 0;
    audioTurnO.play().catch(e => console.log("AI sound error:", e));

    checkWin();

    if (!isGameOver) {
        turn = "X";
        document.querySelector(".info").innerText = "Your Turn (X)";
    }
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "" && !isGameOver) {
            boxtext.innerText = turn;

            if (turn === "X") audioTurnX.play();
            else audioTurnO.play();

            checkWin();

            if (!isGameOver) {
                if (mode === "pvp") {
                    turn = changeTurn();
                    document.querySelector(".info").innerText = "Turn for " + turn;
                } else if (mode === "ai" && turn === "X") {
                    turn = "O";
                    document.querySelector(".info").innerText = "AI's Turn...";
                    setTimeout(aiMove, 500); // AI thinks for 0.5s
                }
            }
        }
    });
});

// Reset game
document.getElementById("reset").addEventListener("click", resetGame);

function resetGame() {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isGameOver = false;
    document.querySelector(".info").innerText = "Turn for " + turn;
    document.querySelector(".imgbox img").style.display = "none";
}
