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
    //draw card
    let playerCard = document.createElement("span");
    playerCard.classList.add("player-card");
    let playerRandomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)].value;
    playerCard.textContent = playerRandomCard;
    let playerHand = document.querySelectorAll("section")[1];
    playerHand.appendChild(playerCard);
};


//computer draws function
function computerDrawsCard() {
    //draw card
    let computerCard = document.createElement("span");
    computerCard.classList.add("computer-card");
    let computerRandomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)].value;
    computerCard.textContent = computerRandomCard;
    let computerHand = document.querySelectorAll("section")[2];
    computerHand.appendChild(computerCard);    
};



//announcing winner function
function announcingWinner() {
    //player total
    let playerTotal = 0;
    let playerCards = document.querySelectorAll(".player-card");
    playerCards.forEach(card => {
        let cardValue = parseInt(card.textContent);
        playerTotal += cardValue;
    });
    //computer total
    let computerTotal = 0;
    let computerCards = document.querySelectorAll(".computer-card");
    computerCards.forEach(card => {
    let cardValue = parseInt(card.textContent);
    computerTotal += cardValue;
    });
    let announcementSection = document.querySelectorAll("section")[4];
    let resultAnnouncement = document.createElement("span");
    //player reaches 21
    if (playerTotal === 21) {
        resultAnnouncement.textContent = "You reached 21!";
        announcementSection.appendChild(resultAnnouncement);
    } else if (computerTotal === 21) {
        resultAnnouncement.textContent = "The opponent reached 21!";
        announcementSection.appendChild(resultAnnouncement);
    }
    else if (playerTotal > 21) {
        resultAnnouncement.textContent = "You went over 21!";
        announcementSection.appendChild(resultAnnouncement);
    }
    else if (computerTotal > 21) {
        resultAnnouncement.textContent = "The opponent went over 21!";
        announcementSection.appendChild(resultAnnouncement);
    }
}

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
    //stop button
    let stopButton = document.createElement("button");
    stopButton.textContent = "Stop here"
    stopButton.classList.add("stop-button");
    gameControls.append(stopButton);
    stopButton.addEventListener("click", () => {
        announcingWinner();
        drawButton.disabled = true
        if (drawButton.disabled = true) {
        drawButton.classList.add("disabled");
        }
    });
    //second card
    drawButton.addEventListener ("click", () => {
        playerDrawsCard();
        announcingWinner();
        stopButton.addEventListener("click", () => {
            announcingWinner();
            drawButton.disabled = true
            if (drawButton.disabled = true) {
            drawButton.classList.add("disabled");
            }
        });
    //computer total
    let computerTotal = 0;
    let computerCards = document.querySelectorAll(".computer-card");
    computerCards.forEach(card => {
        let cardValue = parseInt(card.textContent);
        computerTotal += cardValue;
    });
    if (computerTotal < 15) {
        computerDrawsCard();
    };
});
});










//TODO:When both players stop or bust ask if the player wants to play another round
//TODO:Update the user what happens all the time with prompts and alerts