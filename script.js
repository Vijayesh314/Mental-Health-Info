var x=1;
var y=1;
function Function(){
    x=x+1
    if (x==2){
        document.getElementById("attribute").style.visibility="visible";
        document.getElementById("attribute").className="border";
        document.getElementById("attribute").innerHTML="We are a team of high schoolers who were legally obliged to say that we made this project for F U N";
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
        document.getElementById("acheivments").innerHTML="We may have knowledge on the past, but can't control it. We may control the future, but have no knowledge on it.";
        document.getElementById("acheivments").className="border";
        document.getElementById("salmon").style.color="white";
        y=0;
    }
    else{
        document.getElementById("acheivments").style.visibility="hidden";
        document.getElementById("acheivments").className="none";
        document.getElementById("acheivments").innerHTML="Vijayesh's Words of Wisdom";
        document.getElementById("salmon").style.color="rgb(82, 231, 123)";
    }
}
