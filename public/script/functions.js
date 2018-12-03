'use strict';
//RESETING THE GAME
const resetGame = () =>{
	pairs = 0;
	firstCard = 0;
	secondCard = 0;
	clicks = 0;
	wait = false;
	shuffle(cards);
	clearBoard();
	placeCard(cards);
	seconds = 0;
	playing = true;
	endScreen.classList.remove('winner');
	endScreen.classList.remove('rick-rolled');
	endScreen.classList.remove('success');
	music.play();
	winMusic.currentTime = 0;
	winMusic.pause();
	loseMusic.currentTime = 0;
	loseMusic.pause();
	notSubmited = true;
}
//LOSE GAME
const loseGame = () => {
	inputContainer.classList.add('hidden');
	music.pause();
	loseMusic.play();
	endScreen.classList.add('winner');
	endScreen.classList.add('rick-rolled');
	playing = false;
	document.querySelector('.end-text').innerHTML = 	"BAD LUCK!!!"

}
//WIN GAME
const winGame = () => {
	inputContainer.classList.remove('hidden');
	music.pause();
	loseMusic.pause();
	winMusic.play();
	endScreen.classList.add('winner');
	endScreen.classList.add('success');
	endScreen.classList.remove('rick-rolled');
	playing = false;
	document.querySelector('.end-text').innerHTML = 	"YOU WIN!!!" + "<br>" + "YOUR TIME: " + seconds + "." + tenthSeconds

}
//TIMER
const stopWatch = () => {
	if (playing){
		tenthSeconds++
		if (tenthSeconds/10 === 1){
			seconds++;
			tenthSeconds = 0;
		}
		document.querySelector('.timer').innerHTML = 	seconds+"."+tenthSeconds;
	}
};

//CLEAR BOARD
const clearBoard = () => {
	gameBoard.innerHTML = '';
}

//CHECKING IF THE CARDS MATCHES
const checkIfPair = (first, second) => {
	return first === second;
}
//CHECKING FOR THE RESET-CARD
const checkIfReset = (card) => {
	return card == 10;
}

//SHUFFLE THE CARDS
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}
//RESETING THE CLICKS
const resetClick = () =>{
	let cardsDone = document.querySelectorAll('.chosen');
	Array.from(cardsDone).forEach((cardDone) => {
		turnBackCard(cardDone);
		clicks = 0;
	});
}
//TURNING THE CARDS BACK
const turnBackCard = (card) =>{
	previousTarget = 0;
	firstCard = 0;
	secondCard = 0;
	card.classList.remove('chosen');
	card.classList.remove(`card${card.dataset.cardid}`);
	card.classList.add('unplayed');
	card.classList.add('animation');
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
			if (clicks === 2){
				window.addEventListener('click', resetClick());
				window.removeEventListener('click', resetClick(), true);
			}
			if (previousTarget === boardCard || boardCard.classList.contains('done')){
				previousTarget = boardCard;
			}
			else{
				clicks++;
				let cardId = boardCard.dataset.cardid;
				boardCard.classList.remove('unplayed');
				boardCard.classList.add('chosen');
				boardCard.classList.add(`card${cardId}`);
				if (firstCard === 0){
					firstCard = cardId;
					boardCard.classList.remove('animation');
					// console.log(	`first: ${firstCard}`);
				}
				else{
					secondCard = cardId;
					// console.log(`sec: ${secondCard}`);
					if (checkIfPair(firstCard, secondCard)){
						let cardsDone = document.querySelectorAll('.chosen');
						Array.from(cardsDone).forEach((cardDone) => {
							cardDone.classList.add('done');
							cardDone.classList.remove('animation')
							cardDone.classList.remove('chosen');
							clicks = 0;
						});
						if (checkIfReset(firstCard)){
							loseGame();
						}
						pairs++;
						firstCard = 0;
						secondCard = 0;
						//WINNING THE GAME
						if (pairs > 9){
							winGame();
							playing = false;
						}
					}else{
						let cardsDone = document.querySelectorAll('.chosen');
						Array.from(cardsDone).forEach((cardDone) => {
							cardDone.classList.add('animation')
						});
					}
				}
				previousTarget = boardCard;
				// console.log(`clicks: ${clicks}`);
			}
		});
	});
}
//KONAMICODE
document.addEventListener('keydown', (event) =>{
	code.push(event.keyCode);
	if (code[0] === 38){
		if (code[1] === 38){
			if (code[2] === 40){
				if (code[3] === 40){
					if (code[4] === 37){
						if (code[5] === 39){
							if (code[6] === 37){
								if (code[7] === 39){
									if (code[8] === 66){
										if (code[9] === 65){
											winGame();
											code = [];
										}else if (code.length > 9){
											code = [];
										}
									}else if (code.length > 8){
										code = [];
									}
								}else if (code.length > 7){
									code = [];
								}
							}else if (code.length > 6){
								code = [];
							}
						}else if (code.length > 5){
							code = [];
						}
					}else if (code.length > 4){
						code = [];
					}
				}else if (code.length > 3){
					code = [];
				}
			}else if (code.length > 2){
				code = [];
			}
		}else if (code.length > 1){
			code = [];
		}
	}else{
		code = [];
	}
});
//PUSH NEW HIGHSCORE
const getHighScore = () => {
	highScore.innerHTML = '';
	newHighScore.forEach((entry)=>{
		highScore.innerHTML += `<div><p>${entry.name}</p><p>${entry.time}</p></div>	`;
	});

}
