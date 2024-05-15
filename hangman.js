let stages = [
    "OGLife.png", "Stage1.png", "Stage2.png", "Stage3.png", "Stage4.png", "Stage5.png", 
    "Stage6.png", "Stage7.png", "Stage8.png", "Stage9.png", "Stage10.png"
];  

let secretWord = "";
let clue = [];
let lives = 0;
let guessedLetters = [];

let words = ["anxiety", "sympathy", "depression", "empathy", "eustress", "distress", "suicide", "dopamine", "addiction", "stigma"];

function startGame() {
    secretWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
    clue = Array(secretWord.length).fill("?");
    lives = 0;
    guessedLetters = [];
    for (let i = 1; i <= 10; i++) {
        document.getElementById(`Stage${i}`).style.display = "none";
    }
    document.getElementById("OGLife").style.display = "block";
    
    document.getElementById("clue").textContent = "Clue: " + clue.join(" ");
    document.getElementById("lives").textContent = "Lives: " + (10 - lives);
    document.getElementById("guessed-letters").textContent = "Guessed Letters: " + guessedLetters.join(", ");
}

function updateClue(guess) {
    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === guess) {
            clue[i] = guess;
        }
    }
}


function guessLetter() {
    let guess = document.getElementById("guess-input").value.toLowerCase();
    document.getElementById("guess-input").value = "";

    if (guess.length === 1 && guess.match(/[a-z]/)) {
        if (guessedLetters.includes(guess)) {
            return;
        }

        guessedLetters.push(guess);

        if (secretWord.includes(guess)) {
            updateClue(guess);
        } else {
            lives++;
        }

        updateGamevisible(); 
    } else if (guess.length > 1 && guess.match(/^[a-z]+$/)) {
        if (guess === secretWord) {
            alert("Congratulations! You guessed the word!");
            startGame();
            return;
        }
    }

    if (lives === 10 || !clue.includes("?")) {
        updateGamevisible();
        gameOver();
    }
}

function updateGamevisible() {
    document.getElementById("clue").textContent = "Clue: " + clue.join(" ");
    document.getElementById("lives").textContent = "Tries Remaining: " + (10 - lives);
    document.getElementById("guessed-letters").textContent = "Guessed Letters: " + guessedLetters.join(", ");
    
    if (lives == 1) {
        document.getElementById("OGLife").style.display = "none";
        document.getElementById("Stage1").style.display = "block"
    }
    if (lives == 2){
        document.getElementById("Stage1").style.display = "none";
        document.getElementById("Stage2").style.display = "block";
    }
    if (lives == 3){
        document.getElementById("Stage2").style.display = "none";
        document.getElementById("Stage3").style.display = "block";
    }
    if (lives == 4){
        document.getElementById("Stage3").style.display = "none";
        document.getElementById("Stage4").style.display = "block";
    }
    if (lives == 5){
        document.getElementById("Stage4").style.display = "none";
        document.getElementById("Stage5").style.display = "block";
    }
    if (lives == 6){
        document.getElementById("Stage5").style.display = "none";
        document.getElementById("Stage6").style.display = "block";
    }
    if (lives == 7){
        document.getElementById("Stage6").style.display = "none";
        document.getElementById("Stage7").style.display = "block";
    }
    if (lives == 8){
        document.getElementById("Stage7").style.display = "none";
        document.getElementById("Stage8").style.display = "block";
    }
    if (lives == 9){
        document.getElementById("Stage8").style.display = "none";
        document.getElementById("Stage9").style.display = "block";
    }
    if (lives == 10){
        document.getElementById("Stage9").style.display = "none";
        document.getElementById("Stage10").style.display = "block";
    }
}

function gameOver() {
    alert("Game Over! The secret word was: " + secretWord);
    startGame();
}
