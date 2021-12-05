const qwerty = document.getElementById('qwerty');
let missed = 0;
const startBtn = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const listItem = document.createElement('li');

startBtn.addEventListener('click', (e) =>{
    overlay.style.display = 'none';
})

const phrases = [
    'once in a lifetime',
    'time is ticking by',
    'never give up',
    'always try your best',
    'missery loves company'
]



getRandomPhraseAsArray = (phrases) => {
    const randomPhrase = Math.floor(Math.random()*phrases.length);
    return phrases[randomPhrase].split("");
}




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

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

checkLetter = (button) => {
    const letterChoice = document.querySelectorAll('letter');
    let match = null; 
    for(let i = 0; i < letterChoice.length; i++){
        if(letterChoice[i].textContent.toLowerCase() === button.textContent.toLowerCase()) {
            leterChoice[i].classList.add('show');
            match = button;
        }
    }
    return match;
}

qwerty.addEventListener('click', (e) =>{ 
    const clickedBtn = e.target;
    if (clickedBtn.nodeName === 'BUTTON'){
        clickedBtn.classList.add('chosen');
        clickedBtn.disabled = 'true';
        let letterFound = checkLetter(clickedBtn);
        if (letterFound === null) {
            missed += 1;

        }
    }
});
