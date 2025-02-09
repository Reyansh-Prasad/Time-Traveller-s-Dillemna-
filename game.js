let inventory = [];

function playSound(sound) {
    let audio = new Audio(sound);
    audio.play();
}

function makeChoice(choice) {
    if (choice === "start") {
        document.getElementById("game-container").innerHTML = `
            <p>You stand before Elias Voss’s abandoned lab. The entrance is blocked by a laser grid.</p>
            <button onclick="makeChoice('laserSecurity')">Disable Laser Security</button>
            <button onclick="makeChoice('travelToGreece')">Travel to Ancient Greece (400 BC)</button>
        `;
    } else if (choice === "laserSecurity") {
        playSound("alarm.mp3");
        document.getElementById("game-container").innerHTML = `
            <p>The lab is protected by moving laser beams! You must realign the circuits to disable them.</p>
            <p>Which wire should you cut first?</p>
            <button onclick="checkLaserSolution('red')">Red Wire</button>
            <button onclick="checkLaserSolution('blue')">Blue Wire</button>
            <button onclick="checkLaserSolution('green')">Green Wire</button>
        `;
    } else if (choice === "travelToGreece") {
        playSound("time-travel.mp3");
        document.getElementById("game-container").innerHTML = `
            <p>You arrive in Athens, 400 BC. Plato is discussing a mysterious "time paradox" in his lost writings.</p>
            <p>You find an ancient scroll with a coded message.</p>
            <button onclick="makeChoice('decodeGreekCipher')">Try to decode the cipher</button>
            <button onclick="makeChoice('start')">Go Back</button>
        `;
    } else if (choice === "decodeGreekCipher") {
        document.getElementById("game-container").innerHTML = `
            <p>The scroll says: "Χρόνος είναι το κλειδί" (Time is the key).</p>
            <p>What does it mean?</p>
            <button onclick="checkCipherSolution('time')">Time</button>
            <button onclick="checkCipherSolution('paradox')">Paradox</button>
            <button onclick="checkCipherSolution('future')">Future</button>
        `;
    }
}

function checkLaserSolution(wire) {
    if (wire === "blue") {
        playSound("success.mp3");
        document.getElementById("game-container").innerHTML = `
            <p>You cut the blue wire, and the lasers deactivate! You can now enter.</p>
            <button onclick="makeChoice('enterLab')">Enter the Lab</button>
        `;
    } else {
        playSound("alarm.mp3");
        document.getElementById("game-container").innerHTML = `
            <p>Wrong wire! The alarm blares, and you must escape before security arrives.</p>
            <button onclick="makeChoice('start')">Run Away</button>
        `;
    }
}

function checkCipherSolution(answer) {
    if (answer === "time") {
        playSound("success.mp3");
        document.getElementById("game-container").innerHTML = `
            <p>Correct! Plato’s writings hint at a hidden chamber in Elias’s lab.</p>
            <button onclick="makeChoice('start')">Return to the Lab</button>
        `;
    } else {
        playSound("error.mp3");
        document.getElementById("game-container").innerHTML = `
            <p>Wrong! The meaning is lost, and you must start over.</p>
            <button onclick="makeChoice('decodeGreekCipher')">Try Again</button>
        `;
    }
}
