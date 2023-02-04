function go() {

    var name1 = document.querySelector(".input1").value;
    var name2 = document.querySelector(".input2").value;
    var player1 = Math.round(Math.random() * 5 + 1);
    var player2 = Math.round(Math.random() * 5 + 1);

    image1(player1);
    image2(player2);

    if (player1 > player2) {
        document.querySelector("h1").innerHTML = name1 + " WINS";
    }
    else if (player1 < player2) {
        document.querySelector("h1").innerHTML = name2 + " WINS";
    }
    else {
        document.querySelector("h1").innerHTML = "PLAY AGAIN";
    }

    document.querySelector(".btn-play").innerHTML = "PLAY AGAIN";
}

function image1(player1) {

    if (player1 === 1) {
        document.querySelector(".img1").src = "images/1.png";
    }
    else if (player1 === 2) {
        document.querySelector(".img1").src = "images/2.png";
    }
    else if (player1 === 3) {
        document.querySelector(".img1").src = "images/3.png";
    }
    else if (player1 === 4) {
        document.querySelector(".img1").src = "images/4.png";
    }
    else if (player1 === 5) {
        document.querySelector(".img1").src = "images/5.png";
    }
    else if (player1 === 6) {
        document.querySelector(".img1").src = "images/6.png";
    }

}

function image2(player2) {

    if (player2 === 1) {
        document.querySelector(".img2").src = "images/1.png";
    }
    else if (player2 === 2) {
        document.querySelector(".img2").src = "images/2.png";
    }
    else if (player2 === 3) {
        document.querySelector(".img2").src = "images/3.png";
    }
    else if (player2 === 4) {
        document.querySelector(".img2").src = "images/4.png";
    }
    else if (player2 === 5) {
        document.querySelector(".img2").src = "images/5.png";
    }
    else if (player2 === 6) {
        document.querySelector(".img2").src = "images/6.png";
    }
    
}