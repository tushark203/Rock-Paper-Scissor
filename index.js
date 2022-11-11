var randomno1 = Math.floor(Math.random() * 4);
var randomimg1 = "hand" + randomno1 + ".png";
var randomimgsrc1 = randomimg1;


var randomno2 = Math.floor(Math.random() * 3);
var randomimg2 = "hand" + randomno2 + ".png";
var randomimgsrc2 = randomimg2;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomimgsrc1);

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomimgsrc2);


if (randomno1 == randomno2) {
    document.querySelector("h1").innerHTML = "Draw !";
} else if ((randomno1 == 1 && randomno2 == 3) || (randomno1 == 2 && randomno2 == 1) || (randomno1 == 3 && randomno2 == 2)) {
    document.querySelector("h1").innerHTML = "Player 1 Won !";
} else if (randomno1 == 0 || randomno2 == 0 || (randomno1 == 0 && randomno2 == 0)) {
    document.querySelector("h1").innerHTML = "Just Fun";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Won !";
}
