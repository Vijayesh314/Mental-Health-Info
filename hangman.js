const stages = [
    "Stage1.png", "Stage2.png", "Stage3.png", "Stage4.png", "Stage5.png", 
    "Stage6.png", "Stage7.png", "Stage8.png", "Stage9.png", "Stage10.png"
];

let secretWord = "";
let clue = [];
let lives = 0;
let guessedLetters = [];

const words = ['anxiety', 'sympathy', 'depression', 'empathy', 'eustress', 'distress', 'suicide', 'dopamine', 'addiction', 'stigma'];

function startGame() {
    secretWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
    clue = Array(secretWord.length).fill('?');
    lives = 0;
    guessedLetters = [];
    updateLifeImages();
}

function updateClue(guess) {
    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === guess) {
            clue[i] = guess;
        }
    }
}

function guessLetter() {
    const guess = document.getElementById('guess-input').value.toLowerCase();
    document.getElementById('guess-input').value = "";

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
    } else if (guess.length > 1 && guess.match(/^[a-z]+$/)) {
        if (guess === secretWord) {
            alert("Congratulations! You guessed the word!");
            startGame();
            return;
        }
    }

    updateGameDisplay();

    if (lives === 10 || !clue.includes('?')) {
        gameOver();
    }
}

function updateGameDisplay() {
    document.getElementById('clue').textContent = "Clue: " + clue.join(' ');
    document.getElementById('lives').textContent = "Lives: " + (10 - lives); 
    document.getElementById('guessed-letters').textContent = "Guessed Letters: " + guessedLetters.join(', ');

    document.getElementById('life-image').src = lifeImages[lives-1];
}

function gameOver() {
    alert("Game Over! The secret word was: " + secretWord);
    startGame();
}

window.onload = startGame;
