
let player = {
    name: "John",
    chips: 43   
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';

let messageEl = document.getElementById("message-el");
/* let sumEl = document.getElementById("sum-el"); */
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let value = Math.floor( Math.random()*13 ) + 1
    if (value === 1) {
        value = 11;
    } else if (value > 10 ) {
        value = 10
    }
    return value   
}

function startGame() {
    isAlive = true
    let firstcard  = getRandomCard();
    let secondcard = getRandomCard();
    cards = [firstcard, secondcard];
    sum = firstcard + secondcard;
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    
    cardsEl.textContent = "Cards: " 
    for (let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    // render out ALL the cards we have
    if (sum < 21) {
        message= "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newcard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}