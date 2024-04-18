#The code imports parts of the modules that we will need for the code.
from itertools import cycle
from random import randrange
from tkinter import Canvas,Tk,messagebox,font

canvas_width= 800
canvas_height = 400

root = Tk()
c= Canvas(root, width=canvas_width, height= canvas_height,background='cyan')
# Create the grass
c.create_rectangle(-5,canvas_height -100,canvas_width + 5, canvas_height+5, fill ='lawn green', width =0)

c.create_oval(-80,-80,120,120,fill='yellow',width=0)
c.pack()

# Setup the eggs
color_cycle=cycle(['light blue','light green','light pink','light yellow','light cyan'])
egg_width = 45
egg_height = 55
#You score 10 points for catching an egg
egg_score = 10
egg_speed = 500
#A new egg appears after every 4000 miliseconds(4 seconds)
egg_interval = 4000
# This is how much the speed interval change after each catch(closer to 1 is easier)
difficulty_factor = 0.95

#Setup the catcher
catcher_color = 'red'
catcher_width = 100
catcher_height = 100
#These lines make the catcher start at the bottome of the canvas in the center
catcher_start_x = canvas_width/2 - catcher_width/2
catcher_start_y = canvas_height - catcher_height-20
catcher_start_x2 = catcher_start_x + catcher_width
catcher_start_y2 = catcher_start_y + catcher_height

#Draw the catcher
catcher = c.create_arc(catcher_start_x,catcher_start_y,catcher_start_x2,catcher_start_y2,start=200,extent=140,style='arc',outline=catcher_color,width=3)
game_font = font.nametofont('TkFixedFont')
game_font.config(size=18)

score=0
score_text = c.create_text(10,10,anchor='nw',font=game_font,fill='darkblue',text='Score: ' + str(score))
lives_remaining=3
lives_text=c.create_text(canvas_width - 10, 10, anchor='ne', font=game_font, fill='darkblue', text = 'Lives' + str(lives_remaining))

eggs = []

def create_egg():
    x= randrange(10,740)
    y = 40
    #creates an oval
    new_egg =c.create_oval(x,y,x+egg_width,y+egg_height, fill=next(color_cycle),width=0)
    #Add the oval egg to the list of eggs
    eggs.append(new_egg)
    #call this after the egg_interval
    root.after(egg_interval,create_egg)

#Move eggs
def move_eggs():
    for egg in eggs:
        #Get the coordinates for the egg
        (egg_x,egg_y,egg_x2,egg_y2) = c.coords(egg)
        c.move(egg, 0, 10)
        if egg_y2 > canvas_height:
            egg_dropped(egg)
    root.after(egg_speed,move_eggs)

def egg_dropped(egg):
    eggs.remove(egg)
    c.delete(egg)
    lose_a_life(egg)
    if lives_remaining == 0:
        messagebox.showinfo('Game Over!','Final Score: ' + str(score))
        root.destroy()

def lose_a_life(egg):
    global lives_remaining
    lives_remaining -=1
    c.itemconfigure(lives_text,text='Lives: ' + str(lives_remaining))

def check_catch():
    (catcher_x,catcher_y,catcher_x2,catcher_y2) = c.coords(catcher)
    for egg in eggs:
        (egg_x,egg_y,egg_x2,egg_y2) = c.coords(egg)
        if catcher_x < egg_x and egg_x2 < catcher_x2 and catcher_y2 - egg_y2 < 40:
            eggs.remove(egg)
            c.delete(egg)
            #Increase score by 10 points
            increase_score(egg_score)
    root.after(100,check_catch)

def increase_score(points):
    global score,egg_speed,egg_interval
    score += points
    egg_speed = int(egg_speed * difficulty_factor)
    egg_interval = int(egg_interval * difficulty_factor)
    c.itemconfigure(score_text, text='Score:' + str(score))

def move_left(event):
    (x1,y1,x2,y2) = c.coords(catcher)
    if x1 > 0:
        c.move(catcher,-20,0)

def move_right(event):
    (x1,y1,x2,y2) = c.coords(catcher)
    if x2 < canvas_width:
        c.move(catcher,20,0)

c.bind('<Left>',move_left)
c.bind('<Right>',move_right)
c.focus_set()
root.after(1000, create_egg)
root.after(1000,move_eggs)
root.after(1000,check_catch)
root.mainloop()


# FINAL THOUGHTS
# overall the game works, except for a few small things
# lives is not formatted so make that better