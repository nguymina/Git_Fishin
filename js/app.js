/*
*/

//Fish List
const fishes = [
    smelt = {
        name: "Smelt",
        cost: 20,
    },
    crucianCarp = {
        name: "Crucian Carp",
        cost: 60,
    },
    piranha = {
        name: "Piranha",
        cost: 100,
    },
    yellowPerch = {
        name: "Yellow Perch",
        cost: 150,
    },
    rainbowTrout = {
        name: "Rainbow Trout",
        cost: 200,
    },
    tilapia = {
        name: "Tilapia",
        cost: 230,
    },
    largemouthBass = {
        name: "Largemouth Bass",
        cost: 250,
    },
    betta = {
        name: "Betta",
        cost: 280,
    },
    catFish = {
        name: "Catfish",
        cost: 300,
    },
    kingSalmon = {
        name: "King Salmon",
        cost: 600,
    },
];


//Player Class
class Player {
    constructor() {
        this.score = 0;
        this.rod = "Old Rod";
    }
    
    //Fishing Rod(s)
    oldRod (x) {
        let tryCatch = null;
        let text = "";
        
        //King Salmon 1%
        if (x === 99) {
            tryCatch = fishes[9];
            this.score += tryCatch.cost;
            text = ("You caught a " + tryCatch.name);
            catchText.textContent = text;
        }
        //Catfish 4%
        if (x<99 && x>94) {
            tryCatch = fishes[8];
            this.score += tryCatch.cost;
            text = ("You caught a " + tryCatch.name);
            catchText.textContent = text;
        }
        // Betta 5%
        if (x<95 && x>89) {
            tryCatch = fishes[7];
            this.score += tryCatch.cost;
            text = ("You caught a " + tryCatch.name);
            catchText.textContent = text;
        }
        //Largemouth Bass 5%
        if (x<90 && x>84) {
            tryCatch = fishes[6];
            this.score += tryCatch.cost;
            text = ("You caught a " + tryCatch.name);
            catchText.textContent = text;
        }
        //Tilapia 5%
        if (x<85 && x>79) {
            tryCatch = fishes[5];
            this.score += tryCatch.cost;
            text = ("You caught a " + tryCatch.name);
            catchText.textContent = text;
        }
        //Rainbox Trout 10%
        if (x<80 && x>69) {
            tryCatch = fishes[4];
            this.score += tryCatch.cost;
            text = ("You caught a " + tryCatch.name);
            catchText.textContent = text;
        }
        //Yellow Perch 15%
        if (x<70 && x>54) {
            tryCatch = fishes[3];
            this.score += tryCatch.cost;
            text = ("You caught a " + tryCatch.name);
            catchText.textContent = text;
        }
        //Piranha 15%
        if (x<55 && x>39) {
            tryCatch = fishes[2];
            this.score += tryCatch.cost;
            text = ("You caught a " + tryCatch.name);
            catchText.textContent = text;
        }
        //Crucian Carp 20%
        if (x<40 && x>19) {
            tryCatch = fishes[1];
            this.score += tryCatch.cost;
            text = ("You caught a " + tryCatch.name);
            catchText.textContent = text;
        }
        //Smelt 20%
        if (x<20) {
            tryCatch = fishes[0];
            this.score += tryCatch.cost;
            text = ("You caught a " + tryCatch.name);
            catchText.textContent = text;
        }
    }
};

const p1 = new Player (); // Tester player Remember to comment out
const p2 = new Player ();

// Random number generator
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

// DOMS
let waterPlacement = document.getElementById('water');

let p1Score = document.getElementById('p1score');

let catchAlert = document.getElementById('caughtTextAlert');
    let catchText = document.getElementById('fishTextAlert');

let sideBar = document.getElementById("sidebar")

let popUp = document.getElementById("popup");
    let store = document.getElementById("store");
    let instructions = document.getElementById("instructions");

let p2Placement = document.getElementById("p2");
let p2SpritePlacement = document.getElementById("p2Position")

// DOM creation for P2

let p2Score = document.createElement("h2");
    p2Score.id = "p2score";
    p2Placement.appendChild(p2Score);

let p2Rod = document.createElement("p");
    p2Rod.id = "p2rod";
    p2Placement.appendChild(p2Rod);

let numberFish = document.createElement("h3");
    numberFish.id = "fishRemaining";
    sideBar.appendChild(numberFish);


//Image references upload these later
const images = [
    "../Git_Fishin/img/fish_shadow_transparent.gif",
    "../Git_Fishin/img/Transparent 2.PNG"
];

//Two Player Variables
let fishCounter = 4;
let playerTwo = false;

//Create water tiles
const createWater = () => {
    let waterID = 0;
    for (i=0; i<36; i++) {
        let waterTile = document.createElement("img");
        waterTile.setAttribute("src", images[1]);
        waterTile.id = waterID.toString();
        waterTile.className = "fish";
        waterID ++;
        waterPlacement.appendChild(waterTile);
    }
};
createWater();

//fish appear and disappear
const createFish = () => {
    let x = getRandomInt(3);
    //Creates x fish at each instance in random spots
    for(i=0; i<=x; i++) {        
        let numID = getRandomInt(36);
        let fish = document.getElementById(numID.toString());
        fish.setAttribute("src", images[0]);
        fish.addEventListener("click", fishCaught, {once: true}); // allows the function to only run once, will switch once to false, function only runs when once is true - Mozilla
        
        //Switches gif to transparent image
        setTimeout(() => {
                fish.setAttribute("src", images[1]);
                fish.removeEventListener("click", fishCaught);
                console.log("fish gone");
            }, 4500);
    }
};

