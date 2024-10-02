'use strict';

// Selecting elements

const player = document.querySelector('.player')
const playerZero = document.querySelector('.player--0')
const playerOne = document.querySelector('.player--1')
const scoreZero = document.querySelector('#score--0')
const currentZero = document.querySelector('#current--0')
const scoreOne = document.querySelector('#score--1')
const currentOne = document.querySelector('#current--1')
const dice = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Setting the game to its initial state 

scoreZero.textContent = 0;
scoreOne.textContent = 0;
dice.classList.add('hidden')

// Defining Variables

let roll = 0;
let currentScore = 0;

// Rolling the dice

btnRoll.addEventListener('click', function () {
    roll = Math.trunc(Math.random() * 6 + 1)
    dice.classList.remove('hidden')
    dice.src = `imgs/dice-${roll}.png`
    if (roll !== 1) {
        currentScore += roll;
        if (playerZero.classList.contains('player--active')) {
            currentZero.textContent = currentScore;
        }
        else {
            currentOne.textContent = currentScore;
        }
    }
    else {
        currentScore = 0;
        if (playerZero.classList.contains('player--active')) {
            playerZero.classList.remove('player--active')
            playerOne.classList.add('player--active')
            currentZero.textContent = 0;
        }
        else {
            playerZero.classList.add('player--active')
            playerOne.classList.remove('player--active')
            currentOne.textContent = 0;
        }
    }
})

// Holding values 

btnHold.addEventListener('click', function () {
    if (playerZero.classList.contains('player--active')) {
        currentScore = 0;
        scoreZero.textContent = Number(scoreZero.textContent) + Number(currentZero.textContent);
        if (scoreZero.textContent >= 100) {
            playerZero.classList.add('player--winner')
        }
        currentZero.textContent = 0;
        playerZero.classList.remove('player--active')
        playerOne.classList.add('player--active')
    }
    else {
        currentScore = 0;
        scoreOne.textContent = Number(scoreOne.textContent) + Number(currentOne.textContent);
        if (scoreOne.textContent >= 100) {
            playerOne.classList.add('player--winner')
        }
        currentOne.textContent = 0;
        playerZero.classList.add('player--active')
        playerOne.classList.remove('player--active')
    }
})

// Resetting the game

btnNew.addEventListener('click', function () {
    scoreZero.textContent = 0;
    scoreOne.textContent = 0;
    currentZero.textContent = 0;
    currentOne.textContent = 0;
    playerZero.classList.add('player--active')
    playerOne.classList.remove('player--active')
    dice.classList.add('hidden')
})


