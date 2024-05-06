import requests
from diagram import *  

def getWordFromAPI():
  api = "https://random-word-api.herokuapp.com/word"
  data = requests.get(api)
  dictionary = data.json()
  rand_word = dictionary[0]
  return rand_word

rand_word = getWordFromAPI()
guessed_set = set()
wrong_guess = 0
total_wrong_guess = 0

underscore = ["_" for i in range(len(rand_word))]

def run_game():  

  global wrong_guess
  global total_wrong_guess  
  
  while "_" in underscore:
    print("".join(underscore))
    print(guessed_set)
    guess = input("Guess a letter: ")
    
    if guess not in guessed_set:
       guessed_set.add(guess)
    
    else:
      print("Already guessed letter, try again.")
      continue
    
    for x in range(len(rand_word)):
      if rand_word[x]==guess:
         underscore[x] = guess
        
      if rand_word[x] != guess:
         wrong_guess += 1
            
    if guess not in rand_word:
       total_wrong_guess += 1
    
       print(stages[total_wrong_guess])
    if total_wrong_guess == len(stages):
       print(stage_11)
       print("Game over for you...")
       exit()
    
    wrong_guess = 0
    
    if "_" not in underscore:
       print(rand_word)
       print("congratulations, you won!")

run_game()
