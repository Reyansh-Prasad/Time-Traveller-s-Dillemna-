const gameText = document.getElementById("game-text");
const choices = document.getElementById("choices");
const inventory = document.getElementById("inventory");

let playerInventory = [];

function showText(text) {
    gameText.innerHTML = text;
}

function showChoices(options) {
    choices.innerHTML = "";
    options.forEach(option => {
        let button = document.createElement("button");
        button.innerText = option.text;
        button.onclick = option.action;
        choices.appendChild(button);
    });
}

function updateInventory() {
    inventory.innerHTML = "Inventory: " + (playerInventory.length ? playerInventory.join(", ") : "Empty");
}

// Game Start
function startGame() {
    showText("You wake up in a futuristic lab. Elias Voss, the inventor, has vanished. The time machine hums softly...");
    showChoices([
        { text: "Search the lab", action: searchLab },
        { text: "Inspect the time machine", action: inspectMachine }
    ]);
}

// Puzzles
function searchLab() {
    showText("You find a locked door with a DNA scanner.");
    showChoices([
        { text: "Attempt DNA Lock Puzzle", action: dnaPuzzle },
        { text: "Go Back", action: startGame }
    ]);
}

function dnaPuzzle() {
    showText("Match the correct DNA sequence to unlock the door. Pick one: A, B, or C.");
    showChoices([
        { text: "Choose A", action: () => puzzleResult("A") },
        { text: "Choose B", action: () => puzzleResult("B") },
        { text: "Choose C", action: () => puzzleResult("C") }
    ]);
}

function puzzleResult(choice) {
    if (choice === "B") {
        showText("The DNA scanner accepts your input. The door unlocks!");
        playerInventory.push("Lab Access");
        updateInventory();
        showChoices([{ text: "Enter the lab", action: enterLab }]);
    } else {
        showText("Wrong DNA. The scanner flashes red. Try again.");
        choices.classList.add("glitch");
        setTimeout(() => choices.classList.remove("glitch"), 500);
        showChoices([{ text: "Try Again", action: dnaPuzzle }]);
    }
}

function enterLab() {
    showText("Inside the lab, you find a holographic message left by Elias.");
    showChoices([{ text: "Decode Message", action: cipherPuzzle }]);
}

function cipherPuzzle() {
    showText("The hologram displays scrambled symbols. You must decipher them.");
    showChoices([
        { text: "Translate using frequency analyzer", action: successCipher },
        { text: "Guess randomly", action: failCipher }
    ]);
}

function successCipher() {
    showText("You translate the message. Elias says: 'Find the key in 400 BC...'");
    playerInventory.push("Ancient Key Clue");
    updateInventory();
    showChoices([{ text: "Use Time Machine", action: timeTravel }]);
}

function failCipher() {
    showText("Wrong translation. The hologram glitches out.");
    choices.classList.add("glitch");
    setTimeout(() => choices.classList.remove("glitch"), 500);
    showChoices([{ text: "Try Again", action: cipherPuzzle }]);
}

function timeTravel() {
    showText("You set the time machine for Ancient Greece, 400 BC...");
    showChoices([
        { text: "Activate Time Jump", action: travelToAncientGreece }
    ]);
}

function travelToAncientGreece() {
    showText("You arrive in Plato’s Academy. A hidden scroll contains a clue.");
    showChoices([{ text: "Read Scroll", action: ancientPuzzle }]);
}

function ancientPuzzle() {
    showText("The scroll contains a puzzle: Arrange the historical events in the right order.");
    showChoices([
        { text: "Correct Order", action: correctAncient },
        { text: "Random Guess", action: wrongAncient }
    ]);
}

function correctAncient() {
    showText("The scroll reveals the location of the key!");
    playerInventory.push("Elias’s Hidden Key");
    updateInventory();
    showChoices([{ text: "Return to the Lab", action: backToLab }]);
}

function wrongAncient() {
    showText("Plato’s writings reject your answer. Try again.");
    choices.classList.add("glitch");
    setTimeout(() => choices.classList.remove("glitch"), 500);
    showChoices([{ text: "Try Again", action: ancientPuzzle }]);
}

function backToLab() {
    showText("You return to the lab with the key. The final vault awaits...");
    showChoices([{ text: "Unlock Vault", action: finalPuzzle }]);
}

function finalPuzzle() {
    showText("The vault requires a quantum frequency code. Adjust the dials...");
    showChoices([
        { text: "Tune correctly", action: finalSuccess },
        { text: "Guess frequency", action: finalFail }
    ]);
}

function finalSuccess() {
    showText("The vault opens! Elias’s secret is revealed...");
    showChoices([{ text: "End Game", action: endGame }]);
}

function finalFail() {
    showText("Wrong frequency. The machine sparks!");
    choices.classList.add("glitch");
    setTimeout(() => choices.classList.remove("glitch"), 500);
    showChoices([{ text: "Try Again", action: finalPuzzle }]);
}

function endGame() {
    showText("Congratulations! You solved the Time Traveler’s Dilemma!");
}

// Start the game
startGame();
