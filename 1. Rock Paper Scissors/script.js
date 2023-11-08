/* first part */
let playButton = document.querySelector("button");
playButton.addEventListener("click", () => {
    let weaponList = document.querySelectorAll("input");
    let computerWeapon = weaponList[Math.floor(Math.random() * weaponList.length)].value;
    let playerWeapon = document.querySelector('input[name="weapon"]:checked').value;
    let playAgain = document.createElement("button")
    playAgain.textContent = "Play again?"
    playAgain.addEventListener("click", () => {
        window.location.reload();
    });
    console.log(computerWeapon);
    /* draw message*/
    if (playerWeapon === computerWeapon) {
        let drawMessage = document.createElement("p");
        drawMessage.textContent = "You and the enemy bonked each other's head. Legends say you're still going at it without seeing an end to it.";
        document.body.append(drawMessage);
        document.body.append(playAgain);   
    } 
    /* you win message*/
    else if (playerWeapon === "rock" && computerWeapon === "scissors" ||
            playerWeapon ==="paper" && computerWeapon === "rock" ||
            playerWeapon === "scissors" && computeWeapon === "paper") {
                let winMessage = document.createElement("p");
                winMessage.textContent = "You fought, bonked the enemy on the head, and won.";
                document.body.append(winMessage);
                document.body.append(playAgain);
            } /* you lose message*/
            else if (playerWeapon === "rock" && computerWeapon === "paper" ||
            playerWeapon ==="paper" && computerWeapon === "scissors" ||
            playerWeapon === "scissors" && computeWeapon === "rock") {
                let lostMessage = document.createElement("p");
                lostMessage.textContent = "You, fought, got bonked on the head, and perished."
                document.body.append(lostMessage);
                document.body.append(playAgain);
            }
});


/*second part*/





