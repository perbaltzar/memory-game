//Restart GAME
restart.addEventListener('click', () =>{
	resetGame();
	startGame();
});


//PUTTING OUT THE CARDS ON THE BOARD
shuffle(cards);
placeCard(cards);
startGame();