//Runs function to continuously create fish and remove fish
let time = 0;
const timePasses = () => {
    time = setInterval(() => {
        createFish();
    }, 5000);
};

//Reset
const reset = () => {
    clearInterval(time);
};

// Catch a fish!
let currentPlayer = p1;

const fishCaught = () => {
    let fishID = getRandomInt(100);

    //Two Player Fish remaining
    if(playerTwo === true) {
        fishCounter --;
        numberFish.textContent = ("Fish Remaining = " + fishCounter);
    };
    // Invokes fishing rod
    currentPlayer.oldRod(fishID);
    // Displays player score
    if (currentPlayer === p2) {
        p2Score.textContent = ("Score: $" + p2.score);
    }
    p1Score.textContent = ("Score: $" + p1.score);
    //Two Player Switch Player
    if(playerTwo === true) {
        if(currentPlayer === p1) {
            currentPlayer = p2;
        } else {
            currentPlayer = p1;
        }
    };
    console.log(currentPlayer);
    
    //Stops fish spawn
    reset();

    // OK button
    let okButton = document.createElement("button");
    okButton.textContent = "OK";
    okButton.className = "button";
    catchAlert.appendChild(okButton);
    if (fishCounter != 0) {
        okButton.addEventListener("click", timePasses);
    };
    okButton.addEventListener("click", () => {
        catchText.textContent = "";
        okButton.remove();
        console.log("removed");
    });

        // Winner
    if (fishCounter === 0) {
        let winPop = document.createElement("article");
        winPop.id = "popup";
        winPop.className = "winpopup";
        document.body.appendChild(winPop);
        if (p1.score > p2.score) {
            winPop.textContent = "Player 1 Wins!"
        } else {
            winPop.textContent = "Player 2 Wins!"
        }

        let resetInstructions = document.createElement("p");
        resetInstructions.textContent = "Press Reset to Play Again!";
        resetInstructions.className = "winpopup";
        winPop.appendChild(resetInstructions);
    };
};

//Player two

const createPlayer2 = () => {
    playerTwo = true;

    let p2 = new Player ();

    p2Score.textContent = "Score: $0";
    p2Rod.textContent = "Old Rod";

    let p2Reel = document.createElement("button");
    p2Reel.id = "reel2";
    p2Reel.className = "button";
    p2Reel.textContent = "Reel";
    p2Placement.appendChild(p2Reel);

    let p2Sprite = document.createElement("img");
    p2Sprite.setAttribute("src", "img/Player2.GIF");
    p2Sprite.id = "p2Sprite";
    p2SpritePlacement.appendChild(p2Sprite);

    let store = document.getElementById("store");
    store.remove();

    numberFish.textContent = "Fish Remaining = 10";
};


//Start Menu

const removePopUp = () => {
    let popUpStart = document.getElementById("popup")
    popUpStart.remove();
};

const singlePlayerButton = () => {
    let p1 = new Player ();
    timePasses();
    removePopUp();
};
let p1Start = document.getElementById("p1start");
p1Start.addEventListener("click", singlePlayerButton);

const twoPlayerButton = () => {
    createPlayer2();
    timePasses();
    removePopUp();
}
let p2Start = document.getElementById("p2start");
p2Start.addEventListener("click", twoPlayerButton);


// Hard Reset Functions
const hardReset = () => {
    reset();
    // Player Two Reset
    if(playerTwo === true) {
        playerTwo = false;
        
        p2Score.textContent = "";
        p2Rod.textContent = "";
        let p2SpriteRemoval = document.getElementById("p2Sprite");
            p2SpritePlacement.removeChild(p2SpriteRemoval);
        let p2ReelRemoval = document.getElementById("reel2");
            p2Placement.removeChild(p2ReelRemoval);
        numberFish.textContent = "";

        let storeButton = document.createElement("button");
        storeButton.className = "button";
        storeButton.id = "store";
        storeButton.textContent = "Store";
        sideBar.appendChild(storeButton);
    };

    //Recreate Start Menu
    let startUp = document.createElement("article");
    startUp.id = "popup";
    document.body.appendChild(startUp);
        let startMenu = document.createElement("div");
        startMenu.id = "startmenu";
        startUp.appendChild(startMenu);
            let startTitle = document.createElement("h1");
                startTitle.id = "title";
                startTitle.textContent = "Let's Git Fishing";
                startMenu.appendChild(startTitle);
            let p1Button = document.createElement("button");
                p1Button.id = "p1start";
                p1Button.className = "button";
                p1Button.textContent = "One Player";
                p1Button.addEventListener("click", singlePlayerButton);
                startMenu.appendChild(p1Button);
            let p2Button = document.createElement("button");
                p2Button.id = "p2start";
                p2Button.className = "button";
                p2Button.textContent = "Two Player"
                p2Button.addEventListener("click", twoPlayerButton);
                startMenu.appendChild(p2Button);
};
let resetBut = document.getElementById("reset");
resetBut.addEventListener("click", hardReset);
