//Restart GAME
restart.addEventListener('click', () =>{
	pairs = 0;
	firstCard = 0;
	secondCard = 0;
	wait = false;
	shuffle(cards);
	placeCard(cards);
	startGame();
});


//PUTTING OUT THE CARDS ON THE BOARD
shuffle(cards);
placeCard(cards);
startGame();
