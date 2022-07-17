/*
Pseudocode Brainstorm

To do:
Create player that can be named
    score starts at 0

Create function for water and fish
*/

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
        cost: 210,
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
        name: "kingSalmon",
        cost: 600,
    },
];


class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.rod = "Old Rod";
    }
};



// Random number generator

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

// Water + fish generation

let waterPlacement = document.getElementById('water');
console.log(waterPlacement);
console.log("connected");

//Create water tiles

const createWater = () => {
    let waterID = 1;
    for (i=1; i<37; i++) {
        let waterTile = document.createElement("img");
        waterTile.setAttribute("src", "../Git_Fishin/img/Transparent 2.PNG");
        waterTile.id = waterID.toString();
        waterTile.className = "fish";
        waterID ++;
        waterPlacement.appendChild(waterTile);
    }
};
createWater();

//fish appear and disappear

const images = [
    "../Git_Fishin/img/fish_shadow_transparent.gif",
    "../Git_Fishin/img/Transparent 2.PNG"
];

let fishTimer = 0;

const createFish = () => {
    for(i=0; i<3; i++) {
        let numID = getRandomInt(36);
        let fish = document.getElementById(numID.toString());
        fish.setAttribute("src", images[0]);
        setTimeout(() => {
                fish.setAttribute("src", images[1]);
                console.log("fish gone");
            }, 4500);
    }
}

const timePasses = () => {
    setInterval(() => {
        fishTimer ++;
        console.log(fishTimer);
        createFish();
    }, 5000);
};



