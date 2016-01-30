var Item = function (itemName, itemModifier, itemDescription) {
    this.name = itemName;
    this.modifier = itemModifier;
    this.description = itemDescription;
};

var items = {
    shield: new Item("Shield", .2, "Block the attacks!"),
    sword: new Item("Sword", 1.5, "Stabbem!"),
    helmet: new Item("Helmet", 0.05, "Protect your dome!"),
    sandals: new Item("Sandals", 0.05, "Hey, nice flipflops!"),
    chestPlate: new Item("Chest Plate", .3, "Big Shiny Metal")
};


var player = {
    health: 100,
    hits: 0,
    name: "King Kong",
    proWidth: document.getElementById("pBar"),
    playerItems: [items.shield],
    //Slap, Punch, and Kick: subtracts players health by a defined number in the corresponding function.
    //Increase the Hit count by 1 and calls in the update function that will update health and hit. 
    damage: 0,
    addMods: function () {
        var modifierTotal = 0;
        for (var index = 0; index < this.playerItems.length; index++) {
            modifierTotal += this.playerItems[index].modifier;
            // console.log(modifierTotal);
        } return modifierTotal;
    },
    action: function (attack) {
        if (attack === "slap") {
            this.health--;
            return this.damage = -1
        } else if (attack === "punch") {
            this.health -= 5;
            return this.damage = -5
        } else if (attack === "kick") {
            this.health -= 10;
            return this.damage = -10
        } else if (attack === "combo") {
            this.health = this.health -= 25;
            return this.damage = -25
        } else if (attack === "death") {
            this.health -= this.health;
            return this.health = 0;
        }
    },
    playGame: function (playerPick) {
        this.actiomadn(playerPick);
        this.reduceDamage();
        this.hit();
        this.damaged();
        this.barUpdate();
        this.update();
    },
    reduceDamage: function () {
        this.health -= this.damage * this.addMods();
        this.health = +(this.health.toFixed(1));
    },
    //Updates the players health and player hits after damage and hit as been updated accordingly
    //Updates color of the panel based on the players health.  Flashes the color to show damaged happen.
    update: function () {
        document.getElementById("pHealth").textContent = this.health.toString();
        document.getElementById("pHits").innerText = this.hits.toString();
        document.getElementById("pName").textContent = this.name;
        if (this.health <= 50) {
            document.getElementById("player-panel").classList.add("panel-warning");
            if (this.health <= 25) {
                document.getElementById("player-panel").classList.add("panel-danger");
                if (this.health === 0.00) {
                    death();
                }
            }
        }

    },

    barUpdate: function () {
        this.proWidth.style.width = this.health + '%';
        if (this.health <= 50) {
            document.getElementById("pBar").classList.remove("progress-bar-success");
            document.getElementById("pBar").classList.add("progress-bar-warning");
            if (this.health <= 25) {
                document.getElementById("pBar").classList.remove("progress-bar-warning");
                document.getElementById("pBar").classList.add("progress-bar-danger");
            }
        }

    },
    //Allows players to name the player.
    reName: function () {
        this.name = prompt("Give yourself a name to be called as", "King Kong");
        this.update();
    },
    //keeping track of how many times a hit button as been selected.
    hit: function () {
        this.hits += 1;
    },

    alive: this.health > 0,
    damaged: function () {
        if (this.health > this.alive) {
            document.getElementById("playerpanel-body").style.backgroundColor = "red";
            setTimeout("changeColor('green')", 100)
            if (this.health <= 50) {
                document.getElementById("playerpanel-body").style.backgroundColor = "red";
                setTimeout("changeColor('yellow')", 100)
                if (this.health <= 25) {
                    document.getElementById("playerpanel-body").style.backgroundColor = "black";
                    setTimeout("changeColor('red')", 100)
                }
            }
        } else if (this.health < 0) {
            document.getElementById("pBar").classList.remove("progress-bar-warning");
            document.getElementById("player-panel").classList.add("panel-danger");
            document.getElementById("playerpanel-body").style.backgroundColor = "red";
            this.proWidth.style.width = 0 + '%';
            alert("Didn't any ever to tell you it isn't nice to hit someone when their down?");
            reset();
        }
    },
};

function changeColor(info) {
    document.getElementById("playerpanel-body").style.backgroundColor = info;
}
//Player.health = 0, Changes panel color to red, sets background color to red, and alerts player their dead.
function death() {
    document.getElementById("player-panel").classList.add("panel-danger");
    document.getElementById("playerpanel-body").style.backgroundColor = "red";
    alert("Sorry " + player.name + "! You died! *Queue* 'worlds smallest violen'");
    reset();
}

function cleanUp() {
    document.getElementById("pName").textContent = player.name;
    document.getElementById("pBar").classList.remove("progress-bar-warning")
    document.getElementById("pBar").classList.remove("progress-bar-danger")
    document.getElementById("pBar").classList.add("progress-bar-success");
    document.getElementById("player-panel").classList.remove("panel-warning");
    document.getElementById("player-panel").classList.remove("panel-danger");
    document.getElementById("player-panel").classList.add("panel-success");
    document.getElementById("playerpanel-body").style.backgroundColor = "green";
}

function reset() {
    player.health = 100;
    player.hits = 0;
    player.name = "King Kong";
    cleanUp();
    player.update();
    player.barUpdate();
}


//console.log(items.shield.modifier)
//console.log(items.sword.modifier)