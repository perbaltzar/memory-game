//Restart GAME
restart.addEventListener('click', () =>{
	resetGame();
	startGame();
});
playAgain.addEventListener('click', () =>{
	resetGame();
	startGame();
});
//START GAME
startButton.addEventListener('click', () => {
	shuffle(cards);
	placeCard(cards);
	startGame();
	playing = true;
	startScreen.classList.add('hide-start');
	document.querySelector('audio').play();
});

//Show Timer
window.setInterval(stopWatch, 100);

//Play music
