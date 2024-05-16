var x=0;
var y=0;
var z=0;
document.getElementById("attribute").style.visibility="hidden";
document.getElementById("acheivments").style.visibility="hidden";
function Functionn(){
    x=x+1
    if (x==1){
        document.getElementById("attribute1").style.visibility="visible";
        document.getElementById("attribute1").className="border";
        document.getElementById("attribute1").innerHTML="You miss 100% of the shots you don’t take.";
        document.getElementById("attribute2").style.visibility="visible";
        document.getElementById("attribute2").className="border";
        document.getElementById("attribute2").innerHTML="Life has got those twists and turns. You’ve got to hold on tight and off you go.";
        document.getElementById("anchovies").style.color="white";
        document.getElementById("attribute3").style.visibility="visible";
        document.getElementById("attribute3").className="border";
        document.getElementById("attribute3").innerHTML="Never put off until tomorrow what can be done today.";
        document.getElementById("attribute4").style.visibility="visible";
        document.getElementById("attribute4").className="border";
        document.getElementById("attribute4").innerHTML="If you want something bad enough, you fine a way to make it happen.";
        x=0;
    }
    else{
        document.getElementById("attribute").style.visibility="hidden";
        document.getElementById("attribute").className="none";
        document.getElementById("attribute").innerHTML="Quotes";
        document.getElementById("anchovies").style.color="rgb(82, 231, 123)";
    }
}

function funkytion(){
    y=y+1
    if (y==1){
        document.getElementById("acheivments").style.visibility="visible";
        document.getElementById("acheivments").innerHTML="To all the people who said we won't accomplish anything because we procrastinate too much, just wait";
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
    if (z==1){
        document.getElementById("viraajTheFoot").style.visibility="visible";
        document.getElementById("viraajTheFoot").innerHTML="A page dedicated to imforming you regarding some mental health disorders, some stress relievers, the imortance of mental health awareness, and a game!";
        document.getElementById("viraajTheFoot").className="border";
        document.getElementById("cod").style.color="white";
        z=0;
    }
    else{
        document.getElementById("viraajTheFoot").style.visibility="hidden";
        document.getElementById("viraajTheFoot").className="none";
        document.getElementById("viraajTheFoot").innerHTML="Click me to see what you can do here!";
        document.getElementById("cod").style.color="rgb(82, 231, 123)";
    }
}
