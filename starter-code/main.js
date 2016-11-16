var cards = ['Queen', 'Queen', 'King', 'King'];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');


function createCards() {
	var num =[0, 1, 2, 3];
	for (var a = 0; a < cards.length ; a++) {
		var i = Math.floor(Math.random()*(num.length-0))+0;

		 var cardElement = document.createElement('div');
	 		cardElement.className = 'cards';
            cardElement.setAttribute('data-card', cards[num[i]]);
	 		cardElement.addEventListener('click', isTwoCards);
	 		gameBoard.appendChild(cardElement);
	 		num.splice(i,1);
	}
}


function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));

	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'King') {
		this.innerHTML = "<img src='my_king.png'>";
	} else {
		this.innerHTML = "<img src='my_queen.png'>";
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch() {

	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert('You found a match!');
			setTimeout(location.reload(), 200);
		} else {
			alert('Sorry, try again.');
		}

	setTimeout(reset, 200);
}

function reset() {
	for (var i = 0; i < cards.length; i++) {
		document.getElementsByClassName('cards')[i].innerHTML = " ";
	}
}


createCards();