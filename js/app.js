/*
Pseudocode Brainstorm

To do:
Create player that can be named
    score starts at 0

Create function for water and fish
*/

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

//Make a dom creation that generates 36 water tiles and each tile gets individual id

const createWater = () => {
    for (i=1; i<37; i++) {
        document.createElement
    }
}