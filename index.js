const imageList = {
    'r':'./images/icon-rock.svg',
    'p':'./images/icon-paper.svg',
    's':'./images/icon-scissors.svg',
    'l':'./images/icon-lizard.svg',
    'S':'./images/icon-spock.svg'
}

const handList = {
    'r':'rock',
    'p':'paper',
    's':'scissors',
    'l':'lizard',
    'S':'spock'
}

//user make your choice
let userChoice = (userPicked) => {

    let cpHand = cpChoice();
    
    let changeId = document.querySelector('#uH');
    changeId.setAttribute('id',handList[userPicked]);
    
    document.getElementById('imageSelected').src = imageList[userPicked];

    let choices = document.querySelector('.user-choices');
    choices.style.display = 'none';

    let choiceMade = document.querySelector('.show-decision');
    choiceMade.style.display = 'flex';

    changeId.style.position = 'unset';

    referee(cpHand, userPicked);
}

//computer make its choice
let cpChoice = () => {
    const hand = ['r', 'p', 's', 'l', 'S'];

    //cp make choice
    let cpDecision = Math.floor(Math.random() * 3);

    let cpHand = hand[cpDecision];
    
    let changeId = document.querySelector('#cpH');
    changeId.setAttribute('id',handList[cpHand]);
    document.getElementById('_cpH-Image').src = imageList[cpHand];

    changeId.style.position = 'unset';
    return cpHand;
}

let scoreValue = 0;

let referee = (cpHand, uHand) => {

    const values = uHand + cpHand;

    switch (values) {
        case 'sp':
        case 'pr':
        case 'rl':
        case 'lS':
        case 'Ss':
        case 'sl':
        case 'pS':
        case 'rs':
        case 'lp':
        case 'Sr':
            scoreValue++;
            setDecision('YOU WIN!');
            updateScore()
            break;
        case 'ps':
        case 'rp':
        case 'lr':
        case 'Sl':
        case 'sS':
        case 'ls':
        case 'Sp':
        case 'sr':
        case 'pl':
        case 'rS':
            setDecision('YOU LOSE!');
            break;
        case "rr":
        case "pp":
        case "ss":
        case "SS":
        case "ll":
            setDecision("IT'S A TIE!");
            break;

    }
}


let setDecision = (decision) => {
    document.querySelector('.decision').textContent = decision;
}

let updateScore = () => {
    const scoreElement = document.querySelector('.s-value');
    scoreElement.textContent = scoreValue;
    localStorage.setItem('score', scoreValue);
}

window.onload = function(){
    const storedScore = localStorage.getItem('score');
    if(storedScore){
        scoreValue = parseInt(storedScore);
    }
    
    updateScore();
}





let playAgain = () => {
    
    document.querySelector('.user-choice').lastElementChild.id = 'uH';
    document.querySelector('.cpChoice').lastElementChild.id = 'cpH';

    let choices = document.querySelector('.user-choices');
    choices.style.display = 'flex';

    let choiceMade = document.querySelector('.show-decision');
    choiceMade.style.display = 'none';
}


let showModal = () => {
    document.querySelector('.modal-bg').style.display = 'block';
    document.querySelector('.modal').style.display = 'block';
}

let closeModal = () => {
    document.querySelector('.modal-bg').style.display = 'none';
    document.querySelector('.modal').style.display = 'none';
}