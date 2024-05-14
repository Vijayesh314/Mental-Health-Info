var x=0;
var y=0;
var z=0;
document.getElementById("attribute").style.visibility="hidden";
document.getElementById("acheivments").style.visibility="hidden";
function Function(){
    x=x+1
    if (x==2){
        document.getElementById("attribute").style.visibility="visible";
        document.getElementById("attribute").className="border";
        document.getElementById("attribute").innerHTML="We are a team of high schoolers who made this project for school.";
        document.getElementById("anchovies").style.color="white";
        x=0;
    }
    else{
        document.getElementById("attribute").style.visibility="hidden";
        document.getElementById("attribute").className="none";
        document.getElementById("attribute").innerHTML="Info and About Us";
        document.getElementById("anchovies").style.color="rgb(82, 231, 123)";
    }
}

function funkytion(){
    y=y+1
    if (y==2){
        document.getElementById("acheivments").style.visibility="visible";
        document.getElementById("acheivments").innerHTML="To all the people who said we won't accomplish anything because we procrastinate too much, just you wait";
        document.getElementById("acheivments").className="border";
        document.getElementById("salmon").style.color="white";
        y=0;
    }
    else{
        document.getElementById("acheivments").style.visibility="hidden";
        document.getElementById("acheivments").className="none";
        document.getElementById("acheivments").innerHTML="Vijayesh's (Relaxing) Words of Wisdom";
        document.getElementById("salmon").style.color="rgb(82, 231, 123)";
    }
}

function funkyytion(){
    z=z+1
    if (z==2){
        document.getElementById("acheivments").style.visibility="visible";
        document.getElementById("acheivments").innerHTML="A page dedicated to imforming you regarding some mental health disorders, some stress relievers, the imortance of mental health awareness, and...";
        document.getElementById("acheivments").innerHTML="A game which educates you on terms relating to mental health!";
        document.getElementById("acheivments").className="border";
        document.getElementById("salmon").style.color="white";
        y=0;
    }
    else{
        document.getElementById("acheivments").style.visibility="hidden";
        document.getElementById("acheivments").className="none";
        document.getElementById("acheivments").innerHTML="Things you can find:";
        document.getElementById("salmon").style.color="rgb(82, 231, 123)";
    }
}
