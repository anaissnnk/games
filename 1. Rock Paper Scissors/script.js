/* first part */
let playButton = document.querySelector("button");
playButton.addEventListener("click", () => {
    let weaponList = document.querySelectorAll("input");
    let computerWeapon = weaponList[Math.floor(Math.random() * weaponList.length)].value;
    let playerWeapon = document.querySelector('input[name="weapon"]:checked').value;
    let playAgain = document.createElement("button")
    playButton.disabled = true;
    playAgain.textContent = "Play again?"
    playAgain.addEventListener("click", () => {
        window.location.reload();
    });
    console.log(computerWeapon);
    /* draw message*/
    if (playerWeapon === computerWeapon) {
        let drawMessage = document.createElement("p");
        drawMessage.classList.add("drawMessage");
        drawMessage.textContent = "You and your enemy bonked each other's head. There's no end to it.";
        document.body.append(drawMessage);
        document.body.append(playAgain);   
        playAgain.classList.add("playAgain");
    } 
    /* you win message*/
    else if (playerWeapon === "rock" && computerWeapon === "scissors" ||
            playerWeapon ==="paper" && computerWeapon === "rock" ||
            playerWeapon === "scissors" && computerWeapon === "paper") {
                let winMessage = document.createElement("p");
                winMessage.classList.add("winMessage");
                winMessage.textContent = "You fought, bonked your enemy on the head, and won.";
                document.body.append(winMessage);
                document.body.append(playAgain);
                playAgain.classList.add("playAgain");
            } /* you lose message*/
            else if (playerWeapon === "rock" && computerWeapon === "paper" ||
            playerWeapon ==="paper" && computerWeapon === "scissors" ||
            playerWeapon === "scissors" && computerWeapon === "rock") {
                let lostMessage = document.createElement("p");
                lostMessage.classList.add("lostMessage");
                lostMessage.textContent = "You, fought, got bonked on the head, and perished."
                document.body.append(lostMessage);
                document.body.append(playAgain);
                playAgain.classList.add("playAgain");
            }
});






