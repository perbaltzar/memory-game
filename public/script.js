const cards = document.querySelectorAll('.card');
let firstPick = 0;
let secondPick = 0;
let cardsDone = document.querySelectorAll('.chosen');
const button = document.querySelector('.restart');
let cardNumber = 0;



//Checking if it's a pair
const checkIfPair = (first, second) => {
	return first === second;
}


button.addEventListener('click', () => {
	Array.from(cards).forEach((card) =>{
		// startGame(card);
	});
})

Array.from(cards).forEach((card) =>{

  card.addEventListener('click', function selectCard () {
    cardNumber = card.dataset.cardid;
		card.classList.add('chosen');
		card.classList.add(`card${cardNumber}`)
		//Putting the ID of the chosen cards in variables
		if (firstPick === 0){
			firstPick = card.dataset.cardid;
			// card.removeEventListener('click', selectCard(), true);
		}else{
			secondPick = card.dataset.cardid;
			//Checking if is a pair.
			if (checkIfPair(firstPick, secondPick)){
				let cardsDone = document.querySelectorAll('.chosen');
				console.log(cardsDone);
				Array.from(cardsDone).forEach((cardDone) => {
					cardDone.classList.add('done');
					cardDone.classList.remove('unplayed')
					cardDone.classList.remove('chosen');
				});
			}else{
				//Unselecting cards
				let cardsDone = document.querySelectorAll('.chosen');
				Array.from(cardsDone).forEach((cardDone) => {
					cardDone.classList.remove(`card${firstPick}`);
					cardDone.classList.remove(`card${secondPick}`);
					cardDone.classList.remove('chosen');

				});
			}
			secondPick = 0;
			firstPick = 0;
		}
  });
});
