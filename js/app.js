const qwerty = document.querySelectorAll('#qwerty');
let missed = 0;
const startBtn = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const listItem = document.createElement('li');

//*Creating an eventlistener to start the game when the button is clicked*/
startBtn.addEventListener('click', (e) =>{
    overlay.style.display = 'none';
})

//*Creating the 5 distinct phrases for the random phrase array*/
const phrases = [
    'once in a lifetime',
    'time is ticking by',
    'never give up',
    'always try your best',
    'missery loves company'
];

//*Creating a random function for the phrases array*/
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

function addPhraseToDisplay(string) {
    for(let i=0; i < string.length; i++){
        const phrase = document.querySelector('#phrase ul');
        const listItem = document.createElement('li');
        listItem.textContent = string[i];
        if (string[i] !== ' ') {
            listItem.classList.add('letter');
        }
        else {
            listItem.classList.add('space');
        }
        phrase.appendChild(listItem);
    }
}

//* Add event listener to keyboard so that each letter can only be chosen once 
//This the checkLetter function has been moved inside the even listener, as requested
//*Created clickedBtn so I didn't have to continuely write e.target*/
qwerty[0].addEventListener('click', (e) => {
    const heart = document.querySelectorAll('.tries img');
    const clickedBtn = e.target;
    if(clickedBtn.tagName === 'BUTTON'){
        clickedBtn.classList.add('chosen');
        clickedBtn.disabled = 'true';
        letterFound = '';
    }   
    function checkLetter(letter){
        const letterChoice = document.getElementsByClassName('letter');
        const listItem = document.createElement('li');
        let match = null;
        for(let i = 0; i < letterChoice.length; i++){
            if(letterChoice[i].textContent === phrases[i]){
                listItem.classList.add('show');
                match = letterChoice.textContent.toLowerCase();
                match++;
            } 
        
        }
        if (match === null) {
            letterFound = null;
            match = 0;
        } else if(match > 0) {
            letterFound = letter;
            match = 0;
        }
    }
    const selectedButton = checkLetter(clickedBtn.textContent.toLowerCase());

     if ( !selectedButton ) {
         missed += 1;
     
 
         for ( let i=0; i < heart.length; i++ ) {
 
             if (missed === 1) {
             heart[0].src = 'images/lostHeart.png';
                 }
 
              else if (missed === 2) {
                 heart[1].src = 'images/lostHeart.png';
 
                 } else if (missed === 3) {
                     heart[2].src = 'images/lostHeart.png';
                     
                     }  else if (missed === 4) {
                         heart[3].src = 'images/lostHeart.png';
                         
                         } else if (missed === 5) {
                             heart[4].src = 'images/lostHeart.png';
                             
                         }
                        }
                    }
        checkWin()
})

function checkWin() {
    const letterMatch = document.getElementsByClassName('letter');
    const showMatch = document.getElementsByClassName('show');
    if(letterMatch.length === showMatch.length) {
        overlay.classList.add('win');
        document.querySelector('.title').textContent = "You've won!!";
        overlay.style.display = 'flex';
    }

    if(missed > 4) {
        overlay.classList.add('lose');
        document.querySelector('.title').textContent = "Sorry, please try again.";
        overlay.style.display = 'flex';
    }
}
