const qwerty = document.querySelectorAll('#qwerty');
let missed = 0;
const startBtn = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');



//* Add an event listener to start game button*/

startBtn.addEventListener('click', (e) => {
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
function getRandomPhraseAsArray(arr) {
    const randomPhraseAmount = Math.floor(Math.random()*arr.length);
    const randomPhrase = arr[randomPhraseAmount];
    return randomPhrase.split("");
}

//* phraseArray will call the array function into an argument/value of the funtion*/

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);


//* Game display. The function should run in a way that if there is a space, a space should be added. If not, it should get the value of 'letter'. 
/* listItem is created to create specific letters/selections in the ul. phrase was moved down from top of document to capture the ul with an id of phrase*/

function addPhraseToDisplay(arr) {
    for(let i=0; i < arr.length; i++){
        const phrase = document.querySelector('#phrase ul');
        const listItem = document.createElement('li');
        listItem.textContent = arr[i];
        if (arr[i] !== ' ') {
            listItem.classList.add('letter');
        }
        else {
            listItem.classList.add('space');
        }
        phrase.appendChild(listItem);
    }
}



//* Check letter function */
function checkLetter(clickedBtn){
    const letterChoice = document.getElementsByClassName('letter');
    let match = null;
    for(let i = 0; i < letterChoice.length; i++){
        if(letterChoice.textContent === arr[i]){
            listItem.classList.add('show');
            match = listItem.textContent;
        } 
        return match;
    }

}


//* Add event listener to keyboard so that each letter can only be chosen once 
//*Created clickedBtn so I didn't have to continuely write e.target*/
qwerty[0].addEventListener('click', (e) => {
    const clickedBtn = e.target;
    if(clickedBtn.tagName === 'BUTTON'){
        clickedBtn.classList.add('chosen');
        clickedBtn.disabled = 'true';
        const checked = checkLetter(clickedBtn);
    }   
})



//*Variable used to store the results from checkLetter function*/




//* Create a function to count missed guesses made by player */




//* Create a function that checks whether the game has been won or lost */



