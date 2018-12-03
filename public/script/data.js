'use strict';
const cards = [
	{ id: 1, className: 'card unplayed animation'},
	{ id: 1, className: 'card unplayed animation'},
	{ id: 2, className: 'card unplayed animation'},
	{ id: 2, className: 'card unplayed animation'},
	{ id: 3, className: 'card unplayed animation'},
	{ id: 3, className: 'card unplayed animation'},
	{ id: 4, className: 'card unplayed animation'},
	{ id: 4, className: 'card unplayed animation'},
	{ id: 5, className: 'card unplayed animation'},
	{ id: 5, className: 'card unplayed animation'},
	{ id: 6, className: 'card unplayed animation'},
	{ id: 6, className: 'card unplayed animation'},
	{ id: 7, className: 'card unplayed animation'},
	{ id: 7, className: 'card unplayed animation'},
	{ id: 8, className: 'card unplayed animation'},
	{ id: 8, className: 'card unplayed animation'},
	{ id: 9, className: 'card unplayed animation'},
	{ id: 9, className: 'card unplayed animation'},
	{ id: 10, className: 'card unplayed animation'},
	{ id: 10, className: 'card unplayed animation'},
];
let playing = false;
let delay = 800;
let firstCard = 0;
let secondCard = 0;
let wait = false;
let previousTarget = 0;
let pairs = 0;
const gameBoard = document.querySelector('.game-board');
const restart = document.querySelector('.restart');
const playAgain = document.querySelector('.play-again');
let clicks = 0;
let code = [];

const startButton = document.querySelector('.start-game');
const startScreen = document.querySelector('.start');
const endScreen = document.querySelector('.end-screen');
const inputContainer = document.querySelector('.input');

//TIMER
let seconds = 0;
let tenthSeconds =  0;

//Music
const introMusic = document.querySelector('.intro');
const music = document.querySelector('.music');
const winMusic = document.querySelector('.win-music');
const loseMusic = document.querySelector('.lose-music');

//HIGH SCORE
const openHighScore = document.querySelector('.high-score-button');
const closeHighScore = document.querySelector('.close-high-score');
const highScore = document.querySelector('.high-score');
const highScoreContainer = document.querySelector('.high-score-container');
const submit = document.querySelector('.submit-high-score');
const name = document.querySelector('.name');
let highScoreDB = localStorage.getItem('highScoreDB');
let newHighScore = JSON.parse(highScoreDB);
let notSubmited = true;
//BACK TO START
const mainMenus = document.querySelectorAll('.back-to-start');
