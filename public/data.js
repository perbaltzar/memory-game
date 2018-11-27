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
const restart = document.querySelector('.restart')
