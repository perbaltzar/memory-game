//RESETING THE GAME
const resetGame = () =>{
	pairs = 0;
	firstCard = 0;
	secondCard = 0;
	wait = false;
	shuffle(cards);
	gameBoard.innerHTML = '';
}

//CHECKING IF THE CARDS MATCHES
const checkIfPair = (first, second) => {
	return first === second;
}

//SHUFFLE THE CARDS
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}
//TURNING THE CARDS BACK
const turnBackCard = (card) =>{
	firstCard = 0;
	secondCard = 0;
	card.classList.remove('chosen');
	card.classList.remove(`card${card.dataset.cardid}`);
	card.classList.add('unplayed');
}
//MAKING THE CARDS
const makeCard = (id, className, image) => {
	return `<div class="${className}" data-cardid="${id}"></div>`;
};
//PLACING THE CARDS ON THE BOARD
const placeCard = () => {
	for (let i = 0; i < cards.length; i++) {
		gameBoard.innerHTML += makeCard(cards[i].id, cards[i].className, cards[i].image);
	};
}
