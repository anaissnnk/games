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

//FIRST PART
//TODO:Ask the user if he wants to draw a card
let playButton = document.querySelector("button");

playButton.addEventListener("click", () => {
    let playerHand = document.createElement("section");
    playerHand.classList.add("player-card");
    document.body.append(playerHand);
    let randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)].value;
    playerHand.textContent = randomCard;
});






//TODO:If yes, add a card (a random number from the possible cards, you don't need to "remove" the card for now)
//TODO:Tell him if he bust or not

