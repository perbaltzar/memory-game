function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}
const turnBackCard = (card) =>{
	firstCard = 0;
	secondCard = 0;
	console.log('hej');
	card.classList.remove('chosen');
	card.classList.remove(`card${card.dataset.cardid}`);
	card.classList.add('unplayed');
}
const checkIfPair = (first, second) => {
	return first === second;
}
const resetGame = () =>{
	pairs = 0;
}
const cards = [
	{ id: 1, className: 'card unplayed'},
	{ id: 1, className: 'card unplayed'},
	{ id: 2, className: 'card unplayed'},
	{ id: 2, className: 'card unplayed'},
	{ id: 3, className: 'card unplayed'},
	{ id: 3, className: 'card unplayed'},
	{ id: 4, className: 'card unplayed'},
	{ id: 4, className: 'card unplayed'},
	{ id: 5, className: 'card unplayed'},
	{ id: 5, className: 'card unplayed'},
	{ id: 6, className: 'card unplayed'},
	{ id: 6, className: 'card unplayed'},
	{ id: 7, className: 'card unplayed'},
	{ id: 7, className: 'card unplayed'},
	{ id: 8, className: 'card unplayed'},
	{ id: 8, className: 'card unplayed'},
];
let delay = 800;
let firstCard = 0;
let secondCard = 0;
let wait = false;
let previousTarget = 0;
let pairs = 0;
const gameBoard = document.querySelector('.game-board');


const makeCard = (id, className, image) => {
	return `<div class="${className}" data-cardid="${id}">

	</div>`;
};

shuffle(cards);
//PUTTING OUT THE CARDS ON THE BOARD
for (let i = 0; i < cards.length; i++) {
	gameBoard.innerHTML += makeCard(cards[i].id, cards[i].className, cards[i].image);
};


const boardCards = document.querySelectorAll('.card');
Array.from(boardCards).forEach((boardCard) => {
	boardCard.addEventListener('click', function selectCard() {
		if (previousTarget === boardCard){
			previousTarget = boardCard;
		}else if (!wait){
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
					console.log(wait);
					Array.from(cardsDone).forEach((cardDone) => {
						cardDone.classList.add('done');
						cardDone.classList.remove('chosen');
					});
					pairs++;
					wait = true;
					firstCard = 0;
					secondCard = 0;
					wait = false;
					//WINNING THE GAME
					if (pairs > 7){
						console.log('WINNER!!!');
					}
				}else{
					wait = true;
					let cardsDone = document.querySelectorAll('.chosen');
					Array.from(cardsDone).forEach((cardDone) => {
						// setTimeout(turnBackCard(cardDone), 1600);
						setTimeout(function(){
							previousTarget = 0;
							firstCard = 0;
							secondCard = 0;
							cardDone.classList.remove('chosen');
							cardDone.classList.remove(`card${cardDone.dataset.cardid}`);
							cardDone.classList.add('unplayed');
							wait = false;
						}, delay);
					});
					console.log(wait);
				}
			}
			previousTarget = boardCard;
		}

	});
});
