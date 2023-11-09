const cardDeck = [
{
    name: '1',
    value:  1 ,
},

{
    name: '2',
    value:  2 ,
},

{
    name: '3',
    value:  3 ,
},

{
    name: '4',
    value:  4 ,
},

{
    name: '5',
    value:  5 ,
},

{
    name: '6',
    value:  6 ,
},

{
    name: '7',
    value:  7 ,
},

{
    name: '8',
    value:  8 ,
},

{
    name: '9',
    value:  9 ,
},

{
    name: '10',
    value:  10 ,
},

{
    name: 'Jack',
    value:  10 ,
},

{
    name: 'Queen',
    value:  10 ,
},

{
    name: 'King',
    value: 10 ,
},


];

//player draws function
function playerDrawsCard() {
    let playerCard = document.createElement("span");
    playerCard.classList.add("player-card");
    let playerRandomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)].value;
    playerCard.textContent = playerRandomCard;
    let playerHand = document.querySelectorAll("section")[1];
    playerHand.appendChild(playerCard);
    let playerTotal = 0;
    let playerCards = document.querySelectorAll(".player-card");
    playerCards.forEach(card => {
        let cardValue = parseInt(card.textContent);
        playerTotal += cardValue;
    });
};


//computer draws function
function computerDrawsCard() {
    let computerCard = document.createElement("span");
    computerCard.classList.add("computer-card");
    let computerRandomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)].value;
    computerCard.textContent = computerRandomCard;
    let computerHand = document.querySelectorAll("section")[2];
    computerHand.appendChild(computerCard);    
    let computerTotal = 0;
    let computerCards = document.querySelectorAll(".computer-card");
    computerCards.forEach(card => {
        let cardValue = parseInt(card.textContent);
        computerTotal += cardValue;
    });
};

let playButton = document.querySelector("button");

playButton.addEventListener("click", () => {
    //game start
    playerDrawsCard();
    computerDrawsCard();
    //disable start button after use
    playButton.disabled = true;
    if (playButton.disabled = true) {
        playButton.classList.add("disabled");
    }
    //draw button
    let drawButton = document.createElement("button");
    drawButton.textContent = "Draw again?"
    drawButton.classList.add("draw-button");
    let gameControls = document.querySelectorAll("section")[3];
    gameControls.appendChild(drawButton);
    //second card
    drawButton.addEventListener ("click", () => {
        playerDrawsCard();
        computerDrawsCard();
    });

});



//TODO:Make the PC also draw a card and decide to quit or not.
//TODO:Try not to make the PC cheat, make some AI to play "intelligently"
//TODO:Alternatively, use the default casino rule: the dealer keeps drawing until he reaches 15
//TODO:When both players stop or bust ask if the player wants to play another round
//TODO:Update the user what happens all the time with prompts and alerts