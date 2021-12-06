//*Declared variables that can be used throughout*/
const qwerty = document.getElementById('qwerty');
let missed = 0;
const startBtn = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const listItem = document.createElement('li');

//*eventListener that will start the game when the button is clicked*/
startBtn.addEventListener('click', (e) =>{
    overlay.style.display = 'none';
})

//*creating a random array of phrases that will be used in the game*/
const phrases = [
    'once in a lifetime',
    'time is ticking by',
    'never give up',
    'always try your best',
    'misery loves company'
]


//*Creating a function that will generate a random phrase from the phrases array and split it into separate letters
//to be used in conjuction with the keyboard*/
getRandomPhraseAsArray = (phrases) => {
    const randomPhrase = Math.floor(Math.random()*phrases.length);
    return phrases[randomPhrase].split("");
}


//* Game display. The function should run in a way that if there is a space, a space should be added. If not, it should get 
//the value of 'letter'. phraseItems and listItem were created to create specific letters/selections in the ul.
//pharseItems was appended so that the listItems (li) will be located inside of the phraseItems(ul)*/
addPhraseToDisplay = (phrases) => {
    for(let i=0; i < phrases.length; i++) {
        const phraseItems = document.querySelector('#phrase ul');
        const listItem = document.createElement('li');
        if (phrases[i] !== ' ') {
            listItem.classList.add('letter');
            listItem.textContent = phrases[i];
        }
        else {
            listItem.classList.add('space');
        }
        phraseItems.appendChild(listItem);
    }
}

//*Calling created functions*/
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

//*Creating a function for the letter that is clicked. If it matches the letters in the array, the letter will show up in the appropriate spot
//in the array. letterChoice is linked to the letter element in the phrases array.*/
checkLetter = (button) => {
    const letterChoice = document.querySelectorAll('.letter');
    let match = null; 
    for(let i = 0; i < letterChoice.length; i++){
        if(letterChoice[i].textContent.toLowerCase() === button.textContent.toLowerCase()) {
            letterChoice[i].classList.add('show');
            match = letterChoice[i].textContent;
        }
    }
    return match;
}

//*Creating an eventListener to impacts the amount of lifes left in the game. 
//hearts variable was created to replace/select all the .tries images in the html
//if a letter is incorrect, the lostHeart image should replace the life image.*/
qwerty.addEventListener('click', (e) =>{ 
    const heart = document.querySelectorAll('.tries img')
    const clickedBtn = e.target;
    if (clickedBtn.nodeName === 'BUTTON'){
        clickedBtn.classList.add('chosen');
        clickedBtn.disabled = 'true';
        let letterFound = checkLetter(clickedBtn);
        if (letterFound === null) {
            heart[missed].src = 'images/lostHeart.png';
            missed += 1;
        }
        
    }
    checkWin();
});

//*Creating a function to check provide a "win" or "lose" phrase on the players screen once the lifes run out or all the letters are guessed.
//matchLetter was used to identify all the letter elements.*/
function checkWin(){ 
    const matchLetter = document.getElementsByClassName('letter');
    const show = document.getElementsByClassName('show');
    if(matchLetter.length === show.length){
        overlay.classList.add('win');
        startBtn.textContent = "You won the game!"
        overlay.style.display = 'flex';
    } 

    if(missed > 4){
        overlay.classList.add('lose'); 
        startBtn.textContent = 'Sorry, please try again.';
        overlay.style.display = 'flex';
    }
}
    

