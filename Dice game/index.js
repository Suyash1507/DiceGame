// for 1st image
var randomNumber1= Math.floor(Math.random()*6)+1;
var randomDiceChange= "dice" + randomNumber1 + ".png";
var randomDiceImage= "images/" + randomDiceChange; //
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

// for 2nd image
var randomNumber2= Math.floor(Math.random()*6)+1;
var randomDiceChange2= "dice" + randomNumber2 + ".png";
var randomDiceImage2= "images/" + randomDiceChange2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);
//Winner 
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!!";
}
else if((randomNumber2>randomNumber1)){
    document.querySelector("h1").innerHTML= "🚩Player 2 wins!!";
}
else{
    document.querySelector("h1").innerHTML= "Draw !!";
}
