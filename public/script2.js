//Restart GAME
restart.addEventListener('click', () =>{
	pairs = 0;
	firstCard = 0;
	secondCard = 0;
	wait = false;
	shuffle(cards);
	gameBoard.innerHTML = '';
	for (let i = 0; i < cards.length; i++) {
		gameBoard.innerHTML += makeCard(cards[i].id, cards[i].className, cards[i].image);
	};
	resetGame();
});


//PUTTING OUT THE CARDS ON THE BOARD
shuffle(cards);
placeCard(cards);


const boardCards = document.querySelectorAll('.unplayed');
Array.from(boardCards).forEach((boardCard) => {
	boardCard.addEventListener('click', function selectCard() {
		if (previousTarget === boardCard || boardCard.classList.contains('done')){
			console.log('hej');
			previousTarget = boardCard;
		}else if (!wait){
			boardCard.classList.remove('unplayed');
			boardCard.classList.add('chosen');
			boardCard.classList.add(`card${boardCard.dataset.cardid}`);
			if (firstCard === 0){
				firstCard = boardCard.dataset.cardid;
			}
			else{
				secondCard = boardCard.dataset.cardid;
				if (checkIfPair(firstCard, secondCard)){
					let cardsDone = document.querySelectorAll('.chosen');
					Array.from(cardsDone).forEach((cardDone) => {
						cardDone.classList.add('done');
						cardDone.classList.remove('chosen');
					});
					pairs++;
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
						//TURNING THE CARDS BACK
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
				}
			}
			previousTarget = boardCard;
		}

	});
});
