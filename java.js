let play1=0,play2=0;
function play()
{
    let x=0,y=0;
    let a=Math.random()*10;
    let b=Math.random()*10;
    if(a>0 && a<4)
    {
        x=1; //scissor
        document.getElementById("p1").src="https://tl.vhv.rs/dpng/s/535-5357819_rock-paper-scissors-png-transparent-png.png";
    }
    else if(a>3 && a<7)
    {
        x=2; //Paper
        document.getElementById("p1").src="https://www.vhv.rs/dpng/d/490-4906131_rock-paper-scissors-clipart-rock-paper-scissors-png.png";
    }
    else{
        x=3; //Rock
        document.getElementById("p1").src="https://tl.vhv.rs/dpng/s/535-5354119_paper-clipart-scissors-rock-paper-scissors-jpg-hd.png";
    }
    if(b>0 && b<4)
    {
        y=1;
        document.getElementById("p2").src="https://tl.vhv.rs/dpng/s/535-5357819_rock-paper-scissors-png-transparent-png.png";
    }
    else if(b>3 && b<7)
    {
        y=2;
        document.getElementById("p2").src="https://www.vhv.rs/dpng/d/490-4906131_rock-paper-scissors-clipart-rock-paper-scissors-png.png";
    }
    else{
        y=3;
        document.getElementById("p2").src="https://tl.vhv.rs/dpng/s/535-5354119_paper-clipart-scissors-rock-paper-scissors-jpg-hd.png";
    }
    if(x==1 && y==2 || x==2 && y==3 || x==3 && y==1)
    {
        document.getElementById("score").innerHTML="Player 1 Wins !";
        play1++;
    }
    else if(y==1 && x==2 || y==2 && x==3 || y==3 && x==1)
    {
        document.getElementById("score").innerHTML="Player 2 Wins !";
        play2++;
    }
    else{
        document.getElementById("score").innerHTML="Tie";
    }
    document.getElementById("winner").innerHTML= play1 + " - " + play2;
}
function reset()
{
    play1=0;
    play2=0;
    document.getElementById("winner").innerHTML= play1 + " - " + play2;
}