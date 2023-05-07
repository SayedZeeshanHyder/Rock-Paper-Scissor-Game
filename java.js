let play1=0,play2=0;
let q=0;
let x=0,y=0;
function play()
{
    if(q==1)
    {
    let b=Math.random()*10;
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
    else{
        document.getElementById("score").innerHTML="Select Your Option first";
    }
}
function player1scissors()
{
    document.getElementById("score").innerHTML="Player 1 Selected Scissor!";
    x=1; //scissor
    q=1;
    document.getElementById("p1").src="https://tl.vhv.rs/dpng/s/535-5357819_rock-paper-scissors-png-transparent-png.png";
}
function player1paper()
{
    document.getElementById("score").innerHTML="Player 1 Selected Paper!";
    x=2; //Paper
    q=1;
    document.getElementById("p1").src="https://www.vhv.rs/dpng/d/490-4906131_rock-paper-scissors-clipart-rock-paper-scissors-png.png";
}
function player1rock()
{
    document.getElementById("score").innerHTML="Player 1 Selected Rock!";
    x=3; //Rock
    q=1;
    document.getElementById("p1").src="https://tl.vhv.rs/dpng/s/535-5354119_paper-clipart-scissors-rock-paper-scissors-jpg-hd.png";
}
function nextgame()
{
    document.getElementById("p1").src="";
    document.getElementById("p2").src="";
    q=0;
    document.getElementById("score").innerHTML="";
}
function reset()
{
    play1=0;
    play2=0;
    document.getElementById("winner").innerHTML= play1 + " - " + play2;
}
