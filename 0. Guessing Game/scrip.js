let playButton = document.querySelector("button");

playButton.addEventListener("click", () => {
    let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
    let secretNumber = numberList[Math.floor(Math.random() * numberList.length)];
    let inputField = document.querySelector("input");
    let playerNumber = inputField.value;
    if (playerNumber == secretNumber) {
        alert("Awesome! " + playerNumber + " was correct.");
    } else {
        alert("Bummer... You guessed " + playerNumber + " but it was " + secretNumber );
    }
})




