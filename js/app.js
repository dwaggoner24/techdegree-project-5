const buttons = document.querySelectorAll('#qwerty');
const phrase = document.querySelector('#phrases ul');
let missed = 0;
const startBtn = document.querySelector('.btn_reset');
const overlay = document.getElementById('overlay');


//* Add an event listener to start game button*/

startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

//* Create an array of 5 phrases*/

const phrases = [
    'once in a lifetime',
    'time is ticking by',
    'never give up',
    'always try your best',
    'missery loves company'
];

//*Create a random funciton for the phrases*/
const getRandomPhraseAsArray = arr => {
    const randomPhrase = Math.floor(Math.random()*arr.length);
    return arr[randomPhrase].split("");
}




//* Game display */




//* Check letter function */




//* Add event listener to keyboard so that each letter can only be chosen once */




//* Create a function to count missed guesses made by player */




//* Create a function that checks whether the game has been won or lost */



