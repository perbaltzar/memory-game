'use strict';
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
	resetGame();
	shuffle(cards);
	placeCard(cards);
	startGame();
	playing = true;
	startScreen.classList.add('hide-start');
	music.play();
	introMusic.pause();
});

//Show Timer
window.setInterval(stopWatch, 100);

//Play music
introMusic.play();

//High SCORE
closeHighScore.addEventListener('click', () => {
	highScoreContainer.classList.add('closed');
})
openHighScore.addEventListener('click', () => {
	getHighScore();
	highScoreContainer.classList.remove('closed');
})
submit.addEventListener('click', ()=>{
	if (notSubmited){
		notSubmited = false;
		let time = `${seconds}.${tenthSeconds}`
		let newEntry = {
			name: name.value,
			time: parseFloat(`${seconds}.${tenthSeconds}`)
		};
		newHighScore.push(newEntry);
		newHighScore.sort(function(a, b){
			return a.time-b.time;
		});
		name.value = '';
		localStorage.setItem('highScoreDB', JSON.stringify(newHighScore));
	}
})


//GO BACK TO MAIN MENU
	mainMenu.addEventListener('click', ()=>{
	startScreen.classList.remove('hide-start');
	music.pause();
	loseMusic.pause();
	winMusic.pause();
	introMusic.play();
	winMusic.currentTime = 0;
	loseMusic.currentTime = 0;
	endScreen.classList.remove('winner');
	endScreen.classList.remove('rick-rolled');
	endScreen.classList.remove('success');
});
