from flask import Flask, render_template, request, redirect, url_for
import random

app = Flask(__name__)

# Define Hangman stages
stage_0 = r"""
   -----------  
      |     |
            |
            |
            |
            |
            |
 --------------
"""
stage_1 =r"""
   -----------  
      |     |
      0     |
            |
            |
            |
            |
 --------------
"""
stage_2 = r"""
   -----------  
      |     |
      0     |
      |     |
            |
            |
            |
 --------------
"""
stage_3 = r"""
  ------------  
      |    |
      0    |
    / |    |
           |
           |
           |
---------------
"""
stage_4 = r"""
   -----------  
      |     |
      0     |
    / | \   |
            |
            |
            |
 --------------
"""
stage_5 = r"""
   -----------  
      |     |
      0     |
    / | \   |
      |     |
            |
            |
 --------------
"""
stage_6 = r"""
   -----------  
      |     |
      0     |
    / | \   |
      |     |
     /      |
            |
 --------------
"""
stage_7 = r"""
   -----------  
      |     |
      0     |
    / | \   |
      |     |
     / \    |
            |
 --------------
"""
stage_8 = r"""
   -----------  
      |     |
      0     |
    / | \   |
   /  |  \  |
     / \    |
    /       |
 --------------
"""
stage_9 = r"""
   -----------  
      |     |
      0     |
    / | \   |
   /  |  \  |
     / \    |
    /   \   |
 --------------
"""

# Add the rest of the stages here...

stages = [stage_0, stage_1, stage_2, stage_3, stage_4, stage_5, stage_6, stage_7, stage_8, stage_9]

# Initialize global variables
secret_word = ""
clue = []
lives = 0
guessed_letters = []

# Load words from file
with open("words.txt", "r") as file:
    words = file.read().splitlines()

def start_game():
    global secret_word, clue, lives, guessed_letters
    secret_word = random.choice(words).lower()
    clue = ['?' for _ in range(len(secret_word))]
    lives = 9
    guessed_letters = []

def update_clue(guess):
    global clue
    for i, letter in enumerate(secret_word):
        if letter == guess:
            clue[i] = letter

@app.route('/')
def index():
    start_game()
    return render_template('hangman.html', stages=stages, clue=clue, lives=lives, guessed_letters=guessed_letters)

@app.route('/guess', methods=['POST'])
def guess():
    global lives, guessed_letters
    guess = request.form['guess'].lower()

    if len(guess) == 1 and guess.isalpha():
        if guess in guessed_letters:
            return redirect(url_for('index'))

        guessed_letters.append(guess)

        if guess in secret_word:
            update_clue(guess)
        else:
            lives -= 1

    elif len(guess) > 1 and guess.isalpha():
        if guess == secret_word:
            return redirect(url_for('index'))

    if lives == 0 or '?' not in clue:
        return redirect(url_for('game_over'))

    return redirect(url_for('index'))

@app.route('/game_over')
def game_over():
    return render_template('game_over.html', secret_word=secret_word)

if __name__ == '__main__':
    app.run(debug=True)
