console.log("JS file is connected to HTML! Woo!")

var cardOne = "Queen";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "King";

//if (cardOne === cardTwo) {
//	alert('You found a match!');
//} else {
//	alert('Sorry, try again.');
//}

var gameBoard = document.getElementById('game-board');

function createCards() {
	for (var a = 1; a <= 4; a++) {
		 var card = document.createElement('div');
	 		card.className = 'cards';
	 		gameBoard.appendChild(card);
	}
}

gameBoard.addEventListener('load', createCards());