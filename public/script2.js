function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}
const turnBackCard = () =>{
	firstCard = 0;
	secondCard = 0;
	// cardDone.classList.remove(`card${secondCard}`);
}
const checkIfPair = (first, second) => {
	return first === second;
}
const cards = [
	{ id: 1, className: 'card unplayed', image: 'images/apple.png' },
	{ id: 1, className: 'card unplayed', image: 'images/apple.png' },
	{ id: 2, className: 'card unplayed', image: 'images/banana.png' },
	{ id: 2, className: 'card unplayed', image: 'images/banana.png' },
	{ id: 3, className: 'card unplayed', image: 'images/carrot.png' },
	{ id: 3, className: 'card unplayed', image: 'images/carrot.png' },
	{ id: 4, className: 'card unplayed', image: 'images/strawberry.png' },
	{ id: 4, className: 'card unplayed', image: 'images/strawberry.png' },
	{ id: 5, className: 'card unplayed', image: 'images/orange.png' },
	{ id: 5, className: 'card unplayed', image: 'images/orange.png' },
	{ id: 6, className: 'card unplayed', image: 'images/grapes.png' },
	{ id: 6, className: 'card unplayed', image: 'images/grapes.png' },
	{ id: 7, className: 'card unplayed', image: 'images/kiwi.png' },
	{ id: 7, className: 'card unplayed', image: 'images/kiwi.png' },
	{ id: 8, className: 'card unplayed', image: 'images/kiwi.png' },
	{ id: 8, className: 'card unplayed', image: 'images/kiwi.png' },
];
let delay = 1200;
let firstCard = 0;
let secondCard = 0;
let previousTarget = 0;
const gameBoard = document.querySelector('.game-board');


const makeCard = (id, className, image) => {
	return `<div class="${className}" data-cardid="${id}">
	<img src="${image}">
	</div>`;
};

shuffle(cards);
for (let i = 0; i < cards.length; i++) {
	gameBoard.innerHTML += makeCard(cards[i].id, cards[i].className, cards[i].image);
};


const boardCards = document.querySelectorAll('.card');
Array.from(boardCards).forEach((boardCard) => {
	boardCard.addEventListener('click', function selectCard() {
		if (previousTarget === boardCard){
			previousTarget = boardCard;
		}else{
			boardCard.classList.remove('unplayed');
			boardCard.classList.add('chosen');
			boardCard.classList.add(`card${boardCard.dataset.cardid}`);
			if (firstCard === 0){
				firstCard = boardCard.dataset.cardid;
				console.log(`first: ${firstCard}`);
			}
			else{
				secondCard = boardCard.dataset.cardid;
				console.log(`sec: ${firstCard}`)
				if (checkIfPair(firstCard, secondCard)){
					let cardsDone = document.querySelectorAll('.chosen');
					Array.from(cardsDone).forEach((cardDone) => {
						cardDone.classList.add('done');
						cardDone.classList.remove('chosen');
						// boardCard.removeEventListener('click', selectCard(), false);
					});
					// console.log('hej');
					firstCard = 0;
					secondCard = 0;
				}else{
					setTimeout(turnBackCard, delay);
					let cardsDone = document.querySelectorAll('.chosen');
					Array.from(cardsDone).forEach((cardDone) => {
						cardDone.classList.remove('chosen');
						cardDone.classList.remove(`card${cardDone.dataset.cardid}`);
					});
					}
				}
			previousTarget = boardCard;
		}

		});
	});
