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

// Random number generator
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

// DOMS
let waterPlacement = document.getElementById('water');

let moneyMade = document.getElementById('p1score');

let catchAlert = document.getElementById('caughtTextAlert');
    let catchText = document.getElementById('fishTextAlert');


//Image references upload these later
const images = [
    "../Git_Fishin/img/fish_shadow_transparent.gif",
    "../Git_Fishin/img/Transparent 2.PNG"
];


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

// Catch a fish!
const fishCaught = () => {
    let fishID = getRandomInt(100);
    p1.oldRod(fishID);
    moneyMade.textContent = ("Score: $" + p1.score);

    //Display what was caught
};

//fish appear and disappear

const createFish = () => {
    let x = getRandomInt(3);
    //Creates x fish at each instance in random spots
    for(i=0; i<=x; i++) {        
        let numID = getRandomInt(36);
        let fish = document.getElementById(numID.toString());
        fish.setAttribute("src", images[0]);
        fish.addEventListener("click", fishCaught);
        
        //Switches gif to transparent image
        setTimeout(() => {
                fish.setAttribute("src", images[1]);
                fish.removeEventListener("click", fishCaught);
                console.log("fish gone");
            }, 4500);
    }
}

//Runs function to continuously create fish and remove fish
let time = 0;
const timePasses = () => {
    time = setInterval(() => {
        createFish();
    }, 5000);
};
timePasses();
//Start
const startGame = () => {
    timePasses();
    createWater();
};

// Reset for multi-use

const reset = () => {
    clearInterval(time);
};
let resetBut = document.getElementById("reset");
resetBut.addEventListener("click", reset);
