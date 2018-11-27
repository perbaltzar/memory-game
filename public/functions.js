//RESETING THE GAME
const resetGame = () =>{
	pairs = 0;
	firstCard = 0;
	secondCard = 0;
	wait = false;
	shuffle(cards);
	clearBoard();
	placeCard(cards);
	startGame();
}
//CLEAR BOARD
const clearBoard = () => {
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
	card.classList.remove(`card${cardId}`);
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
//THE ACTUAL GAMEPLAY
const startGame = () =>{
	const boardCards = document.querySelectorAll('.unplayed');
	Array.from(boardCards).forEach((boardCard) => {
		boardCard.addEventListener('click', function selectCard() {
			if (previousTarget === boardCard || boardCard.classList.contains('done')){
				previousTarget = boardCard;
			}else if (!wait){
				//chooseCard(boardCard)
				let cardId = boardCard.dataset.cardid;
				boardCard.classList.remove('unplayed');
				boardCard.classList.add('chosen');
				boardCard.classList.add(`card${cardId}`);
				if (firstCard === 0){
					firstCard = cardId;
				}
				else{
					secondCard = cardId;
					if (checkIfPair(firstCard, secondCard)){
						let cardsDone = document.querySelectorAll('.chosen');
						Array.from(cardsDone).forEach((cardDone) => {
							cardDone.classList.add('done');
							cardDone.classList.remove('chosen');
						});
						pairs++;
						firstCard = 0;
						secondCard = 0;
						//WINNING THE GAME
						if (pairs > 7){
							console.log('WINNER!!!');
						}
					}else{
						wait = true;
						let cardsDone = document.querySelectorAll('.chosen');
						Array.from(cardsDone).forEach((cardDone) => {
							//TURNING THE CARDS BACK
							setTimeout(function(){
								cardId = cardDone.dataset.cardid
								previousTarget = 0;
								firstCard = 0;
								secondCard = 0;
								cardDone.classList.remove('chosen');
								cardDone.classList.remove(`card${cardId}`);
								cardDone.classList.add('unplayed');
								wait = false;
							}, delay);
						});
					}
				}
				previousTarget = boardCard;
			}
		});
	});
}
