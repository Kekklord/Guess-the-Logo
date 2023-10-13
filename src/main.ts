import './style.css'

var hintContainer = document.getElementById('hintContainer')
var letterContainer = document.getElementById('letterContainer')

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var word = 'FACEBOOK';
var characters = [...word.replace(/\s/g, '')];

function start() {
    generateRandom();
    characters.forEach(function (letter) {
        let button = document.createElement('button');
        button.classList.add('letterBox');
    
        button.textContent = letter;
        letterContainer?.append(button);
        
        button.addEventListener('click', () => {
            if (button.parentNode === letterContainer) {
                letterContainer?.removeChild(button)
                hintContainer?.append(button)
            } else if (button.parentNode === hintContainer) {
                hintContainer?.removeChild(button)
                letterContainer?.append(button)
            }
            checkIfCorrectWord();
        })
    })
}

function checkIfCorrectWord() {
    var words = hintContainer?.querySelectorAll('button');
    var answer = ""

    words?.forEach(function (letter) {
        answer += letter.textContent
    })
    if (answer === word) {
        console.log(answer)
    }
}

function generateRandom() {
    var maxLetters = 20;
    var numGenLetters = maxLetters - characters.length
    for(var i = 0; i < numGenLetters; i++) {
        characters.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)))
    }
}

start();