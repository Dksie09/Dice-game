var ranum1=Math.random()
ranum1=Math.floor((ranum1*6)+1)
var imageRandom1="images/dice"+ranum1+".png";
var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src",imageRandom1)

var ranum2=Math.random()
ranum2=Math.floor((ranum2*6)+1)
var imageRandom2="images/dice"+ranum2+".png";
var dice2=document.querySelectorAll("img")[1];
dice2.setAttribute("src",imageRandom2)

if (ranum1>ranum2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
    document.querySelectorAll("p")[0].innerHTML="🎉Player 1";
}
else if(ranum2>ranum1){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
    document.querySelectorAll("p")[1].innerHTML="Player 2🎉";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}